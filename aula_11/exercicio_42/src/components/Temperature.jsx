import React, { useState } from 'react';

const INITIAL_TEMPERATURE = 20;

function Temperature(props) {
  const [value, setValue] = useState(
    props.initialTemperature || INITIAL_TEMPERATURE
  );

  return (
    <div>
      <label>Temperatura:</label>
      <input
        value={value}
        onChange={event => setValue(event.target.value)}
      ></input>
    </div>
  );
}

export default Temperature;
