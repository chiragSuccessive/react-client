import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';


const withLoaderAndMessage = WrappedComponent => ({ loader, dataLength, ...rest }) => (
  (loader)
    ? (<div style={{marginTop: 200,marginLeft: 550}}><CircularProgress size={200} /></div>)
    : (
      (dataLength !== 0)
      ? (<WrappedComponent {...rest} />)
      : <div>" OOPS!, No More Trainees"</div>
    )
);

export default withLoaderAndMessage;
