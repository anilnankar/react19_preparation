import React from 'react';
import useTheme from "./useTheme";

function ContextApi() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <p>The current theme is: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ContextApi;