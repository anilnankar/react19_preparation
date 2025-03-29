import React from "react";

// HOC to check authentication
const WithAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Simulated auth check (replace with real logic)
    const loggedData = {
        username: "anil",
        age: 28,
    };

    if (!isAuthenticated) {
      return <h2>Please log in to access this page.</h2>;
    }

    return <WrappedComponent {...props} loggedData={loggedData}/>;
  };
};

export default WithAuth;
