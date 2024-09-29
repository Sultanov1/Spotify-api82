import {Route, Routes} from 'react-router-dom';
import Artist from './containers/Artist/Artist.tsx';
import {Container, Typography} from '@mui/material';
import Album from './containers/Album/Album.tsx';
import Header from './components/Header.tsx';
import Track from './containers/Track/Track.tsx';

const App = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main style={{marginTop: '100px'}}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Artist/>}/>
            <Route path="/albums/:id" element={<Album/>}/>
            <Route path="/tracks/:id" element={<Track/>} />
            <Route path="*" element={<Typography variant="h1">Not found</Typography>} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;