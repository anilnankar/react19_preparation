import React from "react";
import ContentSection from "../../utils/contentsection";
import { Button } from "./Button";

function Ocp() {
    return (
        <ContentSection title="OCP" tooltip="">
            <p>Open/Closed Principle</p>
            <Button label="Primary Button" style={{ backgroundColor: "blue", color: "white" }} />
            &nbsp;
            <Button label="Danger Button" style={{ backgroundColor: "red", color: "white" }} />
        </ContentSection>
    );
}

export default Ocp;