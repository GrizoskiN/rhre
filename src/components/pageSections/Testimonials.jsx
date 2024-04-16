import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const quotes = <svg className="w-11 h-11 lg:w-16  lg:h-16" width="428" height="416" viewBox="0 0 428 416" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M406 0C417.776 0 427.333 9.55733 427.333 21.3333V320C427.333 331.776 417.776 341.333 406 341.333H95.7065L0.666504 416V21.3333C0.666504 9.55733 10.2238 0 21.9998 0H406ZM191.856 108.8L182.32 94.1227C144.197 110.656 118 144.107 118 181.44C118 202.667 123.909 215.765 134.896 227.435C141.808 234.773 152.752 240 164.208 240C184.816 240 201.541 223.275 201.541 202.667C201.541 183.04 186.373 167.232 167.109 165.44C163.696 165.12 160.197 165.184 156.891 165.653V163.691C157.019 154.688 158.853 128.853 187.909 111.083L191.856 108.8ZM288.987 94.1227C250.864 110.656 224.667 144.107 224.667 181.44C224.667 202.667 230.576 215.765 241.563 227.435C248.475 234.773 259.419 240 270.875 240C291.483 240 308.208 223.275 308.208 202.667C308.208 183.04 293.04 167.232 273.776 165.44C270.363 165.12 266.864 165.184 263.557 165.653C263.557 158.976 262.939 128.064 298.523 108.8L288.987 94.1227Z" fill="url(#paint0_linear_400_19)"/>
  <defs>
  <linearGradient id="paint0_linear_400_19" x1="214" y1="-41.6" x2="214" y2="457.6" gradientUnits="userSpaceOnUse">
  <stop stop-color="#225AC5"/>
  <stop offset="0.979167" stop-color="#8CADEB"/>
  </linearGradient>
  </defs>
  </svg>
  
  return (
    <div className="overflow-x-hidden my-32 w-full px-8 m-auto text-royal flex flex-col items-center justify-center">
      <h1 className="text-royal font-bold text-4xl lg:text-6xl mb-11 lg:mb-24 text-center lg:w-2/4 xl:w-1/3">What our clients say about us</h1>
      <Carousel   opts={{
        align: "start",
        loop: "true",
      }} className="w-10/12 max-w-[1000px] m-auto  ">
        <CarouselPrevious className="lg:h-16 lg:w-16"/>
        <CarouselContent className="my-5 md:m-11  lg:text-2xl font-light  ">
          <CarouselItem className="relative text-royal  text-justify shadow-md rounded-md py-6 mx-2 lg:mx-5 px-5  lg:px-32 ">
            <span className="absolute z-40 -top-5 right-5 lg:-top-11 lg:left-11">{quotes}</span>
            <p className="mb-3">⭐⭐⭐⭐⭐</p>
          <p>Mohammed and the Rise High Real Estate team are simply outstanding! Their knowledge of the Dubai real estate market is unmatched, and their dedication to finding the perfect property for me was truly impressive. I highly recommend them to anyone looking to buy or sell property in Dubai.</p>
          <h4 className="my-4 font-semibold">Sarah T.</h4>
          </CarouselItem>
          <CarouselItem className="relative text-royal  text-justify shadow-md rounded-md py-6 mx-2 lg:mx-5 px-5 lg:px-32">
            <span className="absolute z-40 -top-5 right-5 lg:-top-11 lg:left-11">{quotes}</span>
            <p className="mb-3">⭐⭐⭐⭐⭐</p>
          <p>Working with Mohammed and the Rise High Real Estate team was a breeze! From start to finish, they were professional, attentive, and always had my best interests at heart. Thanks to their expertise, I found my dream home in Dubai in no time. I couldn't be happier!</p>
          <h4 className="my-4 font-semibold">Ahmed K.</h4>
          </CarouselItem>
          <CarouselItem className="relative text-royal  text-justify shadow-md rounded-md py-6 mx-2 lg:mx-5 px-5 lg:px-32">
            <span className="absolute z-40 -top-5 right-5 lg:-top-11 lg:left-11">{quotes}</span>
            <p className="mb-3">⭐⭐⭐⭐⭐</p>
          <p>I can't thank Mohammed and Rise High Real Estate enough for their exceptional service. They made the entire process of selling my property in Dubai seamless and stress-free. Their market knowledge and negotiation skills are top-notch. Highly recommended!</p>
          <h4 className="my-4 font-semibold">Fatima R.</h4>
          </CarouselItem>
          <CarouselItem className="relative text-royal  text-justify shadow-md rounded-md py-6 mx-2 lg:mx-5 px-5 lg:px-32">
            <span className="absolute z-40 -top-5 right-5 lg:-top-11 lg:left-11">{quotes}</span>
            <p className="mb-3">⭐⭐⭐⭐⭐</p>
          <p>Mohammed and the Rise High Real Estate team are the best in the business! Their commitment to excellence and personalized approach made me feel confident and supported throughout my property search in Dubai. I wouldn't trust anyone else with my real estate needs.</p>
          <h4 className="my-4 font-semibold">Ali M.</h4>
          </CarouselItem>
     
         
        </CarouselContent>
        <CarouselNext className="lg:h-16 lg:w-16"/>
      </Carousel>
    </div>
  );
};

export default Testimonials;
