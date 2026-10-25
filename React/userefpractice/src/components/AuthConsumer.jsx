import { useContext } from "react"
import AuthContext from "../creactecontext/AuthContext"

const AuthConsumer = () => {
    const {userData, loginCheck} = useContext(AuthContext)
  return (
    <>
    <h2>{userData.isLoggedIn?"Welcome Bala":"Please Login"}</h2>
    <button className="bg-black text-white p-2 w-50" onClick={loginCheck}>{userData.isLoggedIn?"Logout":"Login"}</button>
    </>
  )
}

export default AuthConsumer