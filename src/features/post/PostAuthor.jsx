import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlices";
import { intlFormat } from "date-fns";

const PostAuthor=({userId})=>{

    const id = parseInt(userId, 10);
    
    const users = useSelector(selectAllUsers);

    const author = users.find(user => user.id === id)

    return(
        <span>by <i>{author ? author.name : "Unknown Author"}</i></span>
    )
}

export default PostAuthor;