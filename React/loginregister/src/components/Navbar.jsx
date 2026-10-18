import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-blue-400">
          Logo
        </div>

        <div className="flex gap-8 items-center">
          <Link to={"/"} className="hover:text-blue-400 transition">Home</Link>
          <Link to={"/register"} className="hover:text-blue-400 transition">Register</Link>
          <Link to={"/login"} className="hover:text-blue-400 transition">Login</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar