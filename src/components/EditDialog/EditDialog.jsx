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
import * as yup from 'yup';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBarContext from '../../contexts/contexts';
import callApi from '../../libs/utils/api';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3)
    .required()
    .label('Name'),
  email: yup
    .string()
    .email()
    .required(),
});
class EditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonEnable: false,
      error: {
        name: '',
        email: '',
      },
      loader: false,
    };
  }

  handleValue = item => (event) => {
    const { details } = this.props;
    const { error } = this.state;
    details[item] = event.target.value;
    this.setState({
      [item]: event.target.value,
      buttonEnable: true,
      error: { ...error, [item]: '' },
    }, this.handleValidation(item));
  };

  handleValidation = (item) => {
    const {
      name,
      email,
      error,
    } = this.state;

    schema
      .validate(
        {
          name,
          email,
        },
        { abortEarly: false },
      )
      .then(this.setState({ error: { ...error, [item]: '' } }))
      .catch((err) => {
        err.inner.forEach((res) => {
          if (res.path === item) {
            this.setState({
              error: { ...error, [item]: res.message },
            });
          }
        });
      });
  }

  onSubmit = async (event, value) => {
    event.preventDefault();
    const { details, onClose } = this.props;
    const { name, email } = this.state;
    const header = localStorage.getItem('token');
    const data = {
      id: details.originalId,
      name,
      email,
    };
    this.setState({ loader: true, buttonEnable: false });
    const res = await callApi('put', data, '/trainee', header);
    if (res.status === 200) {
      value.openSnackBar('Successfully updated', 'success');
    } else {
      value.openSnackBar('Updation unsuccessful', 'error');
    }
    this.setState({ loader: false, buttonEnable: true });
    onClose();
  }


  render() {
    const { editOpen, onClose, details } = this.props;
    const {
      buttonEnable, name, email, error, loader
    } = this.state;

    return (
      <>
        <Dialog open={editOpen} onClose={this.handleClose}>
          <DialogTitle>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter your trainee details</DialogContentText>
            <TextField
              label="Name"
              value={details.name}
              margin="normal"
              variant="outlined"
              onChange={this.handleValue('name')}
              helperText={error.name}
              error={error.name}
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
              value={details.email}
              margin="normal"
              variant="outlined"
              onChange={this.handleValue('email')}
              helperText={error.email}
              error={error.email}
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
            <SnackBarContext.Consumer>
              {
                value => (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(event) => {
                      event.preventDefault();
                      this.onSubmit(event, value);
                    }}
                    disabled={!buttonEnable}
                  >
                    {
                      (loader)
                        ? <CircularProgress size={20} />
                        : ''
                    }
                  Submit
                  </Button>
                )

              }
            </SnackBarContext.Consumer>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
export default EditDialog;
