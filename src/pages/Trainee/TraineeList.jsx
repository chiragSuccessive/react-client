import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { GenericTable, DeleteDialog, EditDialog } from '../../components';
import trainee from './data/trainee';

class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      order: 'asc',
      active: '',
      deleteOpen: false,
      editOpen: false,
      traineeData: '',
      page: 0,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDeleteClose = () => {
    this.setState({ deleteOpen: false });
  }

  handleEditClose = () => {
    this.setState({ editOpen: false });
  }

  handleSubmit = (temp) => {
    this.setState({ open: false });
    console.log(temp);
  };

  handleSelect = (event, id) => {
    const { history } = this.props;
    event.preventDefault();
    history.push(`/trainee/${id}`);
  };

  handleOnSort = (field) => {
    const { order } = this.state;
    this.setState({ order: order === 'asc' ? 'desc' : 'asc', active: field });
  };

  handlerEditDialogOpen = (event, data) => {
    event.preventDefault();
    this.setState({ editOpen: true, traineeData: data });
  }

  handleRemoveDialogOpen = (event, data) => {
    event.preventDefault();
    this.setState({ deleteOpen: true, traineeData: data });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  render() {
    const { open, traineeData } = this.state;

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
    ];

    const actions = [
      {
        icon: <EditIcon />,
        handler: this.handlerEditDialogOpen,
      },
      {
        icon: <DeleteIcon />,
        handler: this.handleRemoveDialogOpen,
      },
    ];

    const { order, active, deleteOpen, editOpen, page } = this.state;
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
        <GenericTable
          data={trainee}
          columns={columns}
          onSelect={this.handleSelect}
          order={order}
          onSort={this.handleOnSort}
          active={active}
          actions={actions}
          count={100}
          rowsPerPage={5}
          page={page}
          onChangePage={this.handleChangePage}
        />
        <DeleteDialog deleteOpen={deleteOpen} onClose={this.handleDeleteClose} details={traineeData} />
        <EditDialog editOpen={editOpen} onClose={this.handleEditClose} details={traineeData}
        />
      </>
    );
  }
}
export default TraineeList;