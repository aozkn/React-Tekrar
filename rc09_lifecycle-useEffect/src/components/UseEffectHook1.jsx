import React, { useEffect, useState } from "react";

const UseEffectHook1 = () => {
  //   useEffect(() => {
  //     first; //?ComponenetDidMount(Dependency Arraw is Empty)
  //     //? if there's dependency array with code/func/state  then it work as ComponenetDidMount + ComponentDidUpdate

  //     return () => {
  //       second; //?Clean-Up Function(CompenentWillUnmount)
  //     };
  //   }, [third]); //?Dependency Array

  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  console.log("render");

  //! ComponentDidMount
  //   useEffect(() => {
  //     //! fetch, async-await ,localStorage, setTimeout, setInterval();
  //     console.log("ComponenetDidMount");
  //     setTimeout(() => {
  //       alert("Data Fetched");
  //     }, 3000);
  //   }, []); //? Dependecy Array is Empty

  //! ComponenetDidUpdate
  //   useEffect(() => {
  //     console.log("ComponenetDidMount+ComponenetDidUpdate");
  //     setTimeout(() => {
  //       alert("Data Fetched");
  //     }, 3000);
  //   }, [count]); //? Whenever Count changes  mount+update works.
  const fetchData = () => {
    console.log("Data Fetch Started");
  };
  useEffect(() => {
    const timer = setInterval(fetchData, 2000);

    return () => {
      clearInterval(timer);
      console.log("ComponentWillUnmount");
    };
  }, []);

  return (
    <div className="container text-center">
      <h1 className="text-danger">UseEffect METHODS</h1>
      <h3>COUNT={count}</h3>
      <button className="btn btn-info" onClick={handleInc}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook1;
