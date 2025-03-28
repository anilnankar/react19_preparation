import React, {useState, useEffect} from 'react';
import ContentSection from "../utils/contentsection";

function CustomHooks() {

    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount(count+1);
    };

    return (
        <div className="app-container">
            <ContentSection title="Custom Hook" tooltip="const [count, setCount] = useState(0); :n const updateCount = () => { :n         setCount(count+1);:n     };:n">
                <p>Count: <span>{count}</span></p>
                <button onClick={updateCount} name="button">UpdateCount</button>
            </ContentSection>
        </div>
    );
}

export default CustomHooks;