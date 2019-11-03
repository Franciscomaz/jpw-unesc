import React, { useState } from 'react';

function BaseSelect(props) {
  const [selected, setSelected] = useState(props.selected || props.items[0]);

  return (
    <div>
      <label>{props.name}:</label>
      <select
        value={selected}
        onChange={event => setSelected(event.target.value)}
      >
        {props.items.map(item => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default BaseSelect;
