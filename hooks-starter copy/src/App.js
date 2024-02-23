import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./components/Header";
import HeaderMemo from "./components/HeaderMemo";
import TaxComp from "./components/TaxComp";
import UseRefComp from "./components/UseRefComp";
import axios from "axios";
import Card from "./components/Card";
import ClearButton from "./components/ClearButton";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("Ali");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const [dataState, setDataState] = useState({
    taxRate: 0.18,
    ship: 25,
  });
  // const taxData = { taxRate: 0.18,
  //   ship: 25,};
  //her render bellekteki refereansı değşiyor
  const taxDataRef = useRef({
    taxRate: 0.18,
    ship: 25,
  });
  //hafızada referansı sabit ama kendisi değişebilir olan verileri tanımlamak istiyorsak
  // console.log(taxDataRef);

  const getData = async () => {
    const { data } = await axios("https://dummyjson.com/products");
    // console.log(data);
    setData(data.products);
  };

  useEffect(() => {
    getData();
  }, []);
  const filteredData = data.filter((products) =>
    products.title.toLowerCase().includes(search.toLocaleLowerCase())
  );

  //?If the data is not changign constantly is better to use UseMemo if not better not to
  const filteredMemoData = useMemo(() => {
    console.log("useMemo worked");
    return data.filter((product) =>
      product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }, [data, search]);

  // const calculation = expensiveCalculation(count);
  // const calculation = useMemo(() => expensiveCalculationMemo(count), [count]);
  //useMemo refereansı sabitlemiş oluyor ve hesapmlanın sonucunu belleğe alıyor

  const handleClear = () => {
    setSearch("");
  };

  const handleClearCallBack = useCallback(() => {
    setSearch("");
  }, []);
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
      {/* <TaxComp dataState={dataState} /> */}
      <TaxComp dataState={taxDataRef} />

      <hr />
      {/* <UseRefComp /> */}

      <hr />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* <Card data={filteredData} /> */}
      <Card data={filteredMemoData} />

      <hr />
      {/* <p> Expensive Calculation : {calculation}</p> */}
      {/* <p> Expensive Calculation : {calculation}</p> */}

      <hr />

      {/* <ClearButton handleClear={handleClear} /> */}
      <ClearButton handleClear={handleClearCallBack} />
    </div>
  );
}

export default App;

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 10000000000; i++) {
//     num += 1;
//   }
//   console.log("Calculating completed...");
//   return num;
// };

const expensiveCalculationMemo = (num) => {
  console.log("Calculating Memo...");
  for (let i = 0; i < 10000000000; i++) {
    num += 1;
  }
  console.log("Calculating completed...");
  return num;
};

//!  React'in useCallback Hook'unu React'in useMemo Hook'u ile karıştırmayalım. useCallback, işlevleri hafızaya almak için kullanılırken, useMemo, değerleri hafızaya almak için kullanılır.

//?  React'in useCallback Hook'unu React'in memo API'si ile karıştırmayalım. useCallback, işlevleri not almak için kullanılırken, React memo, yeniden oluşturmaları önlemek için React bileşenlerini sarmak için kullanılır.

//*  React'in useRef Hook'unu React'in useState hooku ile karıştırmayalım. useRef, component’in tekrar render olmasını tetiklemez, useState, bir değişken değiştiğinde useState component’in tekrar render olmasını tetikler.
