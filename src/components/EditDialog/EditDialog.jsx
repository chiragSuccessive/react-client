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
import SnackBarContext from '../../contexts/contexts';

class EditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonEnable: false,
    };
  }

  handleValue = item => (event) => {
    const { details } = this.props;
    details[item] = event.target.value;
    this.setState({
      buttonEnable: true,
    });
  };

  onSubmit = (open, message, status) => {
    const { details, onClose } = this.props;
    const obj = { name: details.name, email: details.email };
    console.log('Editted Item', obj);
    onClose();
    return { open: true, message: 'success', status: 'success' };
  }

  render() {
    const { editOpen, onClose, details } = this.props;
    const { buttonEnable } = this.state;
    return (
      <>
        <Dialog open={editOpen} onClose={this.handleClose}>
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your trainee details</DialogContentText>
            <TextField
              label="Name"
              defaultValue={details.name}
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
              defaultValue={details.email}
              margin="normal"
              variant="outlined"
              onChange={this.handleValue('email')}
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
              disabled={!buttonEnable}
            >
                Submit
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
export default EditDialog;
