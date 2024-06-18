import {
  createContext,
  useCallback,
  useReducer,
  useMemo,
  useState,
  useEffect,
} from "react";

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
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log("All posts");
        console.log(data);
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleaning up useEffect");
      controller.abort();
    };
  }, []);

  const addPost = (post) => {
    // console.log(`${userId}, ${postTitle}, ${postBody},${reactionss},${tags}`);
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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
        fetching: fetching,
      }}
    >
      {children}
    </Postlist.Provider>
  );
};

const default_PostList = [];

export default PostListProvider;
