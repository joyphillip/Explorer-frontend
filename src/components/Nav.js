import React, {useState}from 'react'
import { AppBar, Button, Toolbar, Typography, Box, Tab, Tabs } from '@mui/material'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { authActions } from '../store'
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

 const Nav = () => {
  const dispath = useDispatch()
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const [value, setValue] = useState();
  
  
  return (
    <AppBar sx={{bgcolor:'green'}} position='sticky' >
      <Toolbar>
        <Typography
          fontFamily={'Caveat'}
          fontSize={50} 
          variant='h4'> 
          Explorer <ConnectingAirportsIcon fontSize='medium'/>
        </Typography>

        { isLoggedIn && (
          <Box 
          class='Tabs' 
          display='flex'>

          <Tabs 
          textColor='inherit' 
          value={value} 
          onChange={(e,val) => setValue(val)}>
            
            <Tab 
            LinkComponent={Link} 
            to='/about' 
            label="About">
            </Tab>
            
            <Tab 
            LinkComponent={Link} 
            to='/posts' 
            label="All Posts">
            </Tab>

            <Tab 
            LinkComponent={Link} 
            to='/myPosts' 
            label="My Posts">
            </Tab>

            <Tab 
            LinkComponent={Link} 
            to='/posts/create' 
            label="Create">
            </Tab>

          </Tabs>
        </Box>)}

        <Box sx={{display: "flex", marginLeft: 'auto'}}>
          { !isLoggedIn && 
          (<> 
          <Button 
          LinkComponent={Link} 
          to='/auth' 
          variant='contained' 
          sx={{ margin: 1, borderRadius: 10 }}> 
          Register 
          </Button>

          <Button 
          LinkComponent={Link} 
          to='/auth' 
          variant='contained' 
          sx={{ margin: 1, borderRadius: 10 }}> 
          Login 
          </Button> 
          </>)}

          {isLoggedIn && 
          <Button 
          onClick={()=>dispath(authActions.logout())} 
          LinkComponent={Link} 
          to='/auth' 
          variant='contained' 
          sx={{ margin: 1, borderRadius: 10 }}> 
          Logout 
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default Nav;



