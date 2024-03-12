import Image from "next/image";
import zaid from "@/../public/img/zaid_rhre.png";

const SeventhSection = () => {
  return (
    <div className="w-11/12 max-w-[1400px] m-auto my-16 lg:my-32 text-center">
      <p className="text-2xl lg:text-3xl font-light text-center italic">
        "Welcome to our real estate agency, where we believe that{" "}
        <span className="font-semibold">finding your dream property</span>{" "}
        should be an exciting and fulfilling experience. With a passion for
        excellence and a commitment to integrity, we strive to provide our
        clients with exceptional service and unparalleled expertise. Whether
        you're{" "}
        <span className="font-semibold"> buying, selling, or leasing</span>, our
        team is dedicated to helping you achieve your real estate goals. We look
        forward to serving you and making your real estate journey in Dubai a
        successful one."
      </p>
      <div className="mt-11 flex flex-col items-center justify-center ">
        <Image src={zaid} width={100} className="" />
        <h1 className="text-2xl font-bold">Mohammad Zaid </h1>
        <h3 className="">Founder & CEO</h3>
      </div>
    </div>
  );
};

export default SeventhSection;
