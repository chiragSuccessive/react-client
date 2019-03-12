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
      console.log('--------13------', this.props);

      const { loader, dataLength, ...rest } = this.props;
      console.log('loader', dataLength);
      return (
        (loader)
          ? (<div style={{marginTop: 200,marginLeft: 550}}><CircularProgress size={200} /></div>)
          : (
            (dataLength !== 0)
            ? (<WrappedComponent {...rest} />)
            : <div>" OOPS!, No More Trainees"</div>
          )
      );
    }
  }
);
export default withLoaderAndMessage;
