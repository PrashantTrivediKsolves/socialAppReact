import { useContext, useRef } from "react";
import { Postlist } from "../store/Post-list-stores";

const CreatePost = () => {
  const { addPost } = useContext(Postlist);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElemenet = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    console.log(userIdElement.current.value);

    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;

    const reactionss = reactionsElement.current.value;
    const tags = tagsElemenet.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactionss, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElemenet.current.value = "";
  };
  return (
    <form className="createPost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="userId" className="form-label">
          Enter your userId here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
          ref={userIdElement}
        />
      </div>
      <div className="mb-3">
        <label for="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today ...."
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label for="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder=" Tell us more about it"
          ref={postBodyElement}
        />
      </div>

      <div className="mb-3">
        <label for="reaction" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label for="tags" className="form-label">
          Enter your hashtags here...
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please Enter tags using space"
          ref={tagsElemenet}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
