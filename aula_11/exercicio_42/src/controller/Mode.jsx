import React from 'react';
import BaseSelect from './BaseSelect';

const MODES = ['Ventilar', 'Refrigerar', 'Aquecer'];

function Mode() {
  return <BaseSelect name="Modo" items={MODES} />;
}

export default Mode;
