import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [showUser, setShowUser] = useState({})
  const navigate = useNavigate()

  const userData=()=>{
    const getData = JSON.parse(localStorage.getItem("userIsActive"))
    if(!getData){
      alert("Please Login or Register!")
      navigate("/login")
      return
    }
    setShowUser(getData)
  }

  useEffect(()=>{
    userData()
  },[])
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-12 sm:px-10">
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">Personal Dashboard</p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Welcome Back!</h1>
            <p className="mt-3 text-slate-400">Here's your personal account overview.</p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-2xl text-blue-300 shadow-lg shadow-blue-950/30">
            ✦
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-black/10 backdrop-blur-xl md:col-span-2">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-bold text-white shadow-lg shadow-blue-900/40">
                {showUser.name ? showUser.name.charAt(0).toUpperCase() : "U"}
              </div>
              <div>
                <p className="text-sm text-slate-400">Signed in as</p>
                <h2 className="mt-1 text-2xl font-bold text-white">{showUser.name}</h2>
              </div>
            </div>

            <div className="h-px bg-white/10"></div>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Account Information</p>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 sm:flex-row sm:items-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                  ✉
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-400">Email Address</p>
                  <h3 className="mt-1 break-all font-medium text-slate-100">{showUser.email}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 p-7 shadow-2xl shadow-black/10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/10 text-2xl text-blue-300">
                ✓
              </div>
              <h2 className="text-xl font-bold text-white">Account Active</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">You're signed in and ready to explore your dashboard.</p>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-xs uppercase tracking-widest text-slate-400">Account Status</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
                <span className="font-semibold text-emerald-300">Logged In</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
          <p className="text-sm leading-6 text-slate-400">
            <span className="font-semibold text-slate-200">Your space, your account.</span> Manage your account details and enjoy your personalized experience.
          </p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home