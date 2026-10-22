import { useState } from "react"
import Creator from "../createcontext/NameCreator"

const NameProvider = ({children}) => {

  const [name,setName] = useState("faitha")

  const handleChange=()=>{
    setName("jothi")
  }

  return (
   <>
   <Creator.Provider value={{name, handleChange}}>
     {children}
   </Creator.Provider>
   </>
  )
}

export default NameProvider