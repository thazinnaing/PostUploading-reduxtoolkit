import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./reactionButton";

const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  console.log("post", post);

  if (!post) {
    return (
      <section>
        <h2>Post Not Found!</h2>
      </section>
    );
  } else {
    return (
      <div className="singlePost">
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>
            <Link to={`/post/edit/${post.id}`}>Edit post </Link>
            <PostAuthor userId={post.userId} />
            <TimeAgo timeStamp={post.date} />
          </p>
          <ReactionButtons post={post} />
        </article>
      </div>
    );
  }
};

export default SinglePostPage;
