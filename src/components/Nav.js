import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
// import './App.css'

export const Nav = () => {
  return <AppBar>
  <Toolbar>
    <Typography variant='h4'>
      Explorer
    </Typography>
    <Box>
      <Button className='NavButton'> Register </Button>
      <Button className='NavButton'> Login </Button>
    </Box>
  </Toolbar>
  </AppBar>
}
