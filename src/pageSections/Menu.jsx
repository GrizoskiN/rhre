import Image from "next/image";
import logo from "@/../public/img/logo.png";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="max-w-[1400px] w-2/3 absolute top-5 left-1/2 -translate-x-1/2 flex justify-between items-center">
      <Image src={logo} width={150} height="auto" />
      <div className="flex items-center uppercase font-[400] mt-4">
        <Link href="/" className="lg:mx-5">
          About Us
        </Link>
        <Link href="/" className="lg:mx-5">
          Services
        </Link>
        <Link href="/" className="lg:mx-5">
          Projects for sales
        </Link>
        <Link href="/" className="lg:mx-5">
          News
        </Link>
        <Link href="/" className="lg:mx-5 border-[1px] px-11 py-3 rounded-md">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Menu;
