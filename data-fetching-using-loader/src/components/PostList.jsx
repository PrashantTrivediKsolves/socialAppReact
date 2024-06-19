import { useContext, useState, useEffect } from "react";
import Post from "./Post";
import { Postlist } from "../store/Post-list-stores";
import WelcomeMessage from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  // const { postList } = useContext(Postlist);

  const postList = useLoaderData();

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

  return (
    <>
      {/* {<LoadingSpinner></LoadingSpinner>} */}
      {postList.length === 0 && <WelcomeMessage></WelcomeMessage>}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      console.log("All posts");
      console.log(data);
      return data.posts;
    });
};
export default PostList;
