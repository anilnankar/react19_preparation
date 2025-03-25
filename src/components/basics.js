import react from 'react';
import { useLocation } from "react-router-dom";

function CurrentRoute() {
    const location = useLocation();
    return <h2>📍 Current Route: {location.pathname}</h2>;
}
  
function Basics() {
    return (
        <div>
            <h1>Basics</h1>
            <CurrentRoute />
        </div>
    );
}

export default Basics;