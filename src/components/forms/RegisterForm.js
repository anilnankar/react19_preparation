import React, {useState} from 'react';
import ContentSection from "../utils/contentsection";

function RegisterForm() {
    const [regFormData, setRegFormData] = useState({
        username: "",
        gender: "male",
        subscribe: false,
    });

    const handleRegFormChange = (e) => {
        const { name, value } = e.target;
        setRegFormData({
            ...regFormData,
            [name]: value,
        });
    };

    
    const handleCheckboxChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(checked);
        setRegFormData({
            ...regFormData,
            [name]: type === "checkbox" ? checked : value,
        });
    };
    
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Advanced Form Data:", regFormData);
    };
    
    return (
    <ContentSection title="Form Register" tooltip="">
        <form onSubmit={handleRegisterSubmit}>
            <div>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={regFormData.username}
                    onChange={handleRegFormChange}
                />

                <select name="gender" value={regFormData.gender} onChange={handleCheckboxChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <label>
                    Subscribe:
                    <input
                    type="checkbox"
                    name="subscribe"
                    checked={regFormData.subscribe}
                    onChange={handleRegFormChange}
                    />
                </label>
            </div>
            
            <button type="submit">Submit</button>
            </form>
        </ContentSection>
    );
}

export default RegisterForm;