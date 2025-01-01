import React, { useContext } from 'react'
import { themeContext } from './App'
const ThemeC = () => {
    
    const { theme, setTheme } = useContext(themeContext);
    function toggleTheme() {
        if (theme === 'light') {
            setTheme("dark");
        } else {
            setTheme("light")
            }
        }
    
  return (
    <div>
          {/* {theme} */}
          <button onClick={toggleTheme}>Change Theme</button>
     
    </div>
  )
}

export default ThemeC
