import React from "react";
import ContentSection from "../../utils/contentsection";
import List from "./List";

function Lsp() {
    // Example 1: String data
    const frameworks = null;

    // Example 2: Number data
    const numbers = [1, 2, 3, 4];

    // Example 3: Object data
    const users = [
        { id: 1, name: "Alice", role: "Admin" },
        { id: 2, name: "Bob", role: "User" },
        { id: 3, name: "Charlie", role: "Moderator" }
    ];

    // Example 4: Nested/Complex data
    const projects = [
        { title: "Project A", tasks: ["Design", "Development", "Testing"], status: "Active" },
        { title: "Project B", tasks: ["Planning", "Design"], status: "Planning" },
        { title: "Project C", tasks: ["Development", "Testing", "Deployment"], status: "In Progress" }
    ];

    return (
        <ContentSection title="LSP" tooltip="">
            <p>Liskov Substitution Principle - Same List component works with ANY data type!</p>

            <h4>Example 1: String Data</h4>
            <List items={frameworks} renderItem={(item) => <b>{item}</b>} />

            <h4>Example 2: Number Data</h4>
            <List items={numbers} renderItem={(num) => <i>{num * 2}</i>} />

            <h4>Example 3: Object Data</h4>
            <List 
                items={users} 
                renderItem={(user) => (
                    <span style={{ display: "flex", gap: "10px" }}>
                        <strong>{user.name}</strong> - {user.role}
                    </span>
                )} 
            />

            <h4>Example 4: Nested/Complex Data</h4>
            <List 
                items={projects} 
                renderItem={(project) => (
                    <div style={{ marginBottom: "10px" }}>
                        <strong>{project.title}</strong>
                        <span style={{ marginLeft: "10px", color: project.status === "Active" ? "green" : "orange" }}>
                            {project.status}
                        </span>
                        <div style={{ marginLeft: "20px", fontSize: "12px", color: "gray" }}>
                            Tasks: {project.tasks.join(", ")}
                        </div>
                    </div>
                )} 
            />

            <h4>Example 5: Error Handling - Missing items</h4>
            <List items={null} renderItem={(item) => item} />

            <h4>Example 6: Error Handling - Empty array</h4>
            <List items={[]} renderItem={(item) => item} />
        </ContentSection>
    );
}

export default Lsp;