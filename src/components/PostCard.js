import React from 'react'
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_URL

const PostCard = ({title, location, description, images, date, user, isUser, id }) => {
  const navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/myPosts/${id}`)
  }
  
  const deleteRequest = async () => {
    const res = await axios.delete(`${baseURL}/posts/${id}`)
    .catch(err=>console.log(err))

    const data = await res.data
    return data
  }
  const handleDelete = () => {
    deleteRequest()
    .then(()=> navigate('/'))
    .then(() => navigate('/posts'))
  }
  
  return (
    <Card sx={{ margin:'auto', width: '40%', marginTop: 2, padding: 2, ":hover": {boxShadow: "10px 10px 20px #ccc",} }}>
    {isUser && (
      <Box display='flex'>
        <IconButton 
          onClick={handleEdit}
          sx={{marginLeft:'auto'}}>
        <EditIcon/>
        </IconButton>
        
        <IconButton
        onClick={handleDelete}>
        <HighlightOffOutlinedIcon/>
        </IconButton>
      </Box>
    )}
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