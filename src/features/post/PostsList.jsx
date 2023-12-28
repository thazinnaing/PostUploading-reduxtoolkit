import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postSlice";
import { useEffect } from "react";
import "../../css/PostsList.css";
import PostExcerpt from "./postExcerpt";
import { useNavigate } from "react-router-dom";

const PostsList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const postError = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      console.log("Post status, firstTime123");
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  console.log("posts", posts);

  let content;
  if (postStatus === "loading") {
    content = <p>"LOADING ..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    console.log("orderPosts", orderedPosts);
    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{postError}</p>;
  }

  return (
    <section >
      <div onClick={()=>navigate("/post")} className="add-post">
        <FontAwesomeIcon className="add-icon" icon={faSquarePlus} />
        <button className="add-btn">Add New Post</button>
      </div>
      {content}
    </section>
  );
};

export default PostsList;
