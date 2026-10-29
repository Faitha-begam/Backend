import { useState, useMemo } from "react"

const calculateDouble = (num) => {
  console.log("Calculation is running...")

  let result = 0

  for (let i = 0; i < 100000000; i++) {
    result = num * 2
  }

  return result
}

const App = () => {

  const [number, setNumber] = useState(0)
  const [theme, setTheme] = useState(true)

  const double = useMemo(() => {
    return calculateDouble(number)
  }, [number])

  return (
    <div className={theme ? "bg-white text-black min-h-screen p-10" : "bg-gray-900 text-white min-h-screen p-10"}>

      <h1 className="text-3xl font-bold mb-5">
        Number Multiplication
      </h1>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border border-gray-400 p-2 rounded mb-5 text-black"
        placeholder="Enter a number"
      />

      <h2 className="text-xl mb-5">
        Double: {double}
      </h2>

      <button
        onClick={() => setTheme(!theme)}
        className="bg-blue-600 text-white px-5 py-2 rounded"
      >
        Change Theme
      </button>

    </div>
  )
}

export default App