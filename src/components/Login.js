import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
const [credentials, setCredentials]=useState({email:"", password:""});
const Navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form page from reloading
    setCredentials({ email: "", password: ""}); // Reset the form fields

    // API call
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:credentials.email, password:credentials.password}), // Pass the note data
    });
    const json = await response.json();  // Parse the JSON response
    console.log(json)
    if(json.success){
        // Save the authentication token in local storage and redirect
        localStorage.setItem('token', json.authtoken);
        props.showAlert("Logged in successfully", "success");
        Navigate("/"); // Navigate to the home page

    }else{
      props.showAlert("Invalid credentials", "error");
    }
  };
 // Update state when input fields change
  const onChange = (e) => {
    // get values from the input fields and set to setNote
    setCredentials({ ...credentials, [e.target.name]: e.target.value });  
    };
  return (
    <div className="container my-3">
        <h3 className="my-3">Login to use iNotebook</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
         {/* Hidden password field to trick the browser */}
         <input
          type="text"
          name="fake-password"
          autoComplete="off"
          style={{ display: "none" }}
        />
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            id="email"
            name="email"
            autoComplete="current-email" // Helps browsers recognize the field correctly
            value={credentials.email} onChange={onChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"  // Suggests the current password to browsers
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
