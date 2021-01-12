import React from 'react';
import { increment, reset } from './Action';
import { useSelector, useDispatch } from 'react-redux';
import Keypad from '../Keypad/Keypad';


function Counter(){
    const counter = useSelector(state => state.counter.money);
    const dispatch = useDispatch();
    return (
        <div className="counter">
            <h3>Credit value: </h3>
            <h2>{counter} RON</h2>
            <button onClick={() => dispatch(increment(1))}>1</button>
            <button onClick={() => dispatch(increment(2.5))}>2.5</button>
            <button onClick={() => dispatch(increment(5))}>5</button>
            <div>
                <button onClick={() => dispatch(reset())}>Take your money</button>
            </div>
            <Keypad />
        </div>
    );
}

export default Counter;