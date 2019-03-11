import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = {
  heading: {
    fontSize: '50px',
    marginTop: '30px',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: '30px',
    marginTop: '20px',
    textAlign: 'center',
    color: 'lightGrey',
  },
};

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
