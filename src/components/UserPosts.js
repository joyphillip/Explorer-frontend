import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const baseURL = process.env.REACT_APP_BACKEND_URL

const UserPosts = () => {
  const [posts, setPosts] = useState()
  const id = localStorage.getItem('userId')
  
  const sendRequest = async () => {
    const res = await axios.get(`${baseURL}/posts/user/${id}`).catch(err => console.log(err))
    const data = await res.data
    return data
  }

  useEffect(() => {
    sendRequest().then((data) => setPosts(data.posts))
    // eslint-disable-next-line
  }, [])
  console.log(posts)

  return (
    <div>
    <Button LinkComponent={Link} to='/posts/create' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Add new Post </Button>
      
      {posts && posts.map((post, index) => (
      <PostCard 
      title={post.title}
      description={post.description}
      location={post.location}
      date={post.date}
      images={post.images}
      user={post.user.name}
      />
    ))}
    </div>
  )
}

export default UserPosts


