import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterstore';

function CounterRedux() {

    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>&nbsp;
            <button onClick={() => dispatch(decrement())}>-</button>&nbsp;
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );

}

export default CounterRedux;