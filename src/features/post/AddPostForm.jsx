import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import "../../css/AddPostForm.css";
import { selectAllUsers } from "../users/userSlices";


const initialState={
    id: null,
    title: "",
    content: "",
    userId: "",
    date: ""

}

const AddPostForm=()=>{
   
    const [post, setPost]= useState(initialState);
    const dispatch = useDispatch();

     const users= useSelector(selectAllUsers)  

    const onChangedInput = (e)=>{
        const {name, value} = e.target;
        setPost({...post, [name] : value})
    }

    const onClickAddPost=()=>{
        dispatch(postAdded({
            ...post
        }))
        setPost(initialState)
    }

    const usersOptions= users.map(user=>{
        return(<option key={user.id} value={user.id}> {user.name} </option>)
    })

    const addAvailable= Boolean(post?.title) && Boolean(post?.content) && Boolean(post?.userId)


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
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="content">Content:</label>
                <textarea
                    type = "text"
                    name = "content"
                    value = {post?.content}
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