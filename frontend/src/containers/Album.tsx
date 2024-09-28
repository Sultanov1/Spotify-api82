import Grid from '@mui/material/Grid';
import { CircularProgress, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectAlbum } from '../app/albumSlice.ts';
import { fetchAlbum } from '../app/albumThunk.ts';
import AlbumItem from './AlbumItem.tsx';

const Album = () => {
  const dispatch = useAppDispatch();
  const album = useAppSelector(selectAlbum);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAlbum(id));
  }, [dispatch, id]);

  console.log(album);

  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ width: "100%" }}>
            <Typography sx={{ margin: '0 auto', fontWeight: 'bold' }} variant="h4">Albums</Typography>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          {album ? (
            album.map(album => (
              <AlbumItem
                name={album.name}
                image={album.image}
                date={album.date}
                key={album._id}
                id={album._id}
              />
            ))
          ) : (
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ height: '100vh' }}
            >
              <CircularProgress />
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Album;
