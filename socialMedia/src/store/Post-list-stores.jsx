import { createContext, useReducer } from "react";

// const default_context = ;

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reactionss, tags) => {
    // console.log(`${userId}, ${postTitle}, ${postBody},${reactionss},${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactionss: reactionss,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    console.log(`delete post called for :${postId}`);

    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    default_PostList
  );

  return (
    <Postlist.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </Postlist.Provider>
  );
};

const default_PostList = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends,I am going to Mumbai for my vacations.Hope t enjoy a lot. Peace out..",
    reactionss: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti ke badbhi pass hain bhai .hard to belive..",
    reactionss: 15,
    userId: "user-12",
    tags: ["Graduting", "unbelievable"],
  },
];

export default PostListProvider;
