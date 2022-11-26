import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'

const UserPosts = () => {
  // eslint-disable-next-line
  const [user, setUser] = useState()
  const id = localStorage.getItem('userId')
  
  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:3000/posts/user/${id}`).catch(err=>console.log(err))

    const data = await res.data
    console.log(data)
    return data
  }
 
  useEffect(() => {
    sendRequest().then((data)=> setUser(data.user))
  })
  console.log(user)

  return (
    <div>
      {user && user.posts && user.posts.map((post, index) => (
      <PostCard key={index}
      title={post.title}
      description={post.description}
      location={post.location}
      date={post.date}
      images={post.images}
      user={user.name}
      />
    ))}
    </div>
  )
}

export default UserPosts