import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
        <Grid container xs={12}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Add Trainee</DialogTitle>
            <DialogContent>
              <DialogContentText>Enter your trainee details</DialogContentText>
            </DialogContent>
            <Grid item xs={10}>
              <TextField
                label="Name"
                value={name}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                label="Email Address"
                value={email}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10}>
              <Grid item xs={5}>
                <TextField
                  label="Password"
                  value={password}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  label="Confirm Password"
                  value={confirmPswd}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(AddDialogue);
