import React, {useState} from 'react';
import ContentSection from "../utils/contentsection";

function SimpleForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Name:", name);
    };
    
    return (
        <ContentSection title="Form Submit" tooltip="">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>                
        </ContentSection>
    );
}

export default SimpleForm;