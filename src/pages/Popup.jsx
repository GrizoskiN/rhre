import { useRouter } from "next/router";

const Popup = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { name } = router.query;
  console.log({name})
  return (
    <div
      onClick={() => router.back("/")}
      className={` fixed inset-0 w-full h-full flex items-center justify-center bg-royal/80 transition-opacity duration-300 backdrop-blur-xl cursor-pointer z-20 pt-32 md:pt-0`}>
      <div className="bg-white w-10/11 py-8 px-11 rounded shadow-md lg:w-2/3 lg:h-2/3 max-w-[800px] max-h-[400px] flex items-center text-center justify-center flex-col z-40">
        <h2 className="text-2xl lg:text-3xl font-light mb-2">Thank you for contacting us <br/><span className="font-bold">{name}</span></h2>
        <p className=" lg:text-xl">We will write/call you ASAP!</p>
        <button
         onClick={() => router.push("/")}
          className="mt-4 bg-blue-500 text-white py-3 px-16 rounded hover:bg-royal">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
