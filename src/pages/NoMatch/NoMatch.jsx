import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import styles from './styles';

const NoMatch = (props) => {
  const { classes } = props;
  return (
    <>
      <div className={classes.heading}>
      NOT FOUND
      </div>
      <div className={classes.subHeading}>
        Seems like page you are looking after does not exists
      </div>
    </>
  );
};

NoMatch.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(NoMatch);
