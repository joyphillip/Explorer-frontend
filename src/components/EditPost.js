import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Typography, InputLabel, TextField, Button} from '@mui/material'

const baseURL = process.env.REACT_APP_BACKEND_URL

const EditPost = () => {
  const navigate = useNavigate()
  const [post, setPost]= useState()
  const id = useParams().id
  console.log(id)

  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    setInputs((preState) => ({
      ...preState,
      [e.target.name] : e.target.value
    }))
  }

  const fetchDetails = async () => {
    const res = await axios.get(`${baseURL}/posts/${id}`)
    .catch(err => console.log(err))

    const data = await res.data
    return data
  }
  useEffect(() => {
    fetchDetails().then((data) => {
      setPost(data.post)
      setInputs({
        title: data.post.title,
        location: data.post.location,
        description: data.post.description,
        images: data.post.images,
        date: data.post.date
      })
    })
    // eslint-disable-next-line
  }, [id])

  const sendRequest = async () => {
    const res = await axios.put(`${baseURL}/posts/update/${id}`, {
      title: inputs.title,
      location: inputs.location,
      description: inputs.description,
      images: inputs.images,
      date: inputs.date
    }).catch(err => console.log(err))
    
    const data = await res.data
    return data
  }
  console.log(post)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    sendRequest().then(data=>console.log(data))
    .then(()=> navigate('/myPosts/'))
  }

  return (
    <div>
    {inputs && (
      <form onSubmit={handleSubmit}>
        <Box 
        backgroundColor='white'
        border="inset"
        borderColor='black'
        borderRadius={10}
        padding={3}
        margin='auto'
        marginTop={4}
        display='flex'
        flexDirection={'column'}
        width={'60%'}
        >
          <Typography
          variant='h4'
          textAlign={'center'}
          padding={3}
          > Edit Post
          </Typography>
          <InputLabel > Title </InputLabel>
          <TextField 
          value={inputs.title}
          name='title'
          onChange={handleChange}
          />
          
          <InputLabel> Location </InputLabel>
          <TextField 
          value={inputs.location}
          name='location'
          onChange={handleChange}
          />
          
          <InputLabel> Description </InputLabel>
          <TextField 
          value={inputs.description}
          name='description'
          onChange={handleChange}
          />
          
          <InputLabel> Images </InputLabel>
          <TextField 
          value={inputs.images}
          name='images'
          onChange={handleChange}
          />
          
          <InputLabel> Date </InputLabel>
          <TextField 
          value={inputs.date}
          name='date'
          onChange={handleChange}
          />

          <Button
          type='submit'
          variant='contained'
          sx={{marginTop: 3}}
          >
          Update
          </Button>
        </Box>
      </form>
    )}</div>
  )
}

export default EditPost