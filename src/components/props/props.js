import React from "react";
import ContentSection from "../utils/contentsection";
import { useParams } from "react-router-dom";

function Props({propText, propNum, propBool, propArray}) {

    const { id } = useParams();
    const name = "Anil";

    return (
        <div className="app-container">
            <ContentSection title="URL Params" tooltip="import { useParams } from 'react-router-dom'; :n const { id } = useParams();">
                URL ID Param = {id}
            </ContentSection>

            <ContentSection title="Prop Num" tooltip="{propNum}">
                Prop Num = {propNum}
            </ContentSection>

            <ContentSection title="Prop Bool" tooltip="{propBool}: Boolean value not display">
                Prop Bool = {propBool}
            </ContentSection>

            <ContentSection title="Prop Object" tooltip="{propObject}: Objects are not valid as a React child (found: object with keys {name}). If you meant to render a collection of children, use an array instead.">
                Prop Object = Error
            </ContentSection>

            <ContentSection title="Prop Array" tooltip="{propArray}">
                Prop Array = {propArray}
            </ContentSection>

            <ContentSection title="Prop Drilling" tooltip="">
                Prop Drilling
            </ContentSection>
        </div>
    );
}

export default Props;