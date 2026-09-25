import { dummy } from "./About"
const ProductCard = () => {
  return (
<>
   <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">
        Wireless Headphones
      </h2>

      <p className="mt-2 text-lg font-bold text-green-600">
        Price: ₹2,499
      </p>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        View Product
      </button>
     
    </div>
 <dummy/>
</>
  )
}

export default ProductCard
