// MessageComponent.js - Uses an abstract logger
import React from "react";

export default function MessageComponent({ logger }) {
  const handleClick = () => {
    logger.log("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
