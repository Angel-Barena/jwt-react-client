import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const homeLink = props => <Link to="/" {...props} />;
const signUpLink = props => <Link to="/signup" {...props} />;
const signInLink = props => <Link to="/signin" {...props} />;
const signOutLink = props => <Link to="/signout" {...props} />;
const featureLink = props => <Link to="/feature" {...props} />;

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <Button component={homeLink}>Redux Auth</Button>
          <Button component={signUpLink}>Sign Up</Button>
          <Button component={signInLink}>Sign In</Button>
          <Button component={signOutLink}>Sign Out</Button>
          <Button component={featureLink}>Feature</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
