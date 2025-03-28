import React, {useState} from 'react';
import ContentSection from "../utils/contentsection";
import CounterRedux from './redux/counterredux';
import ContextApi from './theme/contextapi';

function State() {

    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count+1);
    };

    return (
        <div className="app-container">
            <ContentSection title="Component State" tooltip="const [count, setCount] = useState(0); :n const updateCount = () => { :n         setCount(count+1);:n     };:n">
                <p>Count: <span>{count}</span></p>
                <button onClick={updateCount} name="button">UpdateCount</button>
            </ContentSection>
            <ContentSection title="Context API State" tooltip="">
                <ContextApi />
            </ContentSection>
            <ContentSection title="Redux State" tooltip="">
                <CounterRedux />
            </ContentSection>
        </div>
    );
}

export default State;