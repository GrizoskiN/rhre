import Image from "next/image";
import Link from "next/link";

export default function AllProjects({ project }) {
  const pin = (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.22469 15.3181C7.70511 13.4654 11.0815 8.97506 11.0815 6.45286C11.0815 3.3939 8.59971 0.912109 5.54075 0.912109C2.48179 0.912109 0 3.3939 0 6.45286C0 8.97506 3.3764 13.4654 4.85682 15.3181C5.21177 15.7596 5.86973 15.7596 6.22469 15.3181ZM5.54075 4.60594C6.03058 4.60594 6.50036 4.80053 6.84672 5.14689C7.19308 5.49326 7.38767 5.96303 7.38767 6.45286C7.38767 6.94269 7.19308 7.41246 6.84672 7.75883C6.50036 8.10519 6.03058 8.29978 5.54075 8.29978C5.05092 8.29978 4.58115 8.10519 4.23478 7.75883C3.88842 7.41246 3.69383 6.94269 3.69383 6.45286C3.69383 5.96303 3.88842 5.49326 4.23478 5.14689C4.58115 4.80053 5.05092 4.60594 5.54075 4.60594Z"
        fill="#0F2034"
      />
    </svg>
  );

  return (
    <div className="my-32 w-11/12 max-w-[1200px] m-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      {project.map((item) => (
        <div key={item.id} className="my-6">
          <Link href={`/${item.link}`} className=""><Image src={item.image} width={500} height={300} quality={100} className=""/></Link>
          <h1 className="font-semibold text-2xl mt-4">{item.title}</h1>
          <h3 className="text-gray-400 text-lg ">{item.subtitle}</h3>
          <div className="flex bg-royal p-1 max-w-[300px] justify-between rounded-lg my-2">
            <p className="bg-white w-1/2 rounded-md flex items-center justify-center">
              Starting Price
            </p>
            <p className="text-center text-white font-bold w-1/2 text-xl">
              {item.price}
            </p>
          </div>
          <h4 className="flex items-center">
            <span className="mr-2">{pin}</span>
            {item.address}
          </h4>
          <p className="my-5 text-[#36363E]">{item.text}</p>
          <Link href={`/${item.link}`} className="border-[1px] border-royal px-11 py-2 rounded-xl hover:bg-royal hover:text-white transition-all duration-300">
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
}
