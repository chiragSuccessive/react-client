import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { GenericTable, DeleteDialog, EditDialog } from '../../components';
import trainee from './data/trainee';
import AddDialogue from './components/AddDialogue';
import SnackbarContext from '../../contexts/contexts';
import getDateFormatted from '../../libs/utils/moment';
import callApi from '../../libs/utils/api';
import limit from './data/constants';

class TraineeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      order: 'asc',
      active: '',
      deleteOpen: false,
      editOpen: false,
      traineeData: '',
      page: 0,
      records: {},
      loader: false,
      count: 0,
    };
  }

  componentDidMount() {
    this.getApi();
  }

  getApi = async () => {
    const { value } = this.props;
    const { page } = this.state;
    this.setState({ loader: true });
    const header = localStorage.getItem('token');
    const params = { limit, skip: page * limit };
    const res = await callApi('GET', {}, '/trainee', header, params);
    if (res.statusText === 'OK') {
      this.setState({ records: res.data.data.records, count: res.data.data.count });
      // value.openSnackBar('success', 'success');
    } else {
      value.openSnackBar('Error', 'error');
    }
    this.setState({ loader: false });
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

  handleSubmit = (details, value) => {
    this.setState({ open: false });
    console.log(details);
    value.openSnackBar('successfully added', 'success');
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
    this.setState({ page }, () => this.getApi());
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
      {
        field: 'createdAt',
        label: 'Date',
        align: 'center',
        formate: getDateFormatted,
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
    const { value } = this.props;
    const {
      order, active, deleteOpen, editOpen, page, count, records, loader,
    } = this.state;

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
          <AddDialogue
            open={open}
            onClose={this.handleClose}
            onSubmit={details => this.handleSubmit(details, value)}
          />
        </div>
        <GenericTable
          data={records}
          columns={columns}
          onSelect={this.handleSelect}
          order={order}
          onSort={this.handleOnSort}
          active={active}
          actions={actions}
          count={count}
          page={page}
          rowsPerPage={limit}
          onChangePage={this.handleChangePage}
          loader={loader}
          dataLength={count}
        />
        <DeleteDialog deleteOpen={deleteOpen} onClose={this.handleDeleteClose} details={traineeData} />
        <EditDialog
          editOpen={editOpen}
          onClose={this.handleEditClose}
          details={traineeData}
        />
      </>
    );
  }
}
export default ({ ...rest }) => (
  <SnackbarContext.Consumer>
    {
      value => <TraineeList value={value} {...rest} />
    }
  </SnackbarContext.Consumer>
);
