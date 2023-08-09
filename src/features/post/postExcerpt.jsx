import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./reactionButton";
import "../../css/PostsList.css";
import { Link } from "react-router-dom";

const PostExcerpt = ({post})=>{
    return(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p> 
                <Link to={`post/${post.id}`} className="link">View Post &nbsp;</Link>
                <PostAuthor userId = {post.userId} /> 
                <TimeAgo timeStamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default PostExcerpt;