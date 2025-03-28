import React from "react";
import { useLocation } from "react-router-dom";
import ContentSection from "../utils/contentsection";

function CurrentRoute() {
    const location = useLocation();
    return <h2>📍 Current Route: {location.pathname}</h2>;
}


function useCustomState(defaultValue) {
    let state = defaultValue;
  
    const setState = (newValue) => {
      state = newValue;
      console.log("State updated:", state);
    };
  
    return { yourState: state, yourSetter: setState };
  }


function Basics() {
    
    const name = "Anil";
    const {yourState: count, yourSetter: setCount} = useCustomState(1);
    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <div className="app-container">
            <ContentSection title="Route" tooltip="import { useLocation } from 'react-router-dom'; :n const location = useLocation(); :n {location.pathname}">
                How to get curret route?
                <CurrentRoute />
            </ContentSection>

            <ContentSection title="Variable in JSX" tooltip="{name}">
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
                    placeholder='Enter user name'
                    className="textbox"
                />
            </ContentSection>

            <ContentSection title="Array Destructuring" tooltip="">
                <h2>State Variable:</h2>
                <p>Count: {count}</p>
                <button onClick={handleClick}>Increase</button>
            </ContentSection>
        </div>
    );
}

export default Basics;