import React from "react";
import ContentSection from "../utils/contentsection";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function CurrentRoute() {
    const location = useLocation();
    // return <h2>📍 Current Route: {location}</h2>;
    return <pre>{JSON.stringify(location, null, 2)}</pre>;
}

// components used to illustrate prop drilling
function GrandChild({ value, payment }) {
    return <div>
        Grandchild received: {value}
        GrandChild payment: {payment}
    </div>;
}

function Child({ value, payment }) {
    return (
        <div>
            <div>Child received: {value}</div>
            <div>Child received payment: {payment}</div>
            <GrandChild value={value} payment={payment} />
        </div>
    );
}

function Props({propText, propNum, propBool, propArray, propObject}) {

    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const filterParam = searchParams.get("filter");
    const limitParam = searchParams.get("limit");
    const name = "Anil";

    return (
        <div className="app-container">
            <ContentSection title="Route" tooltip="import { useLocation } from 'react-router-dom'; :n const location = useLocation(); :n {location.pathname}">
                How to get curret route?
                <CurrentRoute />
            </ContentSection>

            <ContentSection title="URL Params" tooltip="import { useParams } from 'react-router-dom'; :n const { id } = useParams();">
                URL ID Param = {id}
            </ContentSection>

            <ContentSection title="Query Params" tooltip="import { useSearchParams } from 'react-router-dom'; :n const [searchParams] = useSearchParams(); :n const a = searchParams.get('a');">
                Query filter = {filterParam} <br/>
                Query limit = {limitParam}
            </ContentSection>

            <ContentSection title="Prop Text" tooltip="{propText}">
                Prop Text = {propText}
            </ContentSection>


            <ContentSection title="Prop Num" tooltip="{propNum}">
                Prop Num = {propNum}
            </ContentSection>

            <ContentSection title="Prop Bool" tooltip="{propBool}: Boolean value not display">
                Prop Bool = {propBool}
            </ContentSection>

            <ContentSection title="Prop Array" tooltip="{propArray}">
                Prop Array = {propArray.join(", ")}
            </ContentSection>

            <ContentSection title="Prop propObject" tooltip="{propObject}">
                Prop Object = {JSON.stringify(propObject)}
            </ContentSection>

            <ContentSection title="We have to avoid Prop Drilling" tooltip="passing propText through multiple levels">
                <Child value={propText} payment={2000} />
            </ContentSection>
        </div>
    );
}

export default Props;