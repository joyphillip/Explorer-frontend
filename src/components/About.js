import React from 'react'
import { Box, Typography } from '@mui/material'
const About = () => {

  return (
    <div>
      <Box 
        backgroundColor='white'
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
          > About
          </Typography>

          
          <Typography
          textAlign={'center'}>
            Hello & Welcome to Explorer,
            Here you can browse postcards from friends all over the world and even store your travel memories.
            Have fun!
          </Typography>
        </Box>
    </div>
  )
}

export default About