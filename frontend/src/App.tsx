import {Route, Routes} from 'react-router-dom';
import Artist from './containers/Artist.tsx';
import {Container} from '@mui/material';
import Header from './components/Header.tsx';

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
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;