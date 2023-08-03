import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import "../../css/PostsList.css";
import PostAuthor from "./PostAuthor";

const PostsList = ()=>{
    const posts = useSelector(selectAllPosts);

    console.log("posts", posts);

    const renderedPosts= posts.map(post=>(
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p> <PostAuthor userId={post.userId}/> </p>


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