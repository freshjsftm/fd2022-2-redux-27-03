import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount, setStep } from './store/countSlice';

const App = () => {
  const { count, step } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount(step));
  const handleSub = () => dispatch(subCount(step));
  const handleStep = ({ target: { value } }) =>
    dispatch(setStep(Number(value)));
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
      <input type="number" value={step} onChange={handleStep} />
    </>
  );
};

export default App;
