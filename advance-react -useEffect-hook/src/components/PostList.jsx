import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { Postlist } from "../store/Post-list-stores";
import WelcomeMessage from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(Postlist);

  // const [dataFetched, setDataFetched] = useState(false);
  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("All posts");
  //       console.log(data);
  //       addInitialPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  // Alternative using useEffect........

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
  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {!fetching &&
        postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
};
export default PostList;
