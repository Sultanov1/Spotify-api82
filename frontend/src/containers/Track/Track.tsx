import {CircularProgress, Grid, Typography} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {useEffect} from 'react';
import {isLoading, selectTrack} from '../../app/trackSlice.ts';
import TrackItem from './TrackItem.tsx';
import {fetchTracks} from '../../app/trackThunk.ts';
import {useParams} from 'react-router-dom';
import {selectAlbums} from '../../app/albumSlice.ts';
import {fetchAlbumById} from '../../app/albumThunk.ts';

const Track = () => {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector(selectTrack);
  const album = useAppSelector(selectAlbums);
  const trackLoading = useAppSelector(isLoading);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchTracks(id));
      dispatch(fetchAlbumById(id));
    }
  }, [dispatch, id]);

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item container justifyContent="space-between" alignItems="center">
        <Grid item sx={{width: '100%'}}>
          <Typography sx={{margin: '0 auto', fontWeight: 'bold', fontSize: '50px'}}
                      variant="h4">{album ? 'Artist: ' + album[0].artist.name : 'Not found'}</Typography>
          <Typography sx={{margin: '0 auto 50px', fontWeight: 'bold', fontSize: '50px'}}
                      variant="h4">{album ? 'Album: ' + album[0].name : 'Not found'}</Typography>
          <Typography sx={{margin: '0 auto', fontWeight: 'bold'}} variant="h4">Tracks:</Typography>
        </Grid>
      </Grid>
      <Grid item sx={{display: 'flex', flexDirection: 'column'}} container spacing={2}>
        {trackLoading ? (
          <CircularProgress/>
        ) : tracks && tracks.length > 0 ? (
          tracks.map(track => (
            <TrackItem
              key={track._id}
              name={track.name}
              duration={track.duration}
              number={track.number}
             id={track._id}
            />
          ))
        ) : (
          <Typography sx={{margin: '0 auto', fontWeight: 'bold', fontSize: '20px'}}>
            No tracks found.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Track;