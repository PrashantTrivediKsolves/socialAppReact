import { useContext, useRef } from "react";
import { Postlist } from "../store/Post-list-stores";
import { redirect, useNavigate } from "react-router-dom";

import { Form } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="post" className="createPost">
      <div className="mb-3">
        <label for="userId" className="form-label">
          Enter your userId here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your user Id"
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();

  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      reactions: postData.reactions,
      userId: postData.userId,
      tags: postData.tags,
    }),
  })
    .then((res) => res.json())
    .then((post) => console.log(post));
  console.log(postData);

  return redirect("/");
};
export default CreatePost;
