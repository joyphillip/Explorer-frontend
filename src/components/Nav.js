import React, {useState}from 'react'
import { AppBar, Button, Toolbar, Typography, Box, Tab, Tabs } from '@mui/material'
import '../App.css'


 const Nav = () => {
  const [value, setValue] = useState();
  return (
    <AppBar class='AppBar'>
      <Toolbar>
        <Typography variant='h4'> Explorer </Typography>
        <Box class='Tabs'>
          <Tabs textColor='white' value={value} onChange={(e,val) => setValue(val)}>
            <Tab label="About"></Tab>
            <Tab label="All Posts"></Tab>
            <Tab label="My Posts"></Tab>
            <Tab label="Explore"></Tab>
          </Tabs>
        </Box>
        <Box class='NavBox'>
          <Button class='NavBtn'> Register </Button>
          <Button class='NavBtn'> Login </Button>
          <Button class='NavBtn'> Logout </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Nav;



