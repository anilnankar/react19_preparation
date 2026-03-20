import {render, screen} from '@testing-library/react';
import LoginForm from './LoginForm';

// Check the login form is render or not
test("Check login form loaded or not", () => {
    render(<LoginForm />);
    expect(screen.getByText(/Form Login/i)).toBeInTheDocument();
});

