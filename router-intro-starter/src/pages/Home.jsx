import { Outlet } from "react-router";
// import About from "../components/About";
// import Courses from "../components/Courses";

const Home = () => {
  return (
    <div className="p-3">
      {/* <About /> */}
      {/* <Courses /> */}
      {/* //?Nested route yapisinda kullandigimiz child componentleri Outlet component'i ile sergiliyoruz*/}
  
      <Outlet />
    </div>
  );
};

export default Home;
