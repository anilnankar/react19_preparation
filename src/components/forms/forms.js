import React from 'react';
import SimpleForm from './SimpleForm';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function Forms() {
    
    return (
        <div className="app-container">
            <SimpleForm />
            <LoginForm />
            <RegisterForm />
        </div>
    );
}

export default Forms;