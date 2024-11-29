import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    name: "",
    cpassword: "",
  });
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form page from reloading
    // Validate Password and Confirm Password
    if (credentials.password !== credentials.cpassword) {
      props.showAlert("Passwords do not match!", "error");
      return;
    }
    // API call
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        name: credentials.name,
      }), // Pass the note data
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token  in localStorage and redirect
      localStorage.setItem("token", json.authtoken);
      setCredentials({ email: "", password: "", name: "", cpassword: "" }); // Reset the form fields
      Navigate("/login");
      props.showAlert("Account created successfully", "success");

    } else {
      props.showAlert("Invalid details", "error");
    }
  };

  const onChange = (e) => {
    // get values from the input fields and set to setNote
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
        <h2 className="my-3">Create an account to use iNotebook</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
           {/* Hidden Password Field */}
           <input
          type="text"
          name="fake-password"
          autoComplete="off"
          style={{ display: "none" }}
        />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={onChange}
            name="name"
            autoComplete="new-name"
            placeholder="Enter your name" 
            value={credentials.name}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={credentials.email}
            onChange={onChange}
            name="email"
            autoComplete="new-email"
            aria-describedby="emailHelp"
            placeholder="Enter your email" 

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
            value={credentials.password}
            minLength={5}
            required
            onChange={onChange}
            autoComplete="new-password"
            name="password"
            placeholder="Password" 

          />
          <div id="emailHelp" className="form-text">
            Password must be at least 8 characters long, include numbers,
            uppercase, and lowercase letters.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            value={credentials.cpassword}
            onChange={onChange}
            name="cpassword"
            placeholder="Re-enter password" 

            autoComplete="new-password"
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
