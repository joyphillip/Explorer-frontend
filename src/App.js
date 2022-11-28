import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { Auth } from './components/Auth';
import Nav from './components/Nav';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost'
import Posts from './components/Posts';
import UserPosts from './components/UserPosts';
import About from './components/About'




function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  console.log(isLoggedIn)

  return <React.Fragment>
  <header>
    <Nav/>
  </header>
  <main>
    <Routes>
    {!isLoggedIn ? ( <Route path='/auth' element={<Auth/>}/> ): (
      <>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/posts' element={<Posts/>}></Route>
      <Route path='/posts/create' element={<CreatePost/>}></Route>
      <Route path='/myPosts' element={<UserPosts/>}></Route>
      <Route path='/myPosts/:id' element={<EditPost/>}></Route>
      </>
      )}
    </Routes>
    
  </main>
    </React.Fragment>
}

export default App;
