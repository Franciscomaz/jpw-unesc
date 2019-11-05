import React from 'react';

import ComputerRow from './ComputerRow';

function ComputerTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Hostname</th>
          <th>Processor</th>
          <th>Memory</th>
          <th>Storage</th>
          <th>State</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.computers.map(computer => (
          <ComputerRow
            key={computer.id}
            value={computer}
            handleAction={props.handleAction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ComputerTable;
