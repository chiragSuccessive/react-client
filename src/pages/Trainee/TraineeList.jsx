import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import trainee from './data/trainee';
import { GenericTable } from '../../components';
import getDateFormatted from '../../libs/utils/moment';


class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      order: 'asc',
      active: '',
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

  onSelect = (event, id) => {
    const { history } = this.props;
    event.preventDefault();
    history.push(`/trainee/${id}`);
  }

  handleOnSort = (field) => {
    const { order } = this.state;
    this.setState({ order: (order) === 'asc' ? 'desc' : 'asc', active: field });
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
        format: value => value && value.toUpperCase(),
      },
      {
        field: 'createdAt',
        label: 'Date',
        align: 'center',
        format: getDateFormatted,
      },
    ];
    const temp = trainee.map(res => (
      <li>
        <Link to={`/trainee/${res.id}`}>{res.name}</Link>
      </li>
    ));

    const { order, active } = this.state;

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
        <GenericTable data={trainee} columns={columns} onSelect={this.onSelect} order={order} onSort={this.handleOnSort} active={active} />
        <ul>
          {temp}
        </ul>
      </>
    );
  }
}
export default TraineeList;
