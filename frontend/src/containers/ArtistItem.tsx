import { Card, CardHeader, CardMedia, Grid, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import notAvailableImage from '../assets/images/not_available_image.png';
import {apiURL} from '../constants.ts';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  id: string,
  name: string,
  image: string | null,
}

const ArtistItem: React.FC<Props> = ({name, image, id}) => {
  let cardImage = notAvailableImage;

  if (image) {
    cardImage = apiURL + '/' + image;
  }

  return (
    <Grid
      item sm md={6} lg={4}
      component={Link} to={'/albums/' + id}
      sx={{textDecoration: 'none'}}
    >
      <Card sx={{height: '100%'}}>
        <CardHeader title={name}/>
        <ImageCardMedia image={cardImage} title={name}/>
      </Card>
    </Grid>
  );
};

export default ArtistItem;