import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoaderAndMessage = WrappedComponent => (
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
      const { loader, dataLength, ...rest } = this.props;
      return (
        (loader)
          ? (<div style={{marginTop: 200,marginLeft: 550}}><CircularProgress size={200} /></div>)
          : (
            (dataLength !== 0)
            ? (<WrappedComponent {...rest} />)
            : <div style={{fontSize: 40, textAlign: 'center'}}>OOPS!, No More Trainees</div>
          )
      );
    }
  }
);
export default withLoaderAndMessage;