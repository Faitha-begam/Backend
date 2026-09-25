const About = () => {
  return (
    <>
    <section className="bg-blue-50 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h2 className="text-2xl font-bold text-blue-700">
          About Us
        </h2>

        <p className="mt-3 text-gray-600">
          We are learning React by building reusable components.
        </p>
      </div>
      <dummy/>
    </section>
    </>
  )
}

export const dummy =()=>{
    return(
    <>
    <div>
        im dummy
    </div>
    </>
    )
}

export default About
