import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postSlice";
import "../../css/AddPostForm.css";
import { selectAllUsers } from "../users/userSlices";


const initialState={
    title: "",
    body: "",
    userId: null

}

const AddPostForm=()=>{
   
    const [post, setPost]= useState(initialState);
    const [addRequestStatus, setAddRequestStatus] = useState("idle")

    const dispatch = useDispatch();
    const users= useSelector(selectAllUsers)  

    const addAvailable= [post?.title, post?.body, post?.userId].every(Boolean) && addRequestStatus === "idle";

    const onChangedInput = (e)=>{
        const {name, value} = e.target;
        setPost({...post, [name] : value})
    }

    const onClickAddPost=()=>{
        if(addAvailable){
            try{
                setAddRequestStatus("pending")
                dispatch(addNewPost(post)).unwrap()

                setPost(initialState)
            }
            catch(err){
                console.error("Failed to save the post", err)
            }
            finally{
                setAddRequestStatus("idle")
            }
        }
    }

    const usersOptions= users.map(user=>{
        return(<option key={user.id} value={user.id}> {user.name} </option>)
    })

    


    return(
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="title">Post Title</label>
                <input 
                    type = "text"
                    name = "title"
                    value = {post?.title}
                    required
                    onChange={onChangedInput}
                />

                <label htmlFor="postUser">Author:</label>
                <select 
                    id="postUser" 
                    name="userId" 
                    onChange={onChangedInput}
                >
                    <option></option>
                    {usersOptions}
                </select>

                <label htmlFor="body">Content:</label>
                <textarea
                    type = "text"
                    name = "body"
                    value = {post?.body}
                    required
                    onChange={onChangedInput}

                />
                
                <button 
                    type="button" 
                    className="addButton"
                    disabled= {!addAvailable}
                    onClick={onClickAddPost}
                >
                Add Post
                </button>
            </form>
        </section>
    )

}

export default AddPostForm;