import React, {useState, useCallback, useEffect} from 'react';
import ContentSection from "../utils/contentsection";

function ChildComponent({ increment }) {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(`Memoized Child render (count: ${renderCount.current})`);

  return (
    <button onClick={increment}>Increment</button>
  );
}

const MemoizedChild = React.memo(ChildComponent); // Prevents unnecessary re-renders

function ChildWithoutMemo({ increment }) {
  const renderCount = React.useRef(0);
  renderCount.current += 1;
  console.log(`Non-memo Child render (count: ${renderCount.current})`);

  return (
    <button onClick={increment} style={{ marginLeft: 10 }}>
      Increment (no memo)
    </button>
  );
}

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
              <legend style={{"color": "#e37034"}}>Child 1 with Memo</legend>
              <span>Count: {count}</span><br/>
              <MemoizedChild increment={increment} />
            </fieldset>

            <fieldset className="fieldset" style={{"border":"1px solid #e37034", "marginBottom": "10px"}}>
              <legend style={{"color": "#e37034"}}>Child 2 Without Memo</legend>
              <span>Count: {count}</span><br/>
              <ChildWithoutMemo increment={increment} />
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
