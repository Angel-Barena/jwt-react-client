import React from 'react';
import Header from './Header';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink
  }
});

const StyledGrid = withStyles({
  container: {
    height: '100vh'
  }
})(Grid);

export default ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <Header />
    <StyledGrid container direction="row" justify="center" alignItems="center">
      <Grid item xs={12}>
        {children}
      </Grid>
    </StyledGrid>
  </MuiThemeProvider>
);
