// Import required modules and libraries
import {useState} from 'react';
import {Navbar} from './Navbar';
import {Link, useNavigate} from "react-router-dom";
import UserPool from '../UserPool';
import '../styles/account.css';

// Validate form input values
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Please enter an email.";
  } else if (!regex.test(values.email)) {
    errors.email = "Invalid email.";
  }

  if (!values.password) {
    errors.password = "Please enter a password.";
  } else if (values.password.length < 8) {
    errors.password = "Invalid password. Must be at least 8 characters long.";
  }
  
  return errors;
};

// Register component
export const Register = () => {
  // State for form values and status
  const [formState, setFormState] = useState({ 
    values: { email: "", password: "" }, 
    status: { errors: {}, isSubmit: false }
  });
  const { values, status } = formState;
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value }
    }));
  };

  // Handle form submission and user registration
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    setFormState({ ...formState, status: { errors, isSubmit: true } });
    if (Object.keys(errors).length === 0) {
      UserPool.signUp(values.email, values.password, [], null, (err, data) => {
        if (err) {
          console.error(err);
        }
        console.log(data);
      });
      navigate('/login');
    }
  };
  
  // Render registration form
  return (
    <div className="account">
      <Navbar/>
      <div className="account-form-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="divider"></div>
          <div className="form"></div>
          <div className="field">
            <label>Email</label>
            <input type='email' autoComplete='none' name="email" placeholder="Email" value={values.email} onChange={handleChange}></input>
          </div>
          <p>{status.errors.email}</p>
          <div className="field">
            <label>Password</label>
            <input type='password' autoComplete='none' name="password" placeholder="Password" value={values.password} onChange={handleChange}></input>
          </div>
          <p>{status.errors.password}</p>
          <button className="enter">Enter</button>
          <Link to='/login' className="Link-register-login">Login</Link>
        </form>
      </div>
    </div>
  );
};