const Presentation = ({array}) => {
    console.log((array));
    
  return (
    <div>
      {array.map((e,i)=>(
        <p key={i+1}>{e}</p>
      ))}
    </div>
  )
}

export default Presentation
