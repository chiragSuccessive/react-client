import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  margin: {
    marginBottom: '10px',
  },
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.margin}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Trainee Portal
          </Typography>
          <Link component={RouterLink} to="/trainee" color="inherit">
            <Button color="inherit">TRAINEE</Button>
          </Link>
          <Link component={RouterLink} to="/text-field" color="inherit">
            <Button color="inherit">TEXTDEMO FIELD</Button>
          </Link>
          <Link component={RouterLink} to="/input-demo" color="inherit">
            <Button color="inherit">INPUT DEMO</Button>
          </Link>
          <Link component={RouterLink} to="/children-demo" color="inherit">
            <Button color="inherit">CHILDREN DEMO</Button>
          </Link>
          <Button color="inherit">LOGOUT</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Navbar);
