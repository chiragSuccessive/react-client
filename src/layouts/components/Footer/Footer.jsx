import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import styles from './styles';

const Footer = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      &#169;Successive Technology
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Footer);
