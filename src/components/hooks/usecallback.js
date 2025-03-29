import React, {useState, useCallback} from 'react';
import ContentSection from "../utils/contentsection";

function ChildComponent({ increment }) {
  console.log("Child re-rendered!");
  return (
    <button onClick={increment}>Increment</button>
  );
}

const MemoizedChild = React.memo(ChildComponent); // Prevents unnecessary re-renders

function UseCallback() {
  console.log("Parent re-rendered!");

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // ✅ useCallback ensures the function reference remains the same across re-renders
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  


  return (
    <>
      <ContentSection title="useCallback" tooltip="">
        <h3>Prevents unnecessary re-renders of child</h3>
        <fieldset className="fieldset" style={{"border":"1px solid #e37034"}}>
          <legend style={{"color": "#e37034"}}>Parent Component</legend>

            <fieldset className="fieldset" style={{"border":"1px solid #e37034", "marginBottom": "10px"}}>
              <legend style={{"color": "#e37034"}}>Child Component</legend>
              <span>Count: {count}</span><br/>
              <MemoizedChild increment={increment} />
            </fieldset>

            {/* This input changes but does NOT cause re-render of MemoizedChild */}
            <input 
              type="text" 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              placeholder="Type here..."
            />
            <br/>
            Text: {text}

        </fieldset>
      </ContentSection>
    </>
  );
}

export default UseCallback;
