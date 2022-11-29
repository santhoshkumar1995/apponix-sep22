import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Rating1 } from '../mui/Rating1';

interface Irating {
  count: number,
  rate: number
}

interface Icard2 {
  description: string,
  image: string,
  price: number,
  rating: Irating,
  title: string
}
export const Card2: React.FC<Icard2> = (props) => {
  return <>
  <br />
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
    
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}<b>price:{props.price}</b>
              <Rating1 rate={props.rating.rate} />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  </>
}