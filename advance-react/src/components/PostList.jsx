import { useContext } from "react";
import Post from "./Post";
import { Postlist } from "../store/Post-list-stores";
import WelcomeMessage from "./Welcome";
const PostList = () => {
  const { postList, addInitialPosts } = useContext(Postlist);

  const handleGetPostsClick = () => {
    // console.log("Get post clicked");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log("All posts");
        console.log(data);
        addInitialPosts(data.posts);
      });
  };
  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
