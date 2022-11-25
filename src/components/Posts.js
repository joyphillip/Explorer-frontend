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
    <PostCard/>
    </div>
  )
}

export default Posts