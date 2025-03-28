import React, {useState} from 'react';
import ContentSection from '../utils/contentsection';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="app-container">
            <ContentSection title="Unit Testing" tooltip="">
                <h4>Open Terminal and run "npm test"</h4>
                <h1 data-testid="count-value">Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </ContentSection>
        </div>
    );

}

export default Counter;
