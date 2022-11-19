import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Auth } from './components/Auth';
import Nav from './components/Nav';
import CreatePost from './components/CreatePost';
import PostDetails from './components/PostDetails';
import Posts from './components/Posts';
import UserPosts from './components/UserPosts';
import Explore from './api/explore'
import About from './components/About'



function App() {
  return <React.Fragment>
  <header>
    <Nav/>
  </header>
  <main>
    <Routes>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/posts/create' element={<CreatePost/>}></Route>
      <Route path='/myPosts' element={<UserPosts/>}></Route>
      <Route path='/myPosts/:id' element={<PostDetails/>}></Route>
      <Route path='/explore' element={<Explore/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
  </main>
    </React.Fragment>
}

export default App;
