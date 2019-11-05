import React, { useState, useEffect } from 'react';

import axios from 'axios';

import ComputerForm from './ComputerForm';
import ComputerTable from './ComputerTable';

const BASE_URL = 'http://localhost:3000/computadores';

function ComputerPage() {
  const [computers, setComputers] = useState([]);

  useEffect(() => {
    loadComputers();
  }, []);

  const loadComputers = async () => {
    const computers = await axios.get(BASE_URL);
    setComputers(computers.data || []);
  };

  const addComputer = payload => {
    axios.post(BASE_URL, payload).then(loadComputers);
  };

  const deleteComputer = id => {
    axios.delete(BASE_URL + '/' + id).then(loadComputers);
  };

  return (
    <div>
      <ComputerForm handleAction={addComputer} />
      <ComputerTable computers={computers} handleAction={deleteComputer} />
    </div>
  );
}

export default ComputerPage;
