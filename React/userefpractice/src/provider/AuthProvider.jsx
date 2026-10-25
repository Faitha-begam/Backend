import { useState } from "react"
import AuthContext from "../creactecontext/AuthContext"

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState({isLoggedIn: true, username: "Bala"})

    const loginCheck =()=>{
        setUserData({...userData,isLoggedIn:!userData.isLoggedIn})
    }
  return (
    <>
    <AuthContext.Provider value={{userData,loginCheck}}>
        {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthProvider