import { useState } from "react"
import ThemeCreator from "../creactecontext/ThemeCreator"

const ThemeProvider = ({children}) => {
    const [switchColor, setswitchColor] = useState(true)

    const handleClick =()=>{
        setswitchColor(!switchColor)
    }
  return (
    <>
    <ThemeCreator.Provider value={{switchColor,handleClick}}>
        {children}
    </ThemeCreator.Provider>
    </>
  )
}

export default ThemeProvider