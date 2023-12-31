import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlices";

// eslint-disable-next-line react/prop-types
const PostAuthor=({userId})=>{

    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === userId)

    return(
        <span>by <i>{author ? author.name : "Unknown Author"}</i></span>
    )
}

export default PostAuthor;