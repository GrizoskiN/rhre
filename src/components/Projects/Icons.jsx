import img1 from "@/../public/img/sobha/icons/1.png";
import img2 from "@/../public/img/sobha/icons/2.png";
import img3 from "@/../public/img/sobha/icons/3.png";
import img4 from "@/../public/img/sobha/icons/4.png";
import img5 from "@/../public/img/sobha/icons/5.png";
import img6 from "@/../public/img/sobha/icons/6.png";
import img7 from "@/../public/img/sobha/icons/7.png";
import img8 from "@/../public/img/sobha/icons/8.png";
import img9 from "@/../public/img/sobha/icons/9.png";
import img10 from "@/../public/img/sobha/icons/10.png";
import Image from "next/image"
const Icons = () => {
  const allIcons = [
    {
      id: 0,
      image: img1,
      title: "ras al khor wildlife sanctuary",
      minutes: "5",
    },
    { id: 1, image: img2, title: <p>meydan <br/> race course</p>, minutes: "10" },
    {
      id: 2,
      image: img3,
      title: "sobha hartland & 2 international schools",
      minutes: "10",
    },
    { id: 3, image: img4, title: "dubai international airport", minutes: "12" },
    {
      id: 4,
      image: img5,
      title: "business bay",
      minutes: "12",
    },
    {
      id: 5,
      image: img6,
      title: <p>the dubai <br/> mall</p>,
      minutes: "15",
    },
    {
      id: 6,
      image: img7,
      title: "Burj Khalifa & downtown dubai",
      minutes: "15",
    },
    {
      id: 7,
      image: img8,
      title: <p>dubai <br/> frame</p>,
      minutes: "15",
    },
    {
      id: 8,
      image: img9,
      title: <p>dubai <br/> opera</p>,
      minutes: "15",
    },
    {
      id: 9,
      image: img10,
      title: <p>palm <br/> jumeirah</p>,
      minutes: "12",
    },
  ];
  const clock = <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_201_2097)">
  <path d="M12.5346 10.4093C12.2922 10.229 11.9497 10.2793 11.7694 10.5216C11.6702 10.6549 11.5642 10.7856 11.454 10.9102C11.254 11.1365 11.2753 11.4821 11.5015 11.6821C11.6056 11.7741 11.7348 11.8193 11.8635 11.8193C12.0148 11.8193 12.1654 11.7569 12.2735 11.6346C12.4039 11.4871 12.5295 11.3323 12.6469 11.1744C12.8272 10.9321 12.7769 10.5895 12.5346 10.4093Z" fill="#0F2034"/>
  <path d="M13.4492 7.84453C13.1543 7.7803 12.8628 7.96747 12.7985 8.26257C12.7632 8.42491 12.7205 8.58755 12.6715 8.74603C12.5823 9.03462 12.744 9.34081 13.0325 9.42998C13.0863 9.44658 13.1407 9.45448 13.1942 9.45448C13.4277 9.45448 13.6439 9.30371 13.7165 9.06888C13.7746 8.88081 13.8253 8.68779 13.8673 8.49521C13.9315 8.20011 13.7443 7.90879 13.4492 7.84453Z" fill="#0F2034"/>
  <path d="M9.90203 12.1607C9.75683 12.2417 9.60649 12.3174 9.45523 12.3858C9.17996 12.5101 9.0576 12.834 9.1819 13.1093C9.27323 13.3115 9.47226 13.4312 9.68062 13.4312C9.75587 13.4312 9.83235 13.4156 9.90539 13.3826C10.0848 13.3015 10.2631 13.2117 10.4352 13.1156C10.699 12.9684 10.7934 12.6352 10.6461 12.3715C10.4989 12.1079 10.1658 12.0134 9.90203 12.1607Z" fill="#0F2034"/>
  <path d="M6.45313 2.625V6.77348L4.44776 8.77882C4.23421 8.9924 4.23421 9.33866 4.44776 9.55221C4.55457 9.65902 4.69449 9.71239 4.83449 9.71239C4.97443 9.71239 5.1144 9.65899 5.22121 9.55221L7.38673 7.3867C7.48926 7.28416 7.54688 7.14503 7.54688 7V2.625C7.54688 2.32296 7.30204 2.07812 7 2.07812C6.69796 2.07812 6.45313 2.32296 6.45313 2.625Z" fill="#0F2034"/>
  <path d="M13.4531 1.17578C13.1511 1.17578 12.9062 1.42062 12.9062 1.72266V3.24122C11.6333 1.24491 9.41038 0 7 0C5.13023 0 3.37239 0.728137 2.05023 2.05023C0.728137 3.37239 0 5.13023 0 7C0 8.86977 0.728137 10.6276 2.05023 11.9498C3.37239 13.2719 5.13023 14 7 14C7.00462 14 7.00908 13.9994 7.01367 13.9993C7.01827 13.9994 7.02272 14 7.02734 14C7.22444 14 7.42347 13.9917 7.61898 13.9753C7.91995 13.9501 8.14352 13.6857 8.11833 13.3847C8.09309 13.0838 7.82904 12.8601 7.52771 12.8854C7.36244 12.8992 7.19411 12.9062 7.02734 12.9062C7.02272 12.9062 7.01827 12.9068 7.01367 12.9069C7.00908 12.9068 7.00462 12.9062 7 12.9062C3.74328 12.9062 1.09375 10.2567 1.09375 7C1.09375 3.74328 3.74328 1.09375 7 1.09375C9.09885 1.09375 11.0293 2.21246 12.0842 3.99219H10.5805C10.2784 3.99219 10.0336 4.23702 10.0336 4.53906C10.0336 4.8411 10.2784 5.08594 10.5805 5.08594H12.25C12.583 5.08594 12.8946 4.99234 13.1599 4.83019C13.177 4.82046 13.1934 4.80998 13.209 4.79869C13.685 4.48558 14 3.94699 14 3.33594V1.72266C14 1.42062 13.7552 1.17578 13.4531 1.17578Z" fill="#0F2034"/>
  </g>
  <defs>
  <clipPath id="clip0_201_2097">
  <rect width="14" height="14" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  
  return <div className="w-11/12 max-w-[1300px] m-auto my-16 lg:my-32 grid grid-cols-2  lg:grid-cols-5 gap-5">
    {allIcons.map(({id, image, title, minutes}) =>(

        <div key={id} className="my-5  flex flex-col items-center">
            <Image src={image}  alt={title} className="h-11 object-contain"/>
            <div className="mt-4 text-center flex flex-col justify-between ">
                <h1 className="font-bold text-lg capitalize text-royal leading-6 ">{title}</h1>
                <p className="flex items-center justify-center text-xl mt-3"><span className="mr-3">{clock}</span>{minutes} minutes</p>
            </div>
        </div>

    )
    )}
  </div>;
};

export default Icons;
