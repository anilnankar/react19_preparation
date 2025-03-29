import React from "react";
import WithAuth from "./WithAuth";
import Dashboard from "./Dashboard";
import ContentSection from "../utils/contentsection";

const ProtectedDashboard = WithAuth(Dashboard);

function Hoc() {
  return (
    <div className="app-container">
        <ContentSection title="HOC" tooltip="">
            <ProtectedDashboard />
        </ContentSection>
    </div>
  );
}

export default Hoc;
