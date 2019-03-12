import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    cursor: 'pointer',
  },
});

const GenericTable = (props) => {
  const {
    classes,
    data,
    columns,
    id,
    orderBy,
    order,
    onSort,
    onSelect,
    active,
    actions,
    rowsPerPage,
    page,
    count,
    onChangePage,
  } = props;

  const createSortHandler = (event, label) => {
    event.preventDefault();
    onSort(label);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns && columns.length && columns.map(row => (
              <TableCell align={row.align}>
                <TableSortLabel
                  active={active === row.label}
                  direction={order}
                  onClick={event => createSortHandler(event, row.label)}
                >
                  {row.label || row.field}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow
              className={classes.row}
            >
              {columns && columns.length && columns.map((column) => {
                let value = row[column.field];
                const temp = column.format;
                if (column.format) {
                  value = temp(value);
                }
                return <TableCell align={column.align} hover onClick={event => onSelect(event, row.id)}>{value}</TableCell>;
              })}
              <TableCell>
                {
                  actions && actions.length && actions.map((action) => {
                    return <IconButton onClick={event => action.handler(event, row)}>{action.icon}</IconButton>;
                  })
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {
        count
          ? (
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              backIconButtonProps={{
                'aria-label': 'Previous Page',
              }}
              nextIconButtonProps={{
                'aria-label': 'Next Page',
              }}
              onChangePage={onChangePage}
            />
          )
          : ''
      }
    </Paper>
  );
};

GenericTable.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  id: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  orderBy: PropTypes.string,
  order: PropTypes.string,
  onSort: PropTypes.func,
  onSelect: PropTypes.func,
};

GenericTable.defaultProps = {
  id: '',
  orderBy: '',
  order: 'asc',
  onSort: () => {},
  onSelect: () => {},
};

export default withStyles(styles)(GenericTable);
