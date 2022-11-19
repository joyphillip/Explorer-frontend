import React from 'react'
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material'
import '../App.css'


 const Nav = () => {
  return (
    <AppBar class='AppBar'>
      <Toolbar>
        <Typography variant='h4'> Explorer </Typography>
        <Box class='NavBox'>
          <Button class='NavBtn'> Register </Button>
          <Button class='NavBtn'> Login </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Nav;



