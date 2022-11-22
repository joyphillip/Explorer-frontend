import "../App.css"
import { Button, Typography, TextField, Box } from '@mui/material'
import React, { useState } from 'react'

let baseURL = process.env.REACT_APP_BACKEND_URL

export const Auth = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [isRegistered, setIsRegistered] = useState(false)

  const handleChange = (e) => {
    setInputs((preState) => ({
      ...preState,
      [e.target.name] : e.target.value
    }))
  }


  const loginUser = (e) => {
    e.preventDefault()
    fetch(baseURL + '/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    }).then(res => res.json())
    .then(resJson => {
      console.log(resJson)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    loginUser()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        maxWidth={400}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        boxShadow='10px 10px 20px #ccc'
        padding={3}
        margin='auto'
        marginTop={5}
        borderRadius={5}
        >
          <Typography variant="h4" padding={3} textAlign='center'>
          {isRegistered ? "Welcome" : "Login"}
          </Typography>
        
        {isRegistered && <TextField name='name' onChange={handleChange} value={inputs.name} label='Name' margin="normal"/>}{" "}
          <TextField  name='email' onChange={handleChange} value={inputs.email} type={'email'} label='Email' margin="normal"/>
          <TextField name='password' onChange={handleChange} value={inputs.password} type={'password'} label='Password' margin="normal"/> 
          <Button type='submit' sx={{borderRadius: 2, margin: 2}} variant='contained' color='success'> Enter </Button>
          
          <div>Already have an account?</div>
          <Button onClick={()=> setIsRegistered(!isRegistered)}> Login</Button>
        </Box>
      </form>
    </div>
  )
}
