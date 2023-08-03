import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlices";

const PostAuthor=(userId)=>{
    const users = useSelector(selectAllUsers);

    console.log("userId", userId);
    console.log("users", users);

    const author = users.find((user)=> user.id === userId)
    console.log("author",author)

    return(
        <span>by <i>{author ? author.name : "Unknown Author"}</i></span>
    )
}

export default PostAuthor;