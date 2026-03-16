import React, {useState} from 'react';
import ContentSection from "../utils/contentsection";

function RegisterForm() {
    const [regFormData, setRegFormData] = useState({
        username: "",
        gender: "male",
        country: "india",
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
                <br/>
                <select name="country" value={regFormData.country} onChange={handleCheckboxChange}>
                    <option value="india">India</option>
                    <option value="us">US</option>
                </select>
                <br/>
                <label>
                    Subscribe:
                    <input
                    type="checkbox"
                    name="subscribe"
                    checked={regFormData.subscribe}
                    onChange={handleCheckboxChange}
                    />
                </label>
                <br/>
                <label>
                    Gender:
                    Male
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={regFormData.gender === "male"}
                        onChange={handleRegFormChange}
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={regFormData.gender === "female"}
                        onChange={handleRegFormChange}
                    />
                </label>
                <br/>
            </div>
            
            <button type="submit">Submit</button>
            </form>
        </ContentSection>
    );
}

export default RegisterForm;