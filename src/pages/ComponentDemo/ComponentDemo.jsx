import React from 'react';
import { Typography } from '@material-ui/core';
import Math from '../../components/Math';


const ComponentDemo = () => (
  <>
    <Typography>
      <Math first={5} second={0} operator="+">
        {(first, second, operator, result) => (
          <div>{`${first} ${operator} ${second} = ${result}`}</div>
        )}
      </Math>
    </Typography>
    <Math first={5} second={0} operator="+">
      {(first, second, operator, result) => (
        <div>{`sum of ${first} and ${second} is ${result}`}</div>
      )}
    </Math>
    <Math first={5} second={0} operator="*">
      {(first, second, operator, result) => (
        <div>{`when we multiply ${first} with ${second} then we get ${result} as a result`}</div>
      )}
    </Math>
    <Math first={5} second={5} operator="/" />
  </>
);
export default ComponentDemo;
