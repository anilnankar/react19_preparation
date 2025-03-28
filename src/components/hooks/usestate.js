import React, {useState, useEffect} from 'react';
import ContentSection from "../utils/contentsection";

function UseState() {

  const [clicks, setClicks] = useState(0);
  const updateClicks = () => {
    setClicks(clicks+1);
  };
  
  return (
    <>
      <ContentSection title="useState" tooltip="const [clicks, setClicks] = useState(0); :n const updateClicks = () => { :n         setClicks(clicks+1);:n     };:n">
        <p>Clicks: <span>{clicks}</span></p>
        <button onClick={updateClicks} name="button">Update Clicks</button>
      </ContentSection>
    </>
  );
}

export default UseState;
