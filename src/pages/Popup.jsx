import { useRouter } from "next/router";

const Popup = ({ isOpen, onClose }) => {
  const router = useRouter();
  const { name } = router.query;
  console.log({name})
  return (
    <div
      onClick={() => router.back("/")}
      className={` fixed inset-0 w-full h-full flex items-center justify-center bg-royal/80 transition-opacity duration-300 backdrop-blur-xl cursor-pointer z-20`}>
      <div className="bg-white w-full p-4 rounded shadow-md lg:w-1/4 lg:h-1/4 flex items-center justify-center flex-col z-40">
        <h2 className="text-3xl font-bold mb-2">Thank you for contacting us {name}</h2>
        <p className="text-xl">We will write/call you ASAP!</p>
        <button
         onClick={() => router.back("/")}
          className="mt-4 bg-blue-500 text-white py-3 px-16 rounded hover:bg-royal">
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
