import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
// import Icon from '@mui/material/Icon'
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({movie={}}) {
  const {image,name,cuisine,rating}=movie
  return (
     <Grid size={2} justifyContent="center" alignItems="center" >
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Cuisine: {cuisine}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary',display:'flex', alignItems:'center'}}>
          Rating: {rating}<StarIcon sx={{ ml: 0.3, color: 'gold'}}/>
        </Typography>
      </CardContent>
      <CardActions>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
