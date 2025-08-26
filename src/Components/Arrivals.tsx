import { arrivals } from "../data"
import { Heart, ShoppingCart } from "lucide-react"

const Arrivals = () => {
  return (
    <div className="w-full flex flex-col gap-8 xl:px-[120px] pl-5 pr-8 pt-8 pb-10">
      <h2 className="text-dark font-light text-[35px]">New Arrivals</h2>

      {/* Items */}
      <div className="w-full flex md:flex-row flex-col items-center justify-between gap-12">
        {arrivals.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 w-full xl:w-1/3">
            {/* Image wrapper with hover effect */}
            <div className="relative group overflow-hidden rounded-lg shadow-md w-full h-[400px]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-3 bg-white rounded-full shadow transition transform hover:scale-110 hover:bg-gray-200">
                  <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors duration-300" />
                </button>
                <button className="p-3 bg-white rounded-full shadow transition transform hover:scale-110 hover:bg-gray-200">
                  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-green-600 transition-colors duration-100" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-[20px] leading-tight">
              <span className="text-dark font-normal">{item.title}</span>
              <span className="text-light font-light">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Arrivals
