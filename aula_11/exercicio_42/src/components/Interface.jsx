import React from 'react';
import Mode from './Mode';
import Speed from './Speed';
import Temperature from './Temperature';

function Interface() {
  return (
    <div>
      <Temperature />
      <Mode />
      <Speed />
    </div>
  );
}

export default Interface;
