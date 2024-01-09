import React, { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");

  const handleUserName = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success">FORMS IN REACT</h2>
      <form>
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
          />
        </div>
        <div classname="mb-3">
          <label htmlfor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
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
