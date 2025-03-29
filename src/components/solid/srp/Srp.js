import React from "react";
import ContentSection from "../../utils/contentsection";
import { UseCounter } from "./UseCounter";

function Srp() {
    const { count, increment } = UseCounter();
    return (
        <ContentSection title="SRP" tooltip="">
            <p>Single Responsibility Principle</p>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </ContentSection>
    );
}

export default Srp;