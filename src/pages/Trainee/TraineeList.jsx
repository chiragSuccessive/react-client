import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
          <li>
            <Link to="/trainee/5c6c47af7740654f0915fac9">Sachin Tendulkar</Link>
          </li>
          <li>
            <Link to="/trainee/5c6c47af7740654f0455fac9">Virat Kohli</Link>
          </li>
          <li>
            <Link to="/trainee/5c6567af7740654f0915fac9">M.S. Dhoni</Link>
          </li>
          <li>
            <Link to="/trainee/5c6c47af7747854f0915fac9">Rohit Sharma</Link>
          </li>
          <li>
            <Link to="/trainee/5c6c47af7740654f0915876c9">Bumrah</Link>
          </li>
        </ul>
      </>
    );
  }
}
export default TraineeList;
