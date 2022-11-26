import React, {useState} from 'react'
import { Button, Box, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'


const baseURL = process.env.REACT_APP_BACKEND_URL

const CreatePost = () => {
  const [inputs, setInputs] = useState({
    title: "",
    location: "",
    description: "",
    images: "",
    date: ""
  })

  const handleChange = (e) => {
    setInputs((preState) => ({
      ...preState,
      [e.target.name] : e.target.value
    }))
  }

  const sendRequest = async() => {
    const res = await axios.post(`${baseURL}/posts/create`, {
      title: inputs.title,
      location: inputs.location,
      description: inputs.description,
      images: inputs.images,
      date: inputs.date,
      user: localStorage.getItem('userId')
    }).catch(err => console.log(err))

    const data = await res.data
    return data
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    sendRequest()
    .then(data => console.log(data))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
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
          > Add a new Post!
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
          LinkComponent={Link} 
          to='/myPosts' 
          >
          Create
          </Button>
        </Box>
      </form>
    </div>
  )
}

export default CreatePost
