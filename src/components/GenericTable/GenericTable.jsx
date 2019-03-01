import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
});

function GenericTable(props) {
  const {
    classes, data, columns, id,
  } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(row => (
              <TableCell align={row.align}>{(row.label) ? row.label : row.field}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

GenericTable.propTypes = {
  classes: PropTypes.objectOf.isRequired,
  id: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

GenericTable.defaultProps = {
  id: '',
};

export default withStyles(styles)(GenericTable);
