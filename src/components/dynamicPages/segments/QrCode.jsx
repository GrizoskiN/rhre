import qrimage from "@../../../public/img/qrcode.png"
import Image from "next/image"

const QrCode = ({permit, parts}) => {
  return (
    <div className="">
      <h3 className=""><span className="font-bold">Permit Number: <a target="_blank" href={parts[4]}><Image src={qrimage} width={150} className=""/></a></span> {permit}</h3>
      {/* {parts[4] && (
  <h3 className="font-semibold text-xl my-3">DLD Permit Number:</h3>
)}

   {parts[4] && parts[4].split("-").map((item, index) => (
    <p key={index} className="first:hidden flex items-center">
      {item.trim()}
    </p>
  ))}  */}

    </div>
  )
}

export default QrCode
