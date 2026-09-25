import Presentation from "./Presentation"

const Container = () => {

    const arr = [1,2,3,4,5]
    const title = "react"
    const obj = {arr, title}
  return (
    <>
      <Presentation array={obj}/>
    </>
  )
}

export default Container
