import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import moment from 'moment';
import { Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import NoMatch from '../NoMatch';
import trainee from './data/trainee';

const styles = () => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  button_align: {
    textAlign: 'center',
  },
  Button: {
    align: 'center',
    fontSize: '15px',
    fontWeight: 'bold',
    backgroundColor: 'lightgrey',
    marginTop: '2%',
  },
});

const check = (res, classes) => (
  <div>
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
        title="Image title"
      />
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography component="h2" variant="h5">
            {res.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {res.email}
          </Typography>
        </CardContent>
      </div>
    </Card>
    <div className={classes.button_align}>
      <Link component={RouterLink} to="/trainee">
        <Button className={classes.Button}>Back</Button>
      </Link>
    </div>
  </div>
);

const TraineeDetails = (props) => {
  const { classes, ...rest } = props;
  let temp;
  trainee.forEach((res) => {
    if (res.id === rest.match.params.id) {
      temp = res;
    }
  });
  if (temp) {
    return check(temp, classes);
  }
  return <NoMatch />;
};

TraineeDetails.propTypes = {
  classes: PropTypes.objectOf.isRequired,
};

export default withStyles(styles)(TraineeDetails);
