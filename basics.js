import React from 'react';
import { useLocation } from "react-router-dom";
import ContentSection from "../utils/contentsection";

function CurrentRoute() {
    const location = useLocation();
    return <h2>📍 Current Route: {location.pathname}</h2>;
}

function Basics() {
    const name = "Anil";
    const [username, setUsername] = React.useState("anilnankar");

    return (
        <div className="app-container">
            <ContentSection title="Route" tooltip="import { useLocation } from 'react-router-dom'; :n const location = useLocation(); :n {location.pathname}">
                How to get curret route?
                <CurrentRoute />
            </ContentSection>

            <ContentSection title="Variable" tooltip="{name}">
                My name is <b>{name}</b>.
            </ContentSection>

            <ContentSection title="Current DateTime" tooltip="{new Date().toLocaleDateString()}:n{new Date().toLocaleTimeString()}">
                {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}     
            </ContentSection>

            <ContentSection title="HTML Element" tooltip="< input :n
                    type='text':n
                    name='username':n
                    id='username':n
                    value={username}:n
                    onChange={(e) => setUsername(e.target.value)}:n
                    placeholder='Enter user name':n
                    className='textbox':n
                />:n
                Username: {username}">
                
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Enter user name'
                    className="textbox"
                />
                Username: {username}
            </ContentSection>
        </div>
    );
}

export default Basics;