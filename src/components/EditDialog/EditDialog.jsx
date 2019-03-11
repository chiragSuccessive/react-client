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
import SnackBarContext from '../../contexts/contexts';


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

  onSubmit = (event) => {
    event.preventDefault();
    const { details, onClose } = this.props;
    const obj = { name: details.name, email: details.email };
    console.log('Editted Item', obj);
    onClose();
  }


  render() {
    const { editOpen, onClose, details } = this.props;
    const { buttonEnable, name, email, error } = this.state;
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
                value =>
                  (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={(event) => {
                        event.preventDefault();
                        this.onSubmit(event);
                        value.openSnackBar('successfully updated', 'success');
                      }}
                      disabled={!buttonEnable}
                    >
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
