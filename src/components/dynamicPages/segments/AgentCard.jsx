import React from 'react'
import Image from 'next/image';
import Zaid from "@/../public/img/zaid.webp"

import Contact from './Contact';
const AgentCard = ({project}) => {


const convertedPrice = parseFloat(project.price).toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
      })
const phone = <svg className="w-5 h-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.8205 11.1426L11.1203 9.34186C10.7777 9.11518 10.3184 9.18976 10.065 9.51325L9.2785 10.5245C9.17742 10.6578 8.99367 10.6965 8.84744 10.6152L8.69783 10.5328C8.20186 10.2624 7.58474 9.92586 6.34137 8.68204C5.098 7.43823 4.76076 6.82064 4.49042 6.32558L4.40838 6.17597C4.32603 6.02977 4.36396 5.84524 4.4973 5.74335L5.5079 4.95706C5.83125 4.70371 5.90594 4.24452 5.67952 3.90175L3.87883 1.2016C3.64679 0.852554 3.18124 0.747774 2.82201 0.963717L1.6929 1.64197C1.33813 1.85054 1.07785 2.18833 0.966633 2.58455C0.560043 4.06601 0.865917 6.62278 4.63227 10.3896C7.62833 13.3854 9.85875 14.191 11.3918 14.191C11.7446 14.1926 12.096 14.1467 12.4366 14.0546C12.8329 13.9435 13.1708 13.6832 13.3792 13.3283L14.0582 12.1999C14.2744 11.8406 14.1697 11.3747 13.8205 11.1426ZM13.6751 11.9718L12.9977 13.1009C12.8481 13.357 12.6051 13.5453 12.3197 13.6264C10.952 14.0019 8.56267 13.6909 4.94682 10.075C1.33097 6.45918 1.01999 4.07002 1.39547 2.70218C1.47665 2.41644 1.66521 2.17314 1.92166 2.02324L3.05077 1.34587C3.20664 1.25208 3.4087 1.29754 3.50939 1.44901L4.48755 2.91757L5.30855 4.14893C5.40687 4.29761 5.37456 4.49688 5.2343 4.6069L4.22347 5.39319C3.91585 5.62841 3.828 6.05402 4.0174 6.39181L4.09766 6.53764C4.38178 7.05873 4.73502 7.70698 6.02463 8.99638C7.31425 10.2858 7.96228 10.639 8.48314 10.9231L8.62918 11.0036C8.96694 11.193 9.39258 11.1051 9.6278 10.7975L10.4141 9.78669C10.5241 9.6465 10.7233 9.61423 10.8721 9.71244L13.572 11.5131C13.7236 11.6137 13.769 11.8159 13.6751 11.9718Z" fill="#0F2034"/>
<path d="M8.39027 3.07741C10.4765 3.07973 12.1672 4.77041 12.1695 6.85666C12.1695 6.97944 12.269 7.07896 12.3918 7.07896C12.5146 7.07896 12.6141 6.97944 12.6141 6.85666C12.6115 4.52495 10.722 2.63537 8.39027 2.63281C8.26749 2.63281 8.16797 2.73233 8.16797 2.85511C8.16797 2.97789 8.26749 3.07741 8.39027 3.07741Z" fill="#0F2034"/>
<path d="M8.39027 4.41335C9.74017 4.41494 10.8341 5.50885 10.8357 6.85875C10.8357 6.98153 10.9352 7.08105 11.058 7.08105C11.1807 7.08105 11.2803 6.98153 11.2803 6.85875C11.2784 5.26339 9.9856 3.97057 8.39027 3.96875C8.26749 3.96875 8.16797 4.06827 8.16797 4.19105C8.16797 4.31383 8.26749 4.41335 8.39027 4.41335Z" fill="#0F2034"/>
<path d="M8.39027 5.74147C9.00384 5.7422 9.50106 6.23943 9.50182 6.85302C9.50182 6.97581 9.60136 7.07532 9.72412 7.07532C9.84687 7.07532 9.94642 6.97581 9.94642 6.85302C9.94543 5.99399 9.2493 5.29784 8.39027 5.29688C8.26749 5.29688 8.16797 5.39639 8.16797 5.51917C8.16797 5.64196 8.26749 5.74147 8.39027 5.74147Z" fill="#0F2034"/>
</svg>
const whatsapp = <svg  className="w-5 h-5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.44527 11.2302H9.15247C6.18506 11.2302 3.77148 8.81672 3.77148 5.84931V5.55651C3.77148 5.05008 3.96935 4.57135 4.32938 4.21526L4.59054 3.9541C4.99809 3.54655 5.71027 3.54655 6.11783 3.9541L6.93676 4.77304C7.14251 4.97879 7.25333 5.24783 7.25333 5.53669C7.25333 5.8216 7.13857 6.09853 6.93676 6.30033L6.86165 6.37545C6.70331 6.53378 6.6202 6.73953 6.6202 6.96105C6.6202 7.18267 6.70725 7.39236 6.86165 7.54665L7.45514 8.14013C7.60942 8.29441 7.82305 8.38146 8.04062 8.38146C8.25831 8.38146 8.47194 8.29441 8.62622 8.14013L8.70145 8.0649C9.10889 7.65746 9.82107 7.65746 10.2286 8.0649L11.0477 8.88395C11.2534 9.0897 11.3641 9.35874 11.3641 9.6476C11.3641 9.93634 11.2534 10.2094 11.0477 10.4111L10.7865 10.6723C10.4304 11.0323 9.95565 11.2302 9.44527 11.2302ZM5.35418 4.26661C5.23549 4.26661 5.12073 4.31414 5.03762 4.39725L4.77646 4.6584C4.53907 4.89579 4.40461 5.21618 4.40461 5.55257V5.84537C4.40461 8.46457 6.53327 10.5932 9.15247 10.5932H9.44527C9.78154 10.5932 10.102 10.4626 10.3394 10.2213L10.6006 9.9601C10.6836 9.87699 10.7311 9.76235 10.7311 9.64366C10.7311 9.52496 10.6836 9.41021 10.6006 9.3271L9.78548 8.51198C9.61532 8.34194 9.32264 8.34194 9.15247 8.51198L9.07724 8.58721C8.80821 8.85625 8.42835 9.01447 8.04456 9.01447C7.65289 9.01447 7.28497 8.86413 7.01199 8.58721L6.41851 7.99373C6.14147 7.71681 5.99113 7.34878 5.99113 6.96105C5.99113 6.56937 6.14147 6.20146 6.41851 5.92836L6.49362 5.85325C6.57673 5.77014 6.62426 5.65538 6.62426 5.53669C6.62426 5.41799 6.57673 5.30323 6.49362 5.22012L5.67063 4.39725C5.58763 4.31414 5.47288 4.26661 5.35418 4.26661Z" fill="#48AF6B"/>
<path d="M0.835938 14.1663L1.60747 10.3719C1.15238 9.45004 0.922873 8.46094 0.922873 7.42826C0.922873 3.76454 3.90617 0.78125 7.56988 0.78125C11.2337 0.78125 14.2169 3.76454 14.2169 7.42826C14.2169 11.092 11.2337 14.0753 7.56988 14.0753C6.53731 14.0753 5.5481 13.8458 4.63017 13.3908L0.835938 14.1663ZM4.72116 12.7261L4.82016 12.7775C5.67479 13.2167 6.6006 13.4423 7.56988 13.4423C10.8855 13.4423 13.5839 10.7439 13.5839 7.42826C13.5839 4.11264 10.8855 1.41426 7.56988 1.41426C4.25438 1.41426 1.556 4.11264 1.556 7.42826C1.556 8.39765 1.77751 9.32346 2.22065 10.1781L2.27212 10.277L1.64699 13.3513L4.72116 12.7261Z" fill="#48AF6B"/>
</svg>

  return (
    <div className="w-full fixed bottom-0 left-0 lg:sticky  lg:top-0 z-10" >
      <h1 className="hidden lg:block bg-Blue text-white text-xl lg:text-2xl text-center rounded-t-2xl lg:w-3/4 m-auto lg:py-2 shadow-md "> {convertedPrice} AED</h1>
      <div className="bg-white w-full rounded-md shadow-md py-2 lg:py-5  ">
        <div className="flex items-center w-10/12 m-auto justify-between lg:justify-around">
            <Image src={Zaid} width={100} height={100} className=" w-[60px] lg:w-1/3"/>
            <div className="">
            <h1 className="bg-Blue lg:hidden text-white text-xl lg:text-2xl text-center w-full m-auto px-5 py-2 rounded-md shadow-md ">Price: {convertedPrice} AED</h1>
                <h4 className="bg-Blue text-white w-fit px-2 rounded-sm hidden lg:flex">Agent</h4>
                <h1 className="text-royal text-center lg:text-left xl:text-2xl font-semibold">Mohammad Zaid</h1>
                <h3 className="leading-3 lg:mt-3 text-sm text-center lg:text-left mt-0 lg:text-lg  text-royal hidden xl:flex">Founder & CEO</h3>
                <p className="text-gray-500 font-light text-sm hidden xl:flex">Rise High Real Esate</p>
            </div>
        </div>
        <div className="buttons flex justify-between w-10/12 m-auto gap-1 mt-2 lg:my-5">
            <a href="tel:+971529992763" className="flex items-center w-1/2 border-[1px] border-royal text-royal justify-center rounded-md text-md py-2 hover:cursor-pointer">
                <span className="mr-3">{phone}</span> Call Me</a>
            <a href="https://wa.me/971529992763" className="flex items-center w-1/2 border-[1px] border-Green text-Green justify-center rounded-md text-md py-2">
                <span className="mr-3">{whatsapp}</span>WhatsApp</a>
        </div>
        <div className="w-10/12 m-auto hidden lg:flex flex-col">
            <h1 className="text-2xl">Schedule a visit</h1>
            <Contact/>
            <p className="text-sm font-light text-center">Mohammad usually responds within 15 minutes</p>
        </div>
      </div>
    </div>
  )
}

export default AgentCard
