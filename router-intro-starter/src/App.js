import About from "./components/About";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import InstructorsDetail from "./pages/InstructorsDetail";
import NotFound from "./pages/NotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home />}>
          <Route index element={<About />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/instructors/:id" element={<InstructorsDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
