import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
//! CSS DOSYALARI DOGRUDAN IMPORT EDILIR EXPORT ETMEYE GEREK YOK
import "./App.css";
function App() {
  console.log("deneme");
  return (
    <div className="App">
      <h1 style={{ color: "red", backgroundColor: "black" }}>Hello React</h1>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
