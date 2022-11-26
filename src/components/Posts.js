import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'

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

export default Posts