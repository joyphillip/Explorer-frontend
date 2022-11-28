import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from './PostCard'
import { Grid, IconButton, CardActions, CardContent, Card } from '@mui/material'
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const baseURL = process.env.REACT_APP_BACKEND_URL

const UserPosts = () => {
  const [user, setUser] = useState()
  const [expanded, setExpanded] = useState(false);
  const id = localStorage.getItem('userId')
  
  const sendRequest = async () => {
    const res = await axios.get(`${baseURL}/posts/user/${id}`)
    .catch(err=>console.log(err))

    const data = await res.data
    // console.log(data)
    return data
  }
 
  useEffect(() => {
    sendRequest().then((data)=> setUser(data.user))
  })
  // console.log(user)

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
    <div>
    <Grid container spacing={2} marginTop={3} margin='auto'>
      {user && user.posts && user.posts.map((post, index) => (
      
      <PostCard key={index}
      id={post._id}
      isUser={true}
      title={post.title}
      description={post.description}
      location={post.location}
      date={post.date}
      images={post.images}
      user={user.name}
      >
      <Card>
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
          {post.description}
        </CardContent>
      </Collapse> 
      </Card> 
      </PostCard>
    
    ))}
    </Grid>
    </div>
  )
}

export default UserPosts