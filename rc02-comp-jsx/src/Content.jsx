import React from "react";

const Content = () => {

    const parStyle = {
        fontFamily:"tohama",
        fontSize:"1.1rem",
        textAlign:"justify",
        margin:"auto",
    }
  return (
    <main>
      <h2>Lorem ipsum dolor sit.</h2>
      <p style={parStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat
        voluptates consectetur totam, voluptas provident quisquam cum incidunt
        fugit enim.
      </p>
      <p style={parStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, natus.</p>

    </main>
  );
};

export default Content;
