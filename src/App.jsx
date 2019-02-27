import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Login } from './pages';
import theme from './theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Login />
  </MuiThemeProvider>
);

export default App;
