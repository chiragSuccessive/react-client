import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import trainee from './data/trainee';

class TraineeList extends Component {
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
    const temp = trainee.map(res => (
      <li>
        <Link to={`/trainee/${res.id}`}>{res.name}</Link>
      </li>
    ));
    return (
      <>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          ADD TRAINEELIST
        </Button>
        <ul>
          {temp}
        </ul>
      </>
    );
  }
}
export default TraineeList;
