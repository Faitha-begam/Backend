import React, { useReducer } from 'react'
import TaskTwo from './TaskTwo'

const App = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'RESET':
        return 0
      default:
        return state
    }
  }

  const [btn, dispatch] = useReducer(reducer, 0)

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center gap-8 p-6">

      {/* Task 1 */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Task 1 — Counter Application</h1>

        <h2 className="mb-8 text-6xl font-bold text-indigo-600">{btn}</h2>

        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => dispatch({ type: 'INCREMENT' })} className="rounded-lg bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600">Increment</button>

          <button onClick={() => dispatch({ type: 'DECREMENT' })} className="rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600">Decrement</button>

          <button onClick={() => dispatch({ type: 'RESET' })} className="rounded-lg bg-slate-500 px-5 py-3 font-semibold text-white transition hover:bg-slate-600">Reset</button>
        </div>
      </div>

      {/* Task 2 */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        <TaskTwo />
      </div>

    </div>
  )
}

export default App