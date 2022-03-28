import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CustomCard(props) {
  return (
    <Card sx={{ height: 550 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="470"
          image={props.image}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.occupation}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}