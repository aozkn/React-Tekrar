import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

//? SCSS styleshet'i import ettik
import "./scss/app.scss"

import data from "./data"

function App() {
  return (
    <>
      <Header />
      <Card data={data} />
      <Footer />
    </>
  )
}

export default App
