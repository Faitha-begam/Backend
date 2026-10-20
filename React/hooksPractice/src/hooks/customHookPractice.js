import { useState } from "react"

const customHookPractice = (first=0,second=10) => {
    const [start, setStart] = useState(first)

    const increament=()=>{
       setStart((p)=>p+second)
    }
    const decreament=()=>{
        setStart((p)=>p-second)
    }
    const reset=()=>{
        setStart(first)
    }

    return {start,increament,decreament,reset}

}

export default customHookPractice