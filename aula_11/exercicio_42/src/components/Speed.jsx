import React from 'react';
import BaseSelect from './BaseSelect';

const SPEEDS = [1, 2, 3];

function Speed() {
  return <BaseSelect name="Velocidade" items={SPEEDS} />;
}

export default Speed;
