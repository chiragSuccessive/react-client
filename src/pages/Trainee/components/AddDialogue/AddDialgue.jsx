import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Email from '@material-ui/icons/Email';
import Person from '@material-ui/icons/Person';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import DialogActions from '@material-ui/core/DialogActions';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required()
    .label('Name'),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/,
      'Must contain 8 characters atleast 1 uppercase letter, 1 lowercase and 1 number',
    ),
  confirmPswd: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Confirm Password is required'),
});

class AddDialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPswd: '',
      showPassword: false,
      showMatchPassword: false,
      error: {
        name: '',
        email: '',
        password: '',
        confirmPswd: '',
      },
      isTouched: {
        name: false,
        email: false,
        password: false,
        confirmPswd: false,
      },
      hasError: {
        name: false,
        email: false,
        password: false,
        confirmPswd: false,
      },
    };
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickShowMatchPassword = () => {
    this.setState(state => ({ showMatchPassword: !state.showMatchPassword }));
  };

  handleValue = item => (event) => {
    const { error, isTouched, hasError } = this.state;
    this.setState({
      [item]: event.target.value,
      error: { ...error, [item]: '' },
      isTouched: { ...isTouched, [item]: true },
      hasError: { ...hasError, [item]: false },
    });
  };

  handleValidation = item => () => {
    const {
      name,
      email,
      password,
      confirmPswd,
      error,
      isTouched,
      hasError,
    } = this.state;

    schema
      .validate(
        {
          name,
          email,
          password,
          confirmPswd,
        },
        { abortEarly: false },
      )
      .then(this.setState({ isTouched: { ...isTouched, [item]: true } }))
      .catch((err) => {
        err.inner.forEach((res) => {
          if (res.path === item) {
            this.setState({
              error: { ...error, [item]: res.message },
              hasError: { ...hasError, [item]: true },
            });
          }
        });
      });
  };

  buttonChecked = () => {
    const { hasError, isTouched } = this.state;
    let notError = 0;
    let touched = 0;
    let result = false;
    Object.keys(hasError).forEach((i) => {
      if (hasError[i] === false) {
        notError += 1;
      }
    });
    Object.keys(isTouched).forEach((i) => {
      if (isTouched[i] === true) {
        touched += 1;
      }
    });
    if (notError === 4 && touched === 4) {
      result = true;
    } else if (notError !== 4 && touched !== 4) {
      result = false;
    }
    return result;
  };

  onSubmit = () => {
    const { onSubmit } = this.props;
    const {
      name,
      email,
      password,
    } = this.state;

    onSubmit({ name, email, password });
  }

  render() {
    const { open, onClose, onSubmit } = this.props;
    const {
      name,
      email,
      password,
      confirmPswd,
      showPassword,
      showMatchPassword,
      error,
      hasError,
    } = this.state;
    return (
      <>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your trainee details</DialogContentText>
            <TextField
              label="Name"
              value={name}
              margin="normal"
              variant="outlined"
              onChange={this.handleValue('name')}
              onBlur={this.handleValidation('name')}
              error={hasError.name}
              helperText={error.name}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Email Address"
              value={email}
              margin="normal"
              variant="outlined"
              onChange={this.handleValue('email')}
              onBlur={this.handleValidation('email')}
              error={hasError.email}
              helperText={error.email}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <Grid container spacing={24}>
              <Grid item xl={6} xs={6}>
                <TextField
                  label="Password"
                  value={password}
                  type={showPassword ? 'text' : 'password'}
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleValue('password')}
                  onBlur={this.handleValidation('password')}
                  error={hasError.password}
                  helperText={error.password}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={this.handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff /> }
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xl={6} xs={6}>
                <TextField
                  label="Confirm Password"
                  value={confirmPswd}
                  type={showMatchPassword ? 'text' : 'password'}
                  margin="normal"
                  variant="outlined"
                  onChange={this.handleValue('confirmPswd')}
                  onBlur={this.handleValidation('confirmPswd')}
                  error={hasError.confirmPswd}
                  helperText={error.confirmPswd}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton onClick={this.handleClickShowMatchPassword}>
                          {showMatchPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={onClose}>
              Cancel
            </Button>
            {this.buttonChecked() ? (
              <Button
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={this.onSubmit}
                disabled
              >
                Submit
              </Button>
            )}

          </DialogActions>
        </Dialog>
      </>
    );
  }
}

AddDialogue.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
AddDialogue.defaultProps = {
  open: false,
  onClose: () => {},
  onSubmit: () => {},
};
export default AddDialogue;
