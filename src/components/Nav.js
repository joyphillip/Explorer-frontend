import React, {useState}from 'react'
import { AppBar, Button, Toolbar, Typography, Box, Tab, Tabs } from '@mui/material'
import '../App.css'
import {Link} from 'react-router-dom'

 const Nav = () => {
  const [value, setValue] = useState();
  return (
    <AppBar class='AppBar'>
      <Toolbar>
        <Typography variant='h4'> Explorer </Typography>
        <Box class='Tabs'>
          <Tabs textColor='white' value={value} onChange={(e,val) => setValue(val)}>
            <Tab LinkComponent={Link} to='/about' label="About"></Tab>
            <Tab LinkComponent={Link} to='/posts' label="All Posts"></Tab>
            <Tab LinkComponent={Link} to='/myPosts' label="My Posts"></Tab>
            <Tab LinkComponent={Link} to='/explore' label="Explore"></Tab>
          </Tabs>
        </Box>
        <Box class='NavBox'>
          <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Register </Button>
          <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Login </Button>
          <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Logout </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Nav;



