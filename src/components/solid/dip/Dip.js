import React from "react";
import ContentSection from "../../utils/contentsection";
import MessageComponent from "./MessageComponent";
import { ConsoleLogger } from "./ConsoleLogger"; // Injecting Console Logger

function Dip() {
    const logger = new ConsoleLogger(); // Dependency Injection

    return (
        <ContentSection title="DIP" tooltip="">
            <p>Dependency Inversion Principle</p>
            <MessageComponent logger={logger} />
        </ContentSection>
    );
}

export default Dip;