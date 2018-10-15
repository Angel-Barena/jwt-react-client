import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField } from 'redux-form-material-ui';
// const textfiled = (
//   <TextField id="email" label="Email" name="email" margin="normal" />
// );

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 200,
    maxWidth: '90vw'
  },
  button: {
    margin: theme.spacing.unit
  }
});

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps);
  };
  render() {
    const { classes, handleSubmit } = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        className={classes.container}
      >
        <Field
          className={classes.textField}
          label="Email"
          name="email"
          type="text"
          component={TextField}
          autoComplete="none"
        />
        <Field
          className={classes.textField}
          label="Password"
          name="password"
          type="password"
          component={TextField}
          autoComplete="none"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign up
        </Button>
      </form>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    null,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup);

//reduxForm({ form: 'signup' })(withStyles(styles)(Signup));
