import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import { Grid } from '@mui/material'

const baseURL = process.env.REACT_APP_BACKEND_URL

const Posts = () => {
  const [posts, setPosts] = useState()
  const sendRequest = async () => {
    const res = await axios.get(`${baseURL}/posts`).catch(err=>console.log(err))
    const data = await res.data
    return data
  }

  //re-render entire component
  useEffect(() => {
    sendRequest().then((data) => setPosts(data.posts))
  }, [])
  console.log(posts)

  return (
    <div>
    <Grid container spacing={2} marginTop={3} margin='auto'>
    {posts && posts.map((post, index) => (
      <PostCard
      id={post._id}
      isUser={localStorage.getItem('userId') ===post.user._id}
      title={post.title}
      description={post.description}
      location={post.location}
      date={post.date}
      images={post.images}
      user={post.user.name}
      />
    ))}
    </Grid>
    </div>
  )
}

export default Posts