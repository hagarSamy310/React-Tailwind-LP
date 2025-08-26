import storyImg from "../assets/alex-gruber-Fv7X2bAA3BE-unsplash.jpg"

const OurStory = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={storyImg}
            alt="Our Story"
            className="w-full mt-16 max-w-md rounded-2xl shadow-lg shadow-gray-400 transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold uppercase text-gray-800 mb-4">
            Our Story
          </h2>

          {/* Divider */}
          <div className="w-46 h-1 bg-gray-800 mb-6 mx-auto md:mx-0"></div>

          {/* Content */}
          <p className="text-lg  text-gray-600 leading-relaxed mb-4">
            Founded with a passion for <span className="font-semibold">timeless design</span> and comfort,
            we create furniture that blends modern elegance with everyday functionality.
          </p>

          <p className="text-lg  text-gray-600 leading-relaxed mb-4">
            Each piece is <span className="font-semibold">crafted with care</span>, ensuring durability and style
            that lasts for generations.
          </p>

          <p className="text-lg  text-gray-600 leading-relaxed mb-4">
            What began as a small workshop has now grown into a <span className="font-semibold">trusted brand</span> for homes worldwide.
          </p>

          <p className="text-lg  text-gray-600 leading-relaxed">
            Our mission is simple: bring beauty, comfort, and <span className="font-semibold">inspiration</span> into every living space.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurStory
