import React from "react";
import ContentSection from "../../utils/contentsection";
import { Button } from "./Button";

function Ocp() {
    const handlePrimaryClick = () => {
        console.log("Primary Button Clicked!");
    };

    const handleDangerClick = () => {
        console.log("Danger Button Clicked - Action confirmed!");
    };

    return (
        <ContentSection title="OCP" tooltip="">
            <p>Open/Closed Principle</p>
            <Button 
                label="Primary Button" 
                onClick={handlePrimaryClick}
                style={{ backgroundColor: "blue", color: "white" }} 
            />
            &nbsp;
            <Button 
                label="Danger Button" 
                onClick={handleDangerClick}
                style={{ backgroundColor: "red", color: "white" }} 
            />
        </ContentSection>
    );
}

export default Ocp;