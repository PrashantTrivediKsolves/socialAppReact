import { createContext, useCallback, useReducer } from "react";

// const default_context = ;

export const Postlist = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_Initial_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    // console.log(`${userId}, ${postTitle}, ${postBody},${reactionss},${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addInitialPosts = (posts) => {
    // console.log(`${userId}, ${postTitle}, ${postBody},${reactionss},${tags}`);
    dispatchPostList({
      type: "ADD_Initial_POST",
      payload: {
        posts,
      },
    });
  };
  const deletePost = useCallback(
    (postId) => {
      console.log(`delete post called for :${postId}`);
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId,
        },
      });
    },
    [dispatchPostList]
  );

  const arr = [5, 3, 6, 7, 4];
  const sortedArr = useMemo(() => arr.sort(), arr);

  // useCallBack and useMemo are optimizations techniques........

  return (
    <Postlist.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        addInitialPosts,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

const default_PostList = [];

export default PostListProvider;
