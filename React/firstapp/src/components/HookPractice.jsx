import { useState } from "react"

const HooksPractice = () => {
  const [color, setColor] = useState("white")

  return (
    <>
      <div style={{ backgroundColor: color, height: "100px" }}>
        <button onClick={() => setColor("pink")}>Change Color</button>
      </div>
    </>
  )
}

export default HooksPractice

