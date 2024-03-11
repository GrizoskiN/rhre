import Image from "next/image"
import header from "@/../public/img/header.webp"
const HeaderSection = () => {
  return (
    <div className="">
      <Image src={header}/>
    </div>
  )
}

export default HeaderSection
