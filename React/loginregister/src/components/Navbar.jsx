import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="relative flex items-center justify-between border-b border-white/10 bg-[#080817]/95 px-5 py-4 text-white shadow-lg shadow-blue-950/20 backdrop-blur-xl sm:px-10">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
            <span className="text-xl font-bold text-white">✦</span>
          </div>

          <h2 className="text-xl font-bold tracking-wide">
            <span className="text-white">Glow</span>
            <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">Space</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <Link to={"/"} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-blue-500/10 hover:text-cyan-300">
            Home
          </Link>

          <Link to={"/register"} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-purple-500/10 hover:text-purple-300">
            Register
          </Link>

          <Link to={"/login"} className="rounded-lg border border-blue-400/30 bg-gradient-to-r from-blue-500/15 to-purple-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 transition duration-200 hover:border-purple-400/60 hover:shadow-md hover:shadow-purple-500/10">
            Login <span className="ml-1">↗</span>
          </Link>
        </div>

      </div>
    </>
  )
}

export default Navbar