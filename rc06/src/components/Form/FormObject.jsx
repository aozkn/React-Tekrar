import React, { useState } from "react";

const FormObject = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleFormData = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    setFormData({ ...formData, [e.target.id]: e.target.value });
    // setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
        
    username:${username}
    email:${email}
    password:${password}

    `);
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="container mt-4 bg-success  rounded">
      <h2 className="text-center text-dark">FORM OBJECT IN REACT</h2>
      <form onSubmit={handleSubmit}>
        <div classname="mb-3">
          <label htmlfor="username" className="form-label">
            UserName : Hello, {username}
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            onChange={handleFormData}
            value={username}
            name="username"
          />
        </div>
        <div classname="mb-3">
          <label htmlfor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleFormData}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={handleFormData}
            value={password}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormObject;
