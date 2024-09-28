import {Route, Routes} from 'react-router-dom';
import Artist from './containers/Artist.tsx';
import {Container} from '@mui/material';
import Header from './components/Header.tsx';
import Album from './containers/Album.tsx';

const App = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main style={{marginTop: '2rem'}}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Artist/>}/>
            <Route path="/albums/:id" element={<Album/>}/>
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;