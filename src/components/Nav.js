import React, {useState}from 'react'
import { AppBar, Button, Toolbar, Typography, Box, Tab, Tabs } from '@mui/material'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { authActions } from '../store'

 const Nav = () => {
  const dispath = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const [value, setValue] = useState();
  return (
    <AppBar className='AppBar'>
      <Toolbar>
        <Typography variant='h4'> Explorer </Typography>
        { isLoggedIn && <Box className='Tabs'>
          <Tabs textColor='inherit' value={value} onChange={(e,val) => setValue(val)}>
            <Tab LinkComponent={Link} to='/about' label="About"></Tab>
            <Tab LinkComponent={Link} to='/posts' label="All Posts"></Tab>
            <Tab LinkComponent={Link} to='/myPosts' label="My Posts"></Tab>
            <Tab LinkComponent={Link} to='/explore' label="Explore"></Tab>
          </Tabs>
        </Box>}
        <Box className='NavBox'>
          { !isLoggedIn && <> 
          <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Register </Button>
          <Button LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Login </Button> 
          </>}
          {isLoggedIn && <Button onClick={()=>dispath(authActions.logout())} LinkComponent={Link} to='/auth' variant='contained' sx={{ margin: 1, borderRadius: 10 }}> Logout </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Nav;



