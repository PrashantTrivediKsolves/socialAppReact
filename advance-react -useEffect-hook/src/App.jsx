import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/Header";

import Footer from "./components/Footer";

import SideBarComponents from "./components/SideBarComponents";

import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";

import { useState } from "react";
import PostListProvider from "./store/Post-list-stores";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBarComponents
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBarComponents>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
