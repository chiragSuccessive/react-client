import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackbarContext from '../../contexts/contexts';
import callApi from '../../libs/utils/api';

class DeleteDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loader: false,
      buttonDisable: false,
    };
  }

  handleDeleteClose = async (event, value) => {
    event.preventDefault();
    const { details, onClose } = this.props;
    const originalDate = new Date(details.createdAt);
    const header = localStorage.getItem('token');
    this.setState({ loader: true, buttonDisable: true });
    const res = await callApi('DELETE', {}, `/trainee/${details.originalId}`, header);
    if (res.status === 200) {
      value.openSnackBar('successfully deleted', 'success');
    } else {
      value.openSnackBar('Deletion unsuccessful', 'error');
    }
    this.setState({ loader: false, buttonDisable: false });
    onClose();
  };


  render() {
    const { deleteOpen, onClose } = this.props;
    const { open, buttonDisable, loader } = this.state;
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
                  disabled={buttonDisable}
                >
                  {
                    (loader)
                      ? <CircularProgress size={20} />
                      : ''
                  }
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
