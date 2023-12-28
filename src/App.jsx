import "./App.css";
import PostsList from "./features/post/PostsList";
import AddPostForm from "./features/post/AddPostForm";
import EditPostForm from "./features/post/editPostForm";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom"
import SinglePostPage from "./features/post/SinglePostPage";

const App=()=>{

  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element = {< PostsList/>}/>

        <Route path = "post">
          <Route index element = {< AddPostForm/>}/>
          <Route path=":postId" element ={<SinglePostPage/>} />
          <Route path="edit/:postId" element={<EditPostForm/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;