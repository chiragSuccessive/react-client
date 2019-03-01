import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import trainee from './data/trainee';
import { GenericTable } from '../../components';

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
    const columns = [
      {
        field: 'name',
        label: 'Name',
        align: 'center',
      },
      {
        field: 'email',
        label: 'Email Address',
      },
    ];
    const temp = trainee.map(res => (
      <li>
        <Link to={`/trainee/${res.id}`}>{res.name}</Link>
      </li>
    ));

    return (
      <>
        <div align="right">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
          ADD TRAINEELIST
          </Button>
        </div>
        <GenericTable data={trainee} columns={columns} />
        <ul>
          {temp}
        </ul>
      </>
    );
  }
}
export default TraineeList;
