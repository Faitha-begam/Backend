import CreateName from "../creactecontext/CreateName"


const NameProvider = ({children}) => {
    const user = {name: "Bala", role: "Frontend Developer"}
  return (
    <>
    <CreateName.Provider value={user}>
        {children}
    </CreateName.Provider>
    </>
  )
}

export default NameProvider