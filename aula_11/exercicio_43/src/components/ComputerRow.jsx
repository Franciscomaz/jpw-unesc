import React from 'react';

function ComputerRow(props) {
  return (
    <tr>
      <td>{props.value.hostname}</td>
      <td>{props.value.processador}</td>
      <td>{props.value.memoria}</td>
      <td>{props.value.armazenamento}</td>
      <td>{props.value.estado}</td>
      <td>
        <button onClick={() => props.handleAction(props.value.id)}>
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default ComputerRow;
