// import React from 'react'
// import { Card, Icon, Image } from semanticUIReact

// const CustomCard = (props) => (
//   <Card>
//     <Image src={props.image} wrapped ui={false} />
//     <Card.Content>
//       <Card.Header>{props.name}</Card.Header>
//       <Card.Meta>
//         <span className='fullname'>Full Name : {props.fullName && props.fullName}</span>
//       </Card.Meta>
//       <Card.Description>
//         {props.occupation}
//       </Card.Description>
//     </Card.Content>
//     <Card.Content extra>
//       <a>
//         <Icon name='user' />
//         {props.publisher}
//       </a>
//     </Card.Content>
//   </Card>
// )

// export default CustomCard
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