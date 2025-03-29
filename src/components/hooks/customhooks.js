import React, {useState, useEffect} from 'react';
import ContentSection from "../utils/contentsection";
import useCounter from './usecounter';

function CustomHooks() {

    const { count, increment, decrement, reset } = useCounter(5); // Start at 5

    return (
        <ContentSection title="Custom Hook" tooltip="">
            <span>Counter: {count}</span>
            <br/>
            <button onClick={increment}>Increment</button>
            &nbsp;
            <button onClick={decrement}>Decrement</button>
            &nbsp;
            <button onClick={reset}>Reset</button>
        </ContentSection>
    );
}

export default CustomHooks;