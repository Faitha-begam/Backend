import { useReducer } from "react"

const TaskTwo = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return state + action.payload

            case 'DECREMENT':
                return state - action.payload

            case 'RESET':
                return 10

            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer, 10)

    return (
        <div className="w-full rounded-xl bg-white p-6 text-center">

            <h1 className="mb-6 text-2xl font-bold text-slate-800">Task 2 — Increment by Custom Value</h1>

            <h2 className="mb-6 text-5xl font-bold text-indigo-600">{count}</h2>

            <div className="flex flex-wrap justify-center gap-3">

                <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })} className="rounded-lg bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600">Increase by 5</button>

                <button onClick={() => dispatch({ type: 'DECREMENT', payload: 2 })} className="rounded-lg bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600">Decrease by 2</button>

                <button onClick={() => dispatch({ type: 'RESET' })} className="rounded-lg bg-slate-500 px-4 py-3 font-semibold text-white transition hover:bg-slate-600">Reset</button>

            </div>
        </div>
    )
}

export default TaskTwo