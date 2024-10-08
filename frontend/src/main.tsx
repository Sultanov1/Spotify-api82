import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {BrowserRouter} from 'react-router-dom';
import theme from './theme.ts';
import {ThemeProvider} from '@mui/material';
import {Provider} from 'react-redux';
import {persist, store} from './app/store.ts';
import {PersistGate} from 'redux-persist/integration/react';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App/>
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>

);
