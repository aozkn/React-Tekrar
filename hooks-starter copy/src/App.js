import { useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Ali");

  const [dataState, setDataState] = useState({
    taxRate: 0.18,
    ship: 25,
  });
  // const taxData = { taxRate: 0.18,
  //   ship: 25,};

  return (
    <div className="container mt-2">
      <div>
        <Header />
      </div>
      <hr />
      <div className="">
        <p className="text-center">Count : {count}</p>
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
      <hr />
      {/* <HeaderMemo user={user} /> */}
      <div className="">
        <button
          className="btn btn-danger d-flex mx-auto"
          onClick={() => setUser("Ali Ozkan")}
        >
          Change Name
        </button>
        <hr />
      </div>
      {/* <HeaderMemo user={count} /> */}
      <hr />
      {/* <TaxComp taxData={taxData} /> */}
      <TaxComp dataState={dataState} />
    </div>
  );
}

export default App;
