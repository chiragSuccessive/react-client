import React from 'react';
import TextField from '../../components';

const Demo = () => (
  <>
    <h3>This is a Disabled Input</h3>
    <TextField disabled placeholder="Disabled Input" />
    <h3>A Valid Input</h3>
    <TextField value="Accessible" />
    <h3>An Input with errors</h3>
    <TextField value={101} error="Could not greater than" />
  </>
);
export default Demo;
