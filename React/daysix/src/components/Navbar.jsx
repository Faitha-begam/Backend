const Navbar = ({toggle}) => {
  return (
    <>
      <div className="bg-black text-white p-4 flex justify-evenly ">
        <div>
            Toggle
        </div>
        <div className="flex gap-10">
            <a href="/">hide</a>
            <a href="/">show</a>
            <a href="/">on </a>
            <a href="/">off</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
