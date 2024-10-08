import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {useEffect} from 'react';
import {CircularProgress, Grid, Typography} from '@mui/material';
import {useParams} from 'react-router-dom';
import {selectArtist} from '../../app/artistSlice.ts';
import {isLoading, selectAlbums} from '../../app/albumSlice.ts';
import AlbumItem from './AlbumItem.tsx';
import {fetchAlbums} from '../../app/albumThunk.ts';

const Album = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(selectAlbums);
  const artist = useAppSelector(selectArtist);
  const artistLoading = useAppSelector(isLoading);
  const {id} = useParams();

  useEffect(() => {
    if (id != null) {
      dispatch(fetchAlbums(id));
    }
  }, [dispatch, id]);


  return (
    <div>
      <Grid container direction="column" spacing={2}>
        <Grid item container justifyContent="space-between" alignItems="center">
          <Grid item sx={{width: '100%'}}>
            {artistLoading ? (
              <CircularProgress/>
            ) : artist ? (
              <Typography sx={{fontSize: '35px'}}>{artist.name}</Typography>
            ) : (
              <Typography sx={{fontSize: '35px'}}>Artist Not Found</Typography>
            )}
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          {albums && albums.length > 0 ? (
            albums.map(album => (
              <AlbumItem
                name={album.name}
                image={album.image}
                date={album.date}
                key={album._id}
                id={album._id}
              />
            ))
          ) : (
            <Typography sx={{margin: '100px auto', fontSize: '24px'}}>No Albums Found</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default Album;