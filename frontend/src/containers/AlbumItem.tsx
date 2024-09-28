import { Card, CardHeader, CardMedia, Grid, styled } from '@mui/material';
import notAvailableImage from '../assets/images/not_available_image.png';
import { Link } from 'react-router-dom';
import {apiURL} from '../constants.ts';
import React from 'react';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '50%',
});

interface Props {
  name: string,
  date: number,
  image: string | null,
  id: string,
}


const AlbumItem: React.FC<Props> = ({id, image, name, date}) => {
  let cardImage = notAvailableImage;

  if (image) {
    cardImage = apiURL + '/' + image;
  }

  return (
    <Grid
      item sm md={6} lg={4}
      component={Link} to={'/artist/' + id}
      sx={{textDecoration: 'none'}}
    >
      <Card sx={{height: '100%'}}>
        <CardHeader title={name}/>
        <p>{date} г.</p>
        <ImageCardMedia image={cardImage} title={name}/>
      </Card>
    </Grid>
  );
};

export default AlbumItem;