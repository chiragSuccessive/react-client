import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AddDialogue from './components/AddDialogue';

class Trainee extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (temp) => {
    this.setState({ open: false });
    console.log(temp);
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          ADD TRAINEE
        </Button>
        <AddDialogue open={open} onClose={this.handleClose} onSubmit={this.handleSubmit} />
      </>
    );
  }
}
export default Trainee;
