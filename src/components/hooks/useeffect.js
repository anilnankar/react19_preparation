import React, {useState, useEffect} from 'react';
import ContentSection from "../utils/contentsection";

function UseEffect() {

  const [count, setCount] = useState(0);
  const updateCount = () => {
      setCount(count+1);
  };
  
  useEffect(() => {
    setCount(5);
  },[]);

  useEffect(() => {
      if (count > 10) {
          setCount(0);
      }
  },[count]);

  return (
    <>
      <ContentSection title="On load useEffect" tooltip="useEffect(() => { :n setCount(count+5); :n },[]);">
          <p>On page load set count value is 5</p>
          <p>Count: <span>{count}</span></p>
        <button onClick={updateCount} name="button">UpdateCount</button>
      </ContentSection>

      <ContentSection title="Reset if count > 10 using useEffect" tooltip="useEffect(() => { :n if (count > 10) { :n setCount(0); :n  } :n },[count]);">
          <p>Count: <span>{count}</span></p>
      </ContentSection>
    </>
  );
}

export default UseEffect;
