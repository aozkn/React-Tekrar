import React from "react";
import { Link, Outlet } from "react-router-dom";

const Fullstack = () => {
  return (
    <div className="mt-4 text-center">
      <h1 className="display-6 text-success">Full Stack Path</h1>
      <p>
        Become a software and application developer, well-equipped with both
        front-end and back-end.
      </p>
      <img
        src="https://clarusway.com/wp-content/uploads/elementor/thumbs/v1-Fullstack-developer-pqnf31gbxlt9gholzgwtsxya1abhwiwulezoqna3wo.jpg"
        alt=""
      />
      <div>
        <button className="btn btn-outline-success mt-4">Learn More</button>
      </div>
      <div>
        <Link to="" className="btn btn-success w-25 m-3">
          React
        </Link>
        <Link to="nextjs" className="btn btn-warning w-25 m-3">
          NextJs
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Fullstack;
