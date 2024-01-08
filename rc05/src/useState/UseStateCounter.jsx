import React, { useState } from "react";

const UseStateCounter = () => {
  //?Count adinda bir state tanimladik .Count'un baslangic degerini 0 olarak atadik.
  const [count, setCount] = useState(0);
  // let count = 0
  const handleInc = () => {
    // count=count +1

    setCount(count + 1);
    console.log(count);
  };
  return (
    <div>
      <h2>USE STATE HOOK</h2>
      <h1>Count:{count}</h1>
      <button onClick={handleInc}>INC</button>
      <button>CLR</button>
      <button>DEC</button>
    </div>
  );
};

export default UseStateCounter;
