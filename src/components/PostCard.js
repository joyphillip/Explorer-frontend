import React from 'react'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'

const PostCard = ({title, location, description, images, date, user }) => {
  return (
    <Card sx={{ margin:'auto', width: '40%', marginTop: 2, padding: 2, ":hover": {boxShadow: "10px 10px 20px #ccc",} }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {user}
          </Avatar>
        }
        
        title={title}
        header= {location}
        subheader= {date}

      />
      <CardMedia
        component="img"
        height="194"
        image= {images}
        alt="image url"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default PostCard