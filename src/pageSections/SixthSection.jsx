const SixthSection = () => {
  return (
    <div className="w-full lg:w-11/12 max-w-[1400px] m-auto py-16 p-4 lg:py-16 lg:p-11 mt-32 bg-[#E6E7E8] rounded-3xl">
      <h1 className="text-4xl mb-11 xl:mb-0 lg:text-6xl font-bold xl:w-1/2 ">
        Our Services
      </h1>
      <div className="lg:flex gap-5 lg:py-16">
        <div className="bg-white rounded-xl px-4 py-9 lg:p-9 hover:bg-royal cursor-pointer hover:text-white lg:hover:-mt-3 transition-all duration-300">
          <h1 className="font-semibold text-6xl">01</h1>
          <div className="mt-11 lg:mt-24">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5 leading-10 "><span className="text-red-500">BUYING</span> A PROPERTY</h1>
            <p className="text-xl font-light">Looking to buy a property in Dubai? Our agency offers a wide selection of luxury apartments, townhouses, villas and plots. Our experienced agents will assist you every step of the way, from property selection to closing the deal.</p>
          </div>
        </div>
        <div className="bg-white my-4 lg:my-0 rounded-xl p-9 hover:bg-royal cursor-pointer hover:text-white lg:hover:-mt-3 transition-all duration-300">
          <h1 className="font-semibold text-6xl">02</h1>
          <div className="mt-11 lg:mt-24">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5 leading-10 "><span className="text-red-500">SELLING</span> A PROPERTY</h1>
            <p className="text-xl font-light">Ready to sell your property in Dubai? Our team of professionals will help you market your property effectively to reach potential buyers. We'll handle the negotiations and paperwork, ensuring a smooth selling process.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-9 hover:bg-royal cursor-pointer hover:text-white lg:hover:-mt-3 transition-all duration-300">
          <h1 className="font-semibold text-6xl">03</h1>
          <div className="mt-11 lg:mt-24">
            <h1 className="font-bold text-4xl lg:text-5xl mb-5 leading-10 "><span className="text-red-500">LEASING</span> A PROPERTY</h1>
            <p className="text-xl font-light">Need a place to rent in Dubai? We have a diverse portfolio of rental properties, including apartments, villas, and commercial spaces. Our team will help you find the perfect rental that fits your budget and lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
