import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount } from './store/countSlice';

const App = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => dispatch(addCount());
  const handleSub = () => dispatch(subCount());
  return (
    <>
      <h2>count: {count}</h2>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </>
  );
};

export default App;
