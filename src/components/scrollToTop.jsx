// components/ScrollToTopButton.js

import Link from 'next/link';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500); // Show the button when scrolled down 100 pixels
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const phone = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="40" height="40" rx="4" fill="none"/>
  <path d="M30.3979 26.7556L25.7505 23.6563C25.1607 23.2662 24.3701 23.3945 23.9341 23.9513L22.5803 25.6919C22.4064 25.9213 22.0901 25.9878 21.8384 25.848L21.5809 25.7061C20.7272 25.2408 19.6651 24.6615 17.525 22.5207C15.3849 20.3798 14.8045 19.3168 14.3392 18.4648L14.198 18.2072C14.0562 17.9556 14.1215 17.638 14.351 17.4626L16.0904 16.1093C16.647 15.6732 16.7755 14.8829 16.3858 14.2929L13.2865 9.64544C12.8871 9.04468 12.0858 8.86433 11.4675 9.23601L9.52414 10.4034C8.91351 10.7624 8.46552 11.3438 8.2741 12.0258C7.57428 14.5756 8.10075 18.9763 14.5833 25.4596C19.7401 30.616 23.579 32.0027 26.2177 32.0027C26.825 32.0053 27.4298 31.9262 28.0161 31.7677C28.6982 31.5765 29.2797 31.1285 29.6384 30.5177L30.807 28.5755C31.1792 27.957 30.999 27.1552 30.3979 26.7556ZM30.1477 28.1828L28.9818 30.1262C28.7242 30.5671 28.306 30.8913 27.8147 31.0308C25.4608 31.6771 21.3483 31.1418 15.1247 24.9182C8.90118 18.6947 8.36593 14.5825 9.01221 12.2282C9.15193 11.7364 9.47648 11.3176 9.91788 11.0596L11.8613 9.89376C12.1296 9.73234 12.4773 9.81058 12.6506 10.0713L14.3342 12.5989L15.7473 14.7183C15.9166 14.9742 15.8609 15.3172 15.6195 15.5066L13.8797 16.8599C13.3502 17.2648 13.199 17.9973 13.525 18.5787L13.6632 18.8298C14.1522 19.7266 14.7602 20.8424 16.9798 23.0617C19.1995 25.2809 20.3149 25.889 21.2114 26.378L21.4627 26.5165C22.0441 26.8424 22.7767 26.6912 23.1815 26.1618L24.5349 24.4219C24.7243 24.1807 25.0671 24.1251 25.3231 24.2942L29.9702 27.3935C30.2311 27.5667 30.3093 27.9146 30.1477 28.1828Z" fill="white"/>
  <path d="M21.0525 12.8746C24.6434 12.8786 27.5533 15.7886 27.5573 19.3794C27.5573 19.5907 27.7286 19.762 27.9399 19.762C28.1513 19.762 28.3226 19.5907 28.3226 19.3794C28.3181 15.3661 25.0658 12.1138 21.0525 12.1094C20.8412 12.1094 20.6699 12.2807 20.6699 12.492C20.6699 12.7033 20.8412 12.8746 21.0525 12.8746Z" fill="white"/>
  <path d="M21.0525 15.1676C23.376 15.1703 25.2588 17.0531 25.2615 19.3766C25.2615 19.5879 25.4329 19.7592 25.6441 19.7592C25.8555 19.7592 26.0268 19.5879 26.0268 19.3766C26.0236 16.6307 23.7984 14.4055 21.0525 14.4023C20.8412 14.4023 20.6699 14.5736 20.6699 14.785C20.6699 14.9963 20.8412 15.1676 21.0525 15.1676Z" fill="white"/>
  <path d="M21.0525 17.4645C22.1086 17.4657 22.9644 18.3215 22.9657 19.3776C22.9657 19.589 23.1371 19.7603 23.3483 19.7603C23.5596 19.7603 23.731 19.589 23.731 19.3776C23.7293 17.8991 22.5311 16.7009 21.0525 16.6992C20.8412 16.6992 20.6699 16.8705 20.6699 17.0818C20.6699 17.2932 20.8412 17.4645 21.0525 17.4645Z" fill="white"/>
  </svg>
  
 const whatsapp = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
 <rect width="40" height="40" rx="4" fill="none"/>
 <path d="M22.7146 26H22.2132C17.1325 26 13 21.8618 13 16.7737V16.2717C13 15.4033 13.3388 14.5825 13.9552 13.9719L14.4024 13.5241C15.1002 12.8253 16.3196 12.8253 17.0174 13.5241L18.4195 14.9283C18.7718 15.2811 18.9616 15.7424 18.9616 16.2377C18.9616 16.7262 18.7651 17.201 18.4195 17.5471L18.2909 17.6759C18.0198 17.9473 17.8775 18.3001 17.8775 18.6799C17.8775 19.06 18.0266 19.4195 18.2909 19.684L19.3071 20.7017C19.5712 20.9662 19.937 21.1155 20.3095 21.1155C20.6823 21.1155 21.048 20.9662 21.3122 20.7017L21.441 20.5727C22.1386 19.8741 23.358 19.8741 24.0558 20.5727L25.4582 21.9771C25.8105 22.3298 26 22.7911 26 23.2864C26 23.7815 25.8105 24.2498 25.4582 24.5956L25.011 25.0434C24.4013 25.6607 23.5884 26 22.7146 26ZM15.7099 14.0599C15.5066 14.0599 15.3102 14.1414 15.1679 14.2839L14.7207 14.7317C14.3142 15.1388 14.084 15.6881 14.084 16.2649V16.767C14.084 21.258 17.7287 24.9079 22.2132 24.9079H22.7146C23.2903 24.9079 23.8391 24.6839 24.2456 24.2701L24.6927 23.8223C24.8348 23.6798 24.9162 23.4832 24.9162 23.2797C24.9162 23.0762 24.8348 22.8794 24.6927 22.7369L23.2971 21.3393C23.0057 21.0477 22.5046 21.0477 22.2132 21.3393L22.0844 21.4682C21.6238 21.9295 20.9734 22.2008 20.3163 22.2008C19.6457 22.2008 19.0157 21.9431 18.5483 21.4682L17.5322 20.4506C17.0579 19.9758 16.8004 19.3448 16.8004 18.6799C16.8004 18.0084 17.0579 17.3775 17.5322 16.9093L17.6608 16.7805C17.8031 16.638 17.8845 16.4412 17.8845 16.2377C17.8845 16.0342 17.8031 15.8374 17.6608 15.6949L16.2517 14.2839C16.1096 14.1414 15.9131 14.0599 15.7099 14.0599Z" fill="white"/>
 <path d="M8 31L9.32615 24.48C8.54393 22.8959 8.14943 21.1963 8.14943 19.4218C8.14943 13.1263 13.2773 8 19.5747 8C25.8723 8 31 13.1263 31 19.4218C31 25.7173 25.8723 30.8436 19.5747 30.8436C17.7999 30.8436 16.0996 30.4493 14.5218 29.6675L8 31ZM14.6782 28.5254L14.8483 28.6136C16.3173 29.3683 17.9087 29.7559 19.5747 29.7559C25.2738 29.7559 29.9119 25.1192 29.9119 19.4218C29.9119 13.7245 25.2738 9.08773 19.5747 9.08773C13.8758 9.08773 9.23769 13.7245 9.23769 19.4218C9.23769 21.0876 9.61844 22.6784 10.3801 24.147L10.4686 24.3169L9.39409 29.5996L14.6782 28.5254Z" fill="white"/>
 </svg>
 
