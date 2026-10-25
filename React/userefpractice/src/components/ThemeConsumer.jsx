import { useContext } from "react"
import ThemeCreator from "../creactecontext/ThemeCreator"

const ThemeConsumer = () => {
    const {switchColor, handleClick} = useContext(ThemeCreator)
  return (
    <>
    <button className="bg-black text-white p-2 w-50" onClick={handleClick}>{switchColor?"Dark": "Light"}</button>
    </>
  )
}

export default ThemeConsumer