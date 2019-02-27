import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ComponentDemo } from './pages';
import theme from './theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ComponentDemo />
  </MuiThemeProvider>
);

export default App;
