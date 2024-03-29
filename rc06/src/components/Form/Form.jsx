import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUserName = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
        
    username:${username}
    email:${email}
    password:${password}

    `);
    setEmail("");
    setPassword("");
    setUsername("");
  };
  return (
    <div className="container mt-4 bg-success  rounded">
      <h2 className="text-center text-dark">FORMS IN REACT</h2>
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
            onChange={handleUserName}
            value={username}
          />
        </div>
        <div classname="mb-3">
          <label htmlfor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={handlePassword}
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

export default Form;
