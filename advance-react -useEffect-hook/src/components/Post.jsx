import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";

import { Postlist } from "../store/Post-list-stores";
const Post = ({ post }) => {
  const { deletePost } = useContext(Postlist);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}{" "}
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdAutoDelete />
            {/* <span class="visually-hidden">unread messages</span> */}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-success reactions" role="alert">
          This post has been liked by {post.reactions.likes} people and disliked
          by {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
};

export default Post;
