import {Card, CardHeader, CardMedia, Grid, styled, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import notAvailableImage from '../../assets/images/not_available_image.png';
import {apiURL} from '../../constants.ts';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
  objectFit: 'cover',
  borderRadius: '4px',
});

interface Props {
  id: string,
  name: string,
  image: string | null,
}

const ArtistItem: React.FC<Props> = ({name, image, id}) => {
  const cardImage = image ? apiURL + '/' + image : notAvailableImage;

  return (
    <Grid
      item sm={6} md={4} lg={3}
      component={Link} to={'/albums/' + id}
      sx={{textDecoration: 'none'}}
    >
      <Card sx={{height: '100%'}}>
        <CardHeader title={<Typography variant="h6">{name}</Typography>}/>
        <ImageCardMedia image={cardImage} title={name}/>
      </Card>
    </Grid>
  );
};

export default ArtistItem;