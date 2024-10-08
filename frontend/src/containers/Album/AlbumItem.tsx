import {Card, CardHeader, CardMedia, Grid, styled, Typography} from '@mui/material';
import notAvailableImage from '../../assets/images/not_available_image.png';
import { Link } from 'react-router-dom';
import {apiURL} from '../../constants.ts';
import React from 'react';

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '60%',
  objectFit: 'cover',
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
    cardImage = apiURL +'/' + image;
  }

  return (
    <Grid
      item xs={12} sm={6} md={6} lg={4}
      component={Link} to={'/tracks/' + id}
      sx={{textDecoration: 'none'}}
    >
      <Card sx={{height: '100%'}}>
        <CardHeader title={name}/>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 'bold',
            padding: '8px 16px',
            marginBottom: '10px',
          }}
        >
          {date}.г
        </Typography>
        <ImageCardMedia
          title={name}
          image={cardImage}
          sx={{
            height: '200px',
            borderRadius: '8px 8px 0 0'
          }}
        />
      </Card>
    </Grid>
  );
};

export default AlbumItem;