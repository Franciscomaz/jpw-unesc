import React from 'react';

function ComputerForm(props) {
  return (
    <div>
      <button onClick={() => props.handleAction({})}>Adicionar</button>
    </div>
  );
}

export default ComputerForm;
