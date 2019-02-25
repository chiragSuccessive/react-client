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
    const { open, name, email, password, confirmPswd } = this.state;
    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          ADD TRAINEE
        </Button>
        <Grid container spacing={48}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Add Trainee</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter your trainee details</DialogContentText>
            </DialogContent>
            <Grid item xs={24}>
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
            </Grid>
            <Grid item xs={24}>
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
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <TextField
                  label="Password"
                  value={password}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
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
              <Button color="secondary">
                  Cancel
              </Button>
              <Button variant="contained" color="primary" disabled>
                  Submit
              </Button>
            </Grid>
          </Dialog>
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(AddDialogue);
