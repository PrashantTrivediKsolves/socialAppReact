import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import SideBarComponents from "./components/SideBarComponents";

import CreatePost from "./components/CreatePost";

import PostList from "./components/PostList";

import { useState } from "react";
import PostListProvider from "./store/Post-list-stores";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBarComponents></SideBarComponents>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
