import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import SnackbarContext from '../../contexts/contexts';

class DeleteDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDeleteClose = (event, value) => {
    event.preventDefault();
    const { details, onClose } = this.props;
    const originalDate = new Date(details.createdAt);
    const dateCheck = new Date('2019-02-14');
    if (originalDate > dateCheck) {

      value.openSnackBar('successfully deleted', 'success');
      console.log('Deleted Item', details);
    } else {
      value.openSnackBar('Can not Delete', 'error');
    }
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
          <SnackbarContext.Consumer>
            {
              value => (
                <Button
                  onClick={(event) => {
                    this.handleDeleteClose(event, value);
                  }}
                  color="primary"
                  variant="contained"
                >
                Delete
                </Button>
              )
            }
          </SnackbarContext.Consumer>
        </DialogActions>
      </Dialog>
    );
  }
}

export default DeleteDialog;
