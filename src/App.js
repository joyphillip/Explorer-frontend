import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';



function App() {
  return 
    <>
  {/* // <React.Fragment> */}
    <Nav/>
    <Routes>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/myPosts' element={<UserPosts/>}></Route>
      <Route path='/myPosts/:id' element={<PostDetails/>}></Route>
      <Route path='/posts/create' element={<createPost/>}></Route>
    </Routes>
  </>
}

export default App;
