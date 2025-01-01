import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Bikes from "./Bikes";
import Navbar from "./Navbar";
import Login from "./Login";
import { useEffect, useState } from "react";
import Spla from "./Spla";
import Accessories from "./Accessories";
import TestDrive from "./TestDrive";

const App = () => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    },20000)
  })
  return (
    <>
  
      {/* <TestDrive/> */}
      {show?<Spla/>:<div> <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Bikes" element={<Bikes></Bikes>} />
        <Route path="/Services" element={<Services></Services>} />
        <Route path="/About" element={<About></About>} />
        <Route path="/Login" element={<Login></Login>} />
        <Route path="/Accessories" element={<Accessories></Accessories>} />
      </Routes></div>}
     
    </>
  );
};

export default App;
