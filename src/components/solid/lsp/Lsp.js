import React from "react";
import ContentSection from "../../utils/contentsection";
import List from "./List";

function Lsp() {
    return (
        <ContentSection title="LSP" tooltip="">
            <p>Liskov Substitution Principle</p>
            <List items={["React", "Angular"]} renderItem={(item) => <b>{item}</b>} />
            <List items={[1, 2]} renderItem={(num) => <i>{num * 2}</i>} />
        </ContentSection>
    );
}

export default Lsp;