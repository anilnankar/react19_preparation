
import React, {useState} from 'react';
import ContentSection from "../utils/contentsection";

function LoginForm() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        username: "",
        mobile: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
    };

    return (
        <ContentSection title="Form Login" tooltip="">
            <form onSubmit={handleLoginSubmit}>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Ente password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='mobile'
                        placeholder='Enter mobile number'
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            </form>               
        </ContentSection>
    );
}

export default LoginForm;