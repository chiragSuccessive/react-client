import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Email from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import * as yup from 'yup';
import CircularProgress from '@material-ui/core/CircularProgress';
import callApi from '../../libs/utils/api';
import SnackBarContext from '../../contexts/contexts';
import styles from './styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      error: {
        email: '',
        password: '',
      },
      hasError: {
        email: false,
        password: false,
      },
      isTouched: {
        email: false,
        password: false,
      },
      disableSubmit: true,
      progress: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };


  handleValue = item => (event) => {
    event.preventDefault();
    const { error, isTouched, hasError } = this.state;
    const disableCheck = !(this.buttonChecked());
    this.setState({
      [item]: event.target.value,
      disableSubmit: disableCheck,
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
    if (notError === 2 && touched === 2) {
      result = true;
    } else if (notError !== 2 && touched !== 2) {
      result = false;
    }
    return result;
  };

  handleSignIn = async (event, value) => {
    event.preventDefault();
    this.setState({ disableSubmit: true, progress: true });
    const { email, password } = this.state;
    const res = await callApi('post', { email, password }, '/user/login');
    if (res.statusText === 'OK') {
      localStorage.setItem('token', res.data.data);
      this.props.history.push('/trainee');
    } else {
      this.setState({ disableSubmit: false, progress: false });
      value.openSnackBar('Incorrect email address or password', 'error');
    }
    // const item = localStorage.getItem('token');
  }

  render() {
    const { classes } = this.props;
    const { disableSubmit, progress } = this.state;
    const {
      email, password, showPassword, hasError, error,
    } = this.state;
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
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
            fullWidth
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
          <SnackBarContext.Consumer>
            {
              value => (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  disabled={disableSubmit}
                  onClick={event => this.handleSignIn(event, value)}
                >
                  {
                    (progress)
                      ? (
                        <div>
                          <CircularProgress className={classes.progress} size={20} />
                        </div>
                      )
                      : ''
                  }
              Sign in
                </Button>
              )
            }
          </SnackBarContext.Consumer>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Login);
