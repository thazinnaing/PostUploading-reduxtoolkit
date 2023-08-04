import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import "../../css/PostsList.css";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";


const PostsList = ()=>{
    const posts = useSelector(selectAllPosts);

    console.log("posts", posts);
    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))

    const renderedPosts= orderedPosts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p> 
                <PostAuthor userId = {post.userId} /> 
                <TimeAgo timeStamp={post.date} />
            </p>



        </article>
    ))

    return(
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>

    )

}

export default PostsList;