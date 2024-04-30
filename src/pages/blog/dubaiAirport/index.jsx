import Image from "next/image";
import gift from "@../../../public/img/blog/maktoum.jpeg"
import article2 from "@../../../public/img/blog/article4.webp"

const index = () => {
  return (
    <div className="w-11/12 max-w-[800px] text-royal m-auto mt-32 md:mt-48">
        <h1 className="text-2xl md:text-5xl font-bold md:text-center">All Dubai International Airport operations will move to Al Maktoum International Airport</h1>
        <p className="md:text-center mt-2 md:mt-11 text-lg italics">April 30, 2024</p>
        <Image src={gift} width={800} className="rounded-md my-6 lg:my-16"/>
      <p className="font-light text-lg">
      
The Dubai Ruler approved the designs for the new passenger terminal at Al Maktoum International Airport. Over the next ten years, operations at Dubai International Airport will gradually shift to the new airport
      </p>

      {/* <h3 className="font-semibold text-2xl mb-3 mt-5">Regulations:</h3> */}
      <p className="font-light text-lg">As part of the Dubai Aviation Corporation’s strategy, construction of the terminal will begin immediately, with an estimated cost of Dh128 billion. The airport will feature 400 aircraft gates and five parallel runways within a total area of ​​70 square kilometres.

After completion, it will be five times the current Dubai International Airport (DXB). The new airport will also use technologies never used in the aviation sector.</p>

      {/* <h3 className="font-semibold text-2xl mb-3 mt-5">Fees:</h3> */}
      <p className="font-light text-lg">Making the announcement on social media platform X, Sheikh Mohammed bin Rashid Al Maktoum, Vice-President, Prime Minister of the UAE and Ruler of Dubai, said, "Al Maktoum International Airport will be the largest in the world with a final capacity of up to 260 million passengers."

In his post, the Dubai Ruler wrote: "We are preparing for a new phase in the growth of the global aviation sector. We are preparing for a phase in which Dubai leads the international aviation sector for the next forty years."</p>
      <Image src={article2} width={800} className="rounded-md my-6 lg:my-16"/>

      {/* <h3 className="font-semibold text-2xl mb-3 mt-5">Procedure:</h3> */}
      <p className="text-lg font-light ">An entire airport city is being planned in Dubai South, which will raise the demand for housing for one million people. The premium location will house the most important companies in the world in the logistics and air transport sectors.

Sheikh Mohammed wrote: "We are building a new project for generations, ensuring continuous and stable development for our children so that Dubai will be the world’s airport, port, urban metropolis, and new cultural centre.</p>
      <h3 className="font-semibold text-2xl mb-3 mt-5">Economic benefits</h3>
      <p className="text-lg">Khalifa Al Zaffin, executive chairman of Dubai Aviation City Corporation, said the airport will generate estimated workforce and residential requirement for over a million people living and working in Dubai South “which has been under development and operation since 2007”.

AMI first opened in 2010 for cargo operations followed by passenger flights in 2013. It will contribute to mitigate environmental emissions.</p>
      {/* <p className="text-lg font-light mt-4">If you need further assistance or have any questions, feel free to contact us.</p> */}
      
    </div>
  );
};

export default index;
