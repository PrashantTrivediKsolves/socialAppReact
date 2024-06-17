import { useContext } from "react";
import Post from "./Post";
import { Postlist } from "../store/Post-list-stores";
const PostList = () => {
  const { postList } = useContext(Postlist);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};
export default PostList;
