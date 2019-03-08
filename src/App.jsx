import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar';
import theme from './theme';
import { Trainee, Login } from './pages';

const App = () => (
  <>
    <Navbar />
    <MuiThemeProvider theme={theme}>
      <Trainee />
    </MuiThemeProvider>
    {/* <Login /> */}
  </>
);

export default App;
