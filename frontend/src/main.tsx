import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';
import theme from './theme.ts';
import {ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import {store} from './app/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>

);
