import React, { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';
import Company from './Company';
import Spla from './Spla';
import Accessories from './Accessories';


function App() {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const time = setTimeout(() => {
      setShow(false)
    },5000)
  })

  return (
    <>
      {show?<Spla/>:<div><Accessories/></div>}
      {/* <Company /> */}
      {/* <Spla/> */}
      {/* <About/> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Services/> */}
      {/* <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/Services" element={<Services></Services>} />
      </Routes> */}
    </>
  );
}

export default App
