import React from "react";

function Dashboard({loggedData}) {
  return <>
      <h3>Welcome to your Dashboard!</h3>
      <h2>Hi {loggedData.username},</h2>
      <h2>{loggedData.username} is {loggedData.age} years old.</h2>      
  </>
}

export default Dashboard;
