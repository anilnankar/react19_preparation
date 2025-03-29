import React from "react";
import ContentSection from "../../utils/contentsection";
import { Title, Description } from "./TextComponents";

function Isp() {
    return (
        <ContentSection title="ISP" tooltip="">
            <p>Interface Segregation Principle</p>
            <Title text="This is Title" />
            <Description text="This is description" />
        </ContentSection>
    );
}

export default Isp;
