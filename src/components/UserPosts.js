import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import { Grid } from '@mui/material'

const baseURL = process.env.REACT_APP_BACKEND_URL

const UserPosts = () => {
  const [user, setUser] = useState()
  const id = localStorage.getItem('userId')
  
  const sendRequest = async () => {
    const res = await axios.get(`${baseURL}/posts/user/${id}`)
    .catch(err=>console.log(err))

    const data = await res.data
    // console.log(data)
    return data
  }
 
  useEffect(() => {
    sendRequest().then((data)=> setUser(data.user))
  })
  // console.log(user)

  return (
    <div>
    <Grid container spacing={2} marginTop={3} margin='auto'>
      {user && user.posts && user.posts.map((post, index) => (
      
      <PostCard key={index}
      id={post._id}
      isUser={true}
      title={post.title}
      description={post.description}
      location={post.location}
      date={post.date}
      images={post.images}
      user={user.name}
      />
    ))}
    </Grid>
    </div>
  )
}

export default UserPosts