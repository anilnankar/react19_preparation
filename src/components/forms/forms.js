import React, {useState} from 'react';
import ContentSection from "../utils/contentsection";

function Forms() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Submitted Name:", name);
    };

    const [formData, setFormData] = useState({
        email: "",
        password: "",
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

      const [regFormData, setRegFormData] = useState({
        username: "",
        gender: "male",
        subscribe: false,
      });
    
      const handleCheckboxChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleRegisterSubmit = (e) => {
        e.preventDefault();
        console.log("Advanced Form Data:", formData);
      };
    
    
    return (
        <div className="app-container">
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
                            type="password"
                            name="password"
                            placeholder="Ente password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>               
            </ContentSection>

            <ContentSection title="Form Register" tooltip="">
                <form onSubmit={handleRegisterSubmit}>
                    <div>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={regFormData.username}
                            onChange={handleChange}
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
                            onChange={handleChange}
                            />
                        </label>
                    </div>
                    
                    <button type="submit">Submit</button>
                    </form>
                </ContentSection>
        </div>
    );
}

export default Forms;