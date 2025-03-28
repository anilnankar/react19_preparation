import React, {useRef} from "react";
import ContentSection from "../utils/contentsection";

function UseRef() {

  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); // Focus the input field
    inputRef.current.style.border = "2px solid blue"; // Modify the style
  };

  return (
    <ContentSection title="Focus Input using useRef" tooltip="">
        <input ref={inputRef} type="text" placeholder="Enter text..." />
        <button onClick={handleFocus}>Focus Input</button>
    </ContentSection>
  );
}

export default UseRef;
