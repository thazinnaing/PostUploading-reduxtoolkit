import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost, selectPostById, deletePost } from "./postSlice";
import "../../css/AddPostForm.css";
import { selectAllUsers } from "../users/userSlices";
import { useParams, useNavigate } from "react-router-dom";

const EditPostForm = () => {
  const { postId } = useParams();
  const postById = useSelector((state) =>
    selectPostById(state, Number(postId))
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const initialState = {
    title: postById?.title,
    body: postById?.body,
    userId: postById?.userId,
  };

  const [post, setPost] = useState(initialState);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  if (!postById) {
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    );
  }

  const addAvailable =
    [post?.title, post?.body, post?.userId].every(Boolean) &&
    addRequestStatus === "idle";

  const onChangedInput = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onUpdate = () => {
    if (addAvailable) {
      try {
        setAddRequestStatus("pending");
        dispatch(
          updatePost({
            ...post,
            id: postById.id,
            reactions: postById.reactions,
          })
        ).unwrap();

        setPost({ ...post, title: "", body: "", userId: null });
        navigate("/");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  const onDelete = () => {
    try {
      setAddRequestStatus("pending");
      dispatch(deletePost({ id: postById?.id })).unwrap();

      setPost({ ...post, title: "", body: "", userId: null });
      navigate("/");
    } catch (err) {
      console.error("Failed to delete the post", err);
    } finally {
      setAddRequestStatus("idle");
    }
  };

  const usersOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.name}{" "}
      </option>
    );
  });

  return (
    <section className="addPostSection">
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          name="title"
          value={post?.title}
          required
          onChange={onChangedInput}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          name="userId"
          defaultValue={post?.userId}
          onChange={onChangedInput}
        >
          <option></option>
          {usersOptions}
        </select>

        <label htmlFor="body">Content:</label>
        <textarea
          type="text"
          name="body"
          value={post?.body}
          required
          onChange={onChangedInput}
        />

        <button
          type="button"
          className="addButton"
          disabled={!addAvailable}
          onClick={onUpdate}
        >
          Update Post
        </button>

        <button type="button" className="deleteButton" onClick={onDelete}>
          Delete Post
        </button>
      </form>
    </section>
  );
};

export default EditPostForm;
