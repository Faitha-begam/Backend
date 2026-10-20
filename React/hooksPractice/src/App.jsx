import customHookPractice from "./hooks/customHookPractice"

const App = () => {
  const {start,increament,decreament,reset} = customHookPractice(10,20)
  return (
    <>
    <h3>{start}</h3>
    <button onClick={increament}>Increse</button>
    <button onClick={decreament}>Decrese</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App