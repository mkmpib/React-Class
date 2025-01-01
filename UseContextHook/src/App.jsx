// import React, { createContext, useState } from 'react'
// import ChildA from './Components/ChildA';
// import MyContext from './Components/MyContext';
// // const userContext = createContext();//if you want import the user context from a sperate file
// const App = () => {
//   const[user,setUser]=useState({name:"Mohit kumar"})
  
//   return (
//     <div>
//       <>
//         <MyContext.Provider value={user}>
//           {/* ChildA se sabi componets link ho gye hai kisi me bhi consume kar skte hai kyoki ye herarchi me hai */}
//           <h1>{`Hello${user.name}`}</h1>
//           <ChildA />
//         </MyContext.Provider>
//         {/* <userContext.Provider value={user}>
//          ChildA se sabi componets link ho gye hai kisi me bhi consume kar skte hai kyoki ye herarchi me hai 
//         <ChildA />
        
//       </userContext.Provider> */}
//       </>
//     </div>
//   );
// }

// export default App
// // export {userContext}


// theme changer
import React, { createContext, useState } from 'react'
import ThemeA from './ThemeA';
import './App.css'
const themeContext = createContext();
const App = () => {
const[theme,setTheme]=useState('light')
  return (
    <div>
      <div className="container" style={{backgroundColor:theme==="light"?'beige':'black'}}>
        <themeContext.Provider value={{ theme, setTheme }}>
          <ThemeA />
        </themeContext.Provider>
      </div>
    </div>
  );
}

export default App
export {themeContext}//exporting the context so that it can be used in other files



