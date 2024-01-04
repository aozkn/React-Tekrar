import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  console.log("deneme");
  return (
    <div className="App">
      <h1 style={{color:"red",backgroundColor:"black"}}>Hello React</h1>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
