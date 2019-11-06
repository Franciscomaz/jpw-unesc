import React, { useState } from 'react';

const INITIAL_VALUE = 1;

function InvestimentCalculator() {
  const [investiment, setInvestiment] = useState(INITIAL_VALUE);
  const [numberOfMonths, setNumberOfMonths] = useState(INITIAL_VALUE);
  const [total, setTotal] = useState(INITIAL_VALUE);

  const onChangeInvestiment = value => {
    if (!value) return;
    setInvestiment(parseOrThrow(value, parseFloat));
    calculateNumberOfMonths();
    calculateTotal();
  };

  const onChangeNumberOfMonths = value => {
    if (!value) return;
    setNumberOfMonths(parseOrThrow(value, parseInt));
    calculateInvestiment();
    calculateTotal();
  };

  const onChangeTotal = value => {
    if (!value) return;
    setTotal(parseOrThrow(value, parseFloat));
    calculateInvestiment();
    calculateNumberOfMonths();
  };

  const calculateInvestiment = () => {
    setInvestiment(total / numberOfMonths || INITIAL_VALUE);
  };

  const calculateNumberOfMonths = () => {
    setNumberOfMonths(total / investiment || INITIAL_VALUE);
  };

  const calculateTotal = () => {
    setTotal(investiment * numberOfMonths);
  };

  const parseOrThrow = (value, parser) => {
    if (value == null || !parser) {
      console.log('É necessário informar o valor e o parser');
      return INITIAL_VALUE;
    }

    try {
      return parser(value);
    } catch (err) {
      throw new Error(
        `Ocorreu um erro ao tentar converter o valor ${value} para numero:`,
        err
      );
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="investiment">Investiment</label>
        <input
          id="investiment"
          type="number"
          value={investiment.toFixed(2)}
          onChange={event => onChangeInvestiment(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="numberOfMonths">Months</label>
        <input
          id="numberOfMonths"
          type="number"
          value={numberOfMonths.toFixed(0)}
          onChange={event => onChangeNumberOfMonths(event.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="total">Total</label>
        <input
          id="total"
          type="number"
          value={total.toFixed(2)}
          onChange={event => onChangeTotal(event.target.value)}
        ></input>
      </div>
    </div>
  );
}

export default InvestimentCalculator;
