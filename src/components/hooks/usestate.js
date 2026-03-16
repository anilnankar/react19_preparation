import {useState} from 'react';
import ContentSection from "../utils/contentsection";

function UseState() {

  const [clicks, setClicks] = useState(0);
  const updateClicks = () => {
    setClicks(clicks+1);
  };

  // Example to demonstrate state update differences
  const [asyncClicks, setAsyncClicks] = useState(0);
  const [funcClicks, setFuncClicks] = useState(0);

  const incrementAsyncDirect = () => {
    console.log("Async Direct Clicks before setTimeout:", asyncClicks);
    setTimeout(() => {
      setAsyncClicks(asyncClicks + 1);
    }, 1000);
  };

  const incrementAsyncFunc = () => {
    console.log("Async Functional Clicks before setTimeout:", funcClicks);
    setTimeout(() => {
      setFuncClicks(prev => prev + 1);
    }, 1000);
  };

  const resetAsync = () => {
    setAsyncClicks(0);
    setFuncClicks(0);
  };
  
  return (
    <>
      <ContentSection title="useState" tooltip="const [clicks, setClicks] = useState(0); :n const updateClicks = () => { :n         setClicks(clicks+1);:n     };:n">
        <p>Clicks: <span>{clicks}</span></p>
        <button onClick={updateClicks} name="button">Update Clicks</button>
      </ContentSection>
      <ContentSection title="State Update Differences" tooltip="Demonstrating direct value vs functional update in async scenarios">
        <p>Async Direct (setAsyncClicks(asyncClicks + 1)): <span>{asyncClicks}</span></p>
        <p>Async Functional (setFuncClicks(prev => prev + 1)): <span>{funcClicks}</span></p>
        <button onClick={incrementAsyncDirect}>Increment Direct (Async)</button>
        <button onClick={incrementAsyncFunc}>Increment Functional (Async)</button>
        <button onClick={resetAsync}>Reset</button>
        <p><em>Click the Direct button multiple times quickly to see it only increment by 1 after 1 second, instead of the number of clicks.</em></p>
      </ContentSection>
    </>
  );
}

export default UseState;