const mail = <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="4" fill="none"/>
<path d="M17.9484 24.0633C19.0614 25.1802 20.9597 25.1558 22.0484 24.0633L24.0695 22.0354L31.5923 29.5827C31.5087 29.594 31.4237 29.5999 31.3375 29.5999H8.6593C8.573 29.5999 8.48793 29.594 8.40426 29.5827L15.9272 22.0354L17.9484 24.0633Z" stroke="white" stroke-width="0.8"/>
<path d="M16.6872 19.403C16.6863 19.4025 16.6859 19.4023 16.6862 19.4024L16.6863 19.4025L16.6867 19.4027L16.6872 19.403ZM16.6872 19.403L16.6881 19.4035L16.6882 19.4035C16.6878 19.4033 16.6875 19.4031 16.6872 19.403ZM8.40422 11.0695C8.48786 11.0582 8.57291 11.0523 8.65919 11.0523H31.3374C31.4236 11.0523 31.5086 11.0582 31.5922 11.0695L23.2594 19.4302L23.2584 19.4308L23.2172 19.4719C23.2127 19.4764 23.2084 19.4809 23.2044 19.4854L20.3408 22.3586C20.3407 22.3587 20.3407 22.3587 20.3406 22.3588C20.2827 22.4166 20.1603 22.4706 19.9983 22.4706C19.8364 22.4706 19.7139 22.4165 19.6561 22.3588C19.656 22.3587 19.656 22.3587 19.6559 22.3586L16.7936 19.4869C16.7891 19.4819 16.7844 19.4769 16.7794 19.4719C16.7751 19.4676 16.7708 19.4635 16.7666 19.4597L8.40422 11.0695Z" stroke="white" stroke-width="0.8"/>
<path d="M6.64219 13.0712C6.64219 12.9608 6.65207 12.8525 6.67079 12.7464L14.2257 20.3263L6.67077 27.9058C6.65206 27.7997 6.64219 27.6913 6.64219 27.5809V13.0712Z" stroke="white" stroke-width="0.8"/>
<path d="M33.3305 27.906L25.7757 20.3264L33.3305 12.7464C33.3493 12.8525 33.3592 12.9609 33.3592 13.0713V27.5811C33.3592 27.6915 33.3493 27.7999 33.3305 27.906Z" stroke="white" stroke-width="0.8"/>
</svg>


  return (
  <div className={`${
    isVisible ? 'opacity-100' : 'opacity-0' 
  }  transition-all fixed flex flex-col w-32 justify-center items-end bottom-8 right-8 z-40 duration-500 `}
>
  <div className="text-royal flex flex-col mb-4 gap-1 items-end">
    <a href="tel:+971529992763"  className='group flex hover:w-full bg-royal text-white items-center lg:lg:hover:px-5 rounded-sm transition-all duration-500 hover:bg-blue-600'>{phone} <span className=" hidden lg:group-hover:block">Call </span></a>
    <a href="https://wa.me/971529992763" className='group flex hover:w-full bg-royal text-white items-center lg:hover:px-5 rounded-sm transition-all duration-500 hover:bg-[#3CC04E]'>{whatsapp}<span className=" hidden lg:group-hover:block">WhatsApp </span></a>
    <Link href="/contact" className='group flex hover:w-full bg-royal text-white items-center lg:hover:px-5 rounded-sm transition-all duration-500 hover:bg-blue-600'>{mail} <span className=" hidden lg:group-hover:block">Email</span></Link>
  </div>
    <button
      onClick={scrollToTop}
      className={`  text-lg bg-royal text-white w-10 h-16  rounded-full cursor-pointer hover:bg-royal/80 `}
    >
      ↑
    </button>
  </div>
  );
};

export default ScrollToTopButton;
