import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';


const baseURL = process.env.REACT_APP_BACKEND_URL



const PostCard = ({title, location, description, images, date, user, isUser, id }) => {
  const navigate = useNavigate()
  const [expanded, setExpanded] = React.useState(false);

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

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  
  return (
    <Card sx={{ 
      margin:'auto', 
      width: '40%', 
      marginTop: 2, 
      padding: 2,
      boxShadow: "5px 5px 10px #ccc", 
      ":hover": {boxShadow: "10px 10px 20px #ccc",}
       }}>
    {isUser && (
      <Box display='flex'>
        <IconButton 
          onClick={handleEdit}
          sx={{marginLeft:'auto'}}>
        <EditIcon/>
        </IconButton>
        
        <IconButton
        onClick={handleDelete}>
        <HighlightOffOutlinedIcon 
          color='warning' 
          variant='solid'/>
        </IconButton>
      </Box>
    )}
      <CardHeader
        avatar={
          <Avatar 
          sx={{ bgcolor: 'green' }} 
          aria-label="user">
          {user}
          </Avatar>
        }
        
        title={title}
        subheader= {date}

      />
      <CardMedia
        component="img"
        height="194"
        image= {images}
        alt="image url"
      />
      <hr/>
      <Typography>
      {location}
      </Typography>

      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />

        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {description}
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default PostCard