import React from 'react'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

const PostCard = () => {
  return (
    <Card sx={{ margin:'auto', width: '40%', marginTop: 2, padding: 2, ":hover": {boxShadow: "10px 10px 20px #ccc",} }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PostCard