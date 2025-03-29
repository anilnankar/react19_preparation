import React, { useReducer } from "react";
import ContentSection from "../utils/contentsection";


// Reducer function to toggle the state
const reducer = (state) => !state;

function UseReducer() {

  const [isOn, dispatch] = useReducer(reducer, false); // Initial state is false
  
  return (
    <>
      <ContentSection title="useReducer" tooltip="">
        <span>Toggle light is: {isOn ? "ON" : "OFF"}</span><br/>
        <button onClick={dispatch}>{isOn ? "Turn OFF" : "Turn ON"}</button>
      </ContentSection>
    </>
  );
}

export default UseReducer;
