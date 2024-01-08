import React, { useState } from "react";
import UseStateCounter from "./UseStateCounter";

const UseStateObject = () => {
  //   const [name, setName] = useState("Ali");
  //   const [surname, setSurname] = useState("Ozkan");
  //   const [age, setAge] = useState(26);
  //   const [salary, setSalary] = useState(5000);

  const [kisi, setKisi] = useState({
    name: "Ali",
    surname: "Ozkan",
    age: 26,
    salary: 5000,
  });

  const [toggle, setToggle] = useState(true);

  //   let toggle = false;

  const handleToggle = () => {
    // toggle = !toggle;
    setToggle(!toggle);
    console.log(toggle);
    if (toggle) {
      setKisi({
        name: "Salih",
        surname: "Ozkan",
        age: 15,
        salary: 1000,
      });
    } else {
      setKisi({
        name: "Ali",
        surname: "Ozkan",
        age: 26,
        salary: 5000,
      });
    }
  };
  return (
    <div>
      <h1>USE STATE OBJECT</h1>

      <h2>NAME:{kisi.name}</h2>
      <h2>SURNAME:{kisi.surname}</h2>
      <h2>AGE:{kisi.age}</h2>
      <h2>SALARY:{kisi.salary}</h2>

      <button onClick={() => setKisi({ ...kisi, name: "Sami" })}>
        Change Name
      </button>
      <button onClick={() => setKisi({ ...kisi, age: kisi.age + 2 })}>
        Inc Age
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 10000 })}>
        Inc Salary
      </button>
      <button
        onClick={() => {
          setKisi({
            name: "Salih",
            surname: "Ozkan",
            age: 15,
            salary: 1000,
          });
        }}
      >
        FullChange
      </button>

      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle && <textarea name="" id="" cols="30" rows="30"></textarea>} */}
      {toggle && <UseStateCounter/>}
    </div>
  );
};

export default UseStateObject;
