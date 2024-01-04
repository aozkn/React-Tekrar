import React from "react";
import Name from "./Name";

const Person = (props) => {
  console.log(props);
  return (
    <div>
      <Name  name={props.name} />
      {/* <p>Hello, {props.name} </p> */}
      <img  src={props.img} alt="eagle" />

      <p>renk:{props.color}</p>
    </div>
  );
};

export default Person;
