import "./App.css";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";
import { useEffect } from "react";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom"
import SinglePostPage from "./features/post/SinglePostPage";

const App=()=>{

  return(
    <Routes>
      <Route path="/" element={<Layout />}/>
        <Route index element = {< PostsList/>}/>

        <Route path = "post">
          <Route index element = {< AddPostForm/>}/>
          <Route path=":postId" element ={<SinglePostPage/>}/>

        </Route>

    </Routes>
  )
}

export default App;