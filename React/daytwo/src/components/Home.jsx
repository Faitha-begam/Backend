import ProductCard from './ProductCard'

const Home = () => {
  return (
    <>
    <div>
     <section className="bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to My Website
        </h1>

        <p className="mt-3 text-gray-600">
          This is the home section of my React application.
        </p>
      </div>
    </section>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
    </>
  )
}

export default Home
