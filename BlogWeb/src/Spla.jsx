import React from 'react'
import over from './assets/over.mp4'
import './App.css'
const Spla = () => {
    return (
      <>
        <div className="video-background">
          <center className="sl">
            <video autoPlay muted loop className="video">
              <source src={over} type="video/mp4"></source>
            </video>
          </center>
        </div>
      </>
    );
}

export default Spla

// onther code
// import React, { useState, useEffect } from "react";
// import over from "./assets/over.mp4";

// const Spla = () => {
//   const [showSplash, setShowSplash] = useState(true);

//   // Set a timeout for the splash screen to disappear
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 5000); // 5 seconds duration
//     return () => clearTimeout(timer); // Cleanup timeout on component unmount
//   }, []);

//   if (!showSplash) {
//     return <div>Your Next Component Here</div>;
//   }

//   return (
//     <>
//       <div className="video-background">
//         <center className="sl">
//           <video autoPlay muted>
//             <source src={over} type="video/mp4"></source>
//           </video>
//         </center>
//       </div>
//     </>
//   );
// };

// export default Spla;
