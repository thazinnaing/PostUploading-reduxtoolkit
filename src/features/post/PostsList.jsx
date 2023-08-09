import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postSlice";
import { useEffect } from "react";
import "../../css/PostsList.css";
import PostExcerpt from "./postExcerpt";

const PostsList = ()=>{
    const dispatch= useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const postError = useSelector(getPostsError);

    useEffect(()=>{
        if (postStatus === "idle"){
            dispatch(fetchPosts())
        }
    },[postStatus])

    console.log("posts", posts);

    let content;
    if(postStatus === "loading"){
        content = <p>"LOADING ..."</p>;
    }

    else if(postStatus=== "succeeded"){
        const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date))
        console.log("orderPosts", orderedPosts);
        content = orderedPosts.map(post=>(
        <PostExcerpt key={post.id} post={post}/>
    ))
    }

    else if(postStatus === "failed"){
        content = <p>{postError}</p>
    }
    

    return(
        <section>
            {content}
        </section>

    )

}

export default PostsList;