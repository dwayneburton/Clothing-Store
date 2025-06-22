// Import required modules and libraries
import {useState} from 'react';
import {Navbar} from './Navbar';
import {Link, useNavigate} from "react-router-dom";
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
import '../styles/account.css';

// Validate form input values
const validate = (values) => {
  const errors = {};

  // Validation for email
  if (!values.email) {
    errors.email = "Please enter an email.";
  }

  // Validation for password
  if (!values.password) {
    errors.password = "Please enter a password.";
  }

  return errors;
};

// Login component
export const Login = () => {
  // Manage form state and validation status
  const [formState, setFormState] = useState({
    values: { email: "", password: "" },
    status: { errors: {}, isSubmit: false },
  });

  const { values, status } = formState;
  const navigate = useNavigate();

  // Prepare Cognito user and authentication details
  const user = new CognitoUser({
    Username: values.email,
    Pool: UserPool
  });

  const authDetails = new AuthenticationDetails({
    Username: values.email,
    Password: values.password
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value }
    }));
  };

  // Handle form submission and authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(values);
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        navigate('/');
      },
      onFailure: (err) => {
        console.error("onFailure :", err);
        if (Object.keys(errors).length === 0) {
          errors.password = "Invalid account.";
        }
        setFormState({...formState,
          status: { errors, isSubmit: true }
        });
      }
    });
  };
  
  // Render login form
  return (
    <div className="account">
      <Navbar/>
      <div className="account-form-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
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
          <Link to='/register' className="Link-register-login">Register</Link>
        </form>
      </div>
    </div>
  );
};