import "../App.css"
import { Button, Typography, TextField, Box } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"
import { authActions } from "../store"
import { useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import ModeOfTravelOutlinedIcon from '@mui/icons-material/ModeOfTravelOutlined';


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
    const res = await axios.post(`${baseURL}/user/${type}`, {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password
    }).catch(err => console.log(err));

    const data = await res.data
    console.log(data)
    return data
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs)
    if (isRegistered) {
      sendRequest("register")
      .then((data) =>localStorage.setItem('userId', data.user._id))
      .then(()=>dispath(authActions.login()))
      .then(() => navigate("/posts"))
    } else {
      sendRequest()
      .then((data) =>localStorage.setItem('userId', data.user._id))
      .then(()=>dispath(authActions.login()))
      .then(() => navigate("/posts"))
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
        <Avatar>
          <ModeOfTravelOutlinedIcon 
          fontSize="large" 
          sx={{color: "red"}}
          /> 
        </Avatar>
          <Typography 
            variant="h4" 
            padding={3} 
            textAlign='center'>
            {isRegistered ? "Register" : "Login"}
          </Typography>
        
        {isRegistered && <TextField 
        name='name' 
        onChange={handleChange} 
        value={inputs.name} 
        label='Name' 
        margin="normal"/>}{" "}

          <TextField  
          name='email' 
          onChange={handleChange} 
          value={inputs.email} 
          type={'email'} 
          label='Email' 
          margin="normal"/>
          
          <TextField 
          name='password' 
          onChange={handleChange} 
          value={inputs.password} 
          type={'password'} 
          label='Password' 
          margin="normal"/> 

          <Button 
          type='submit' 
          sx={{borderRadius: 2, margin: 2}} 
          variant='contained' 
          color='success'> 
          Enter 
          </Button>
          
          <Button 
          onClick={()=> setIsRegistered(!isRegistered)}> 
          {isRegistered ? "Login" : "Register"}
          </Button>
        </Box>
      </form>
    </div>
  )

}
