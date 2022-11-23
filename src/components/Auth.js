import "../App.css"
import { Button, Typography, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { authActions } from "../store"
import { useNavigate } from "react-router-dom"


const baseURL = process.env.REACT_APP_BACKEND_URL

export const Auth = () => {
  const navigate = useNavigate()
  const dispath = useDispatch()
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


  const sendRequest = async (type="login") => {
    const res = await axios.post(`${baseURL}/user/login`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err));

    const data = await res.data
    // console.log(data)
    return data
  }

  // const register = 



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    if (isRegistered) {
      sendRequest("register").then(()=>dispath(authActions.login())).then(() => navigate("/posts"))
    } else {
      sendRequest().then(()=>dispath(authActions.login())).then(() => navigate("/posts"))
    }
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
