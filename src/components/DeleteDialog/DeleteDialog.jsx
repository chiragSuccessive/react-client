import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';


class DeleteDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDeleteClose = () => {
    const { details, onClose } = this.props;
    console.log('Deleted Item', details);
    onClose();
  };


  render() {
    const { deleteOpen, onClose } = this.props;
    const { open } = this.state;
    return (
      <Dialog
        open={deleteOpen}
        onClose={onClose}
      >
        <DialogTitle>Remove Trainee</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to remove trainee
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleDeleteClose} color="primary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DeleteDialog;
