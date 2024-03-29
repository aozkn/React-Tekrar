import React from "../pages/React";
import Home from "../pages/Home";
import Path from "../pages/Path";
import People from "../pages/People";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import PersonDetail from "../pages/PersonDetail";
import Nav from "../components/Nav";
import Fullstack from "../pages/Fullstack";
import Aws from "../pages/Aws";
import NextJs from "../pages/NextJs";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import { useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState(false);
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/path" element={<Path />}>
          <Route path="fullstack" element={<Fullstack />}>
            <Route index element={<React />} />
            <Route path="nextjs" element={<NextJs />} />
          </Route>
          <Route index element={<Fullstack />} />
          <Route path="aws" element={<Aws />} />
        </Route>
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default AppRouter;
