import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import Person from '@material-ui/icons/Person';

class EditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      open: false,
    };
  }

  handleValue = item => (event) => {
    this.setState({
      [item]: event.target.value,
    });
  };

  onSubmit = () => {
    const { details } = this.props;
    console.log(details);
    this.setState({ open: false });
  }

  render() {
    const { name, email, open } = this.state;
    const { editOpen, onClose } = this.props;
    return (
      <Dialog open={editOpen} onClose={this.handleClose}>
        <DialogTitle>Add Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your trainee details</DialogContentText>
          <TextField
            label="Name"
            value={name}
            margin="normal"
            variant="outlined"
            onChange={this.handleValue('name')}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
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
            // onBlur={this.handleValidation('email')}
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
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={onClose}>
              Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSubmit}
            disabled={false}
          >
                Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
export default EditDialog;
