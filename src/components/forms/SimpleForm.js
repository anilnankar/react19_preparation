import {useState} from 'react';
import ContentSection from "../utils/contentsection";

function SimpleForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted First Name:", firstName);
      console.log("Submitted Last Name:", lastName);    
    };
    
    return (
        <ContentSection title="Form Submit" tooltip="">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Enter your last name"  
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>                
        </ContentSection>
    );
}

export default SimpleForm;