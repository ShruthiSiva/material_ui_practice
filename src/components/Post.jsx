import React from 'react'
import {
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Checkbox
} from '@mui/material';

import { Favorite, MoreVert, Share, FavoriteBorder } from "@mui/icons-material";

const Post = () => {
  return (
    <Card sx={{margin:5}}>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
        />
        <CardMedia
            component="img"
            height="20%"
            image="https://tastesbetterfromscratch.com/wp-content/uploads/2020/04/Paella-7-300x300.jpg"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
            <IconButton aria-label="share">
            <Share />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Post;
