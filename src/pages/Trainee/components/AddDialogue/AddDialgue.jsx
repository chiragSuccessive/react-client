import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
});

class AddDialogue extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      name: '',
      email: '',
      password: '',
      confirmPswd: '',
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const {
      open, name, email, password, confirmPswd,
    } = this.state;
    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          ADD TRAINEE
        </Button>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your trainee details</DialogContentText>
            <TextField
              label="Name"
              value={name}
              margin="normal"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Email Address"
              value={email}
              margin="normal"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Grid container spacing={24}>
              <Grid item xl={6} xs={6}>
                <TextField
                  label="Password"
                  value={password}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                        >
                          {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
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
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button color="secondary">
                  Cancel
            </Button>
            <Button variant="contained" color="primary" disabled>
                  Submit
            </Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
export default withStyles(styles)(AddDialogue);
