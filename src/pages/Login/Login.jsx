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

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

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
      hasErrorCheck: false,
      hasTouchedCheck: false,
    };
  }

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };


  handleValue = item => (event) => {
    const { error, isTouched, hasErrorCheck } = this.state;
    this.setState({
      [item]: event.target.value,
      error: { ...error, [item]: '' },
      isTouched: { ...isTouched, [item]: true },
      hasErrorCheck: false,
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
      hasErrorCheck,
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
              hasErrorCheck: true,
            });
          }
        });
      });
  };

  render() {
    const { classes } = this.props;
    const { email, password, showPassword, hasError, error } = this.state;
    console.log('----------------state------------', this.state);
    const temp = false;
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={temp}
          >
              Sign in
          </Button>
        </Paper>
      </main>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Login);
