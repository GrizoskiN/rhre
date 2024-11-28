import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Popup from './../../pages/Popup';
import { PhoneNumberUtil } from 'google-libphonenumber';

const schema = yup
  .object({
    name: yup.string().required(),
    lastName: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string(),
    selectedProject: yup.string(),
    notes: yup.string(),
    range: yup.string(),
  })
  .required();

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid = (phone) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};

const ContactForm = () => {
  const router = useRouter();
  const contactPage = router.pathname === "/contact";
  const [phone, setPhone] = useState('');
  const isValid = isPhoneValid(phone);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [range, setRange] = useState(1000000);

  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const developers = {
    emaar: [
      { name: 'Emaar Seapoint', value: 'emaar-seapoint', urlValue: 'seapoint' },
      { name: 'Emaar Club Drive', value: 'emaar-club-drive', urlValue: 'clubDrive' },
      { name: 'Emaar Bayview', value: 'emaar-bayview', urlValue: 'bayview' },
      { name: 'Emaar Mangrove', value: 'emaar-mangrove', urlValue: 'mangrove' },
      { name: 'Emaar Valo', value: 'emaar-valo', urlValue: 'valo' },
      { name: 'Emaar Oria', value: 'emaar-oria', urlValue: 'oria' }
    ],
    ellington: [
      { name: 'One Riverpoint', value: 'one-riverpoint', urlValue: 'oneriver' },
    ],
    danube: [
      { name: 'Danube Bayz 101', value: 'bayz', urlValue: 'bayz' },
      { name: 'Danube Sportz', value: 'sportz', urlValue: 'sportz' },
      { name: 'Danube Diamondz', value: 'diamondz', urlValue: 'diamondz' }
    ],
    sobha: [
      { name: 'Sobha Riverside Crescent', value: 'riverside', urlValue: 'riverside' },
      { name: 'Sobha Reserve', value: 'reserve', urlValue: 'reserve' },
      { name: 'Sobha Sea Heaven', value: 'seaheven', urlValue: 'seaheaven' },
      { name: 'Sobha Verde', value: 'verde', urlValue: 'verde' },
      { name: 'Sobha One', value: 'sobhaone', urlValue: 'one' },
      { name: 'Sobha Orbis', value: 'orbis', urlValue: 'orbis' },
      { name: 'Sobha Elwood', value: 'elwood', urlValue: 'elwood' },
      { name: 'Sobha Siniya Island', value: 'siniya-island', urlValue: 'siniya-island' },
      { name: 'Sobha Skyvue Solair', value: 'SkyvueSolair', urlValue: 'SkyvueSolair' },
     
    ],
    damac: [
    { name: 'Damac Lagoons', value: 'lagoons', urlValue: 'lagoons' },
    { name: 'Damac Hills 2 - Violet', value: 'hills-2-violet', urlValue: 'violet' },
    { name: 'Damac Hills - Autograph Collection', value: 'hills-autograph-collection', urlValue: 'autograph' },
    { name: 'Canal Heights', value: 'canal-heights', urlValue: 'heights' },
    { name: 'Canal Heights 2', value: 'canal-heights-2', urlValue: 'heights-2' },
    { name: 'Canal Crown', value: 'canal-crown', urlValue: 'crown' },
    { name: 'Altitude', value: 'altitude', urlValue: 'altitude' },,
    ],
    arada: [
      { name: 'Armani Beach', value: 'armani', urlValue: 'armani' },
    ],
    meraas: [
      { name: 'Acres', value: 'acres', urlValue: 'acres' },
      { name: 'Acres Estates', value: 'acres-estates', urlValue: 'acres-estates' },
    ]
  };
  

  const handleDeveloperChange = (e) => {
    setSelectedDeveloper(e.target.value);
    setSelectedProject('');
  };


  useEffect(() => {
    const initializeStateFromUrl = () => {
      const url = router.asPath;
      const pathParts = url.split('/');
  
   
  
      if (pathParts.length >= 3) {
        const developer = pathParts[1].toLowerCase();
        const project = pathParts[2].toLowerCase();
  
      
        if (developers[developer]) {
          setSelectedDeveloper(developer);
          const foundProject = developers[developer].find(p => p.urlValue.toLowerCase() === project);
          if (foundProject) {
            setSelectedProject(foundProject.value);
            
          }
        }
      }
    };
  
    initializeStateFromUrl();
  }, [router.asPath]);
  
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const submitHandler = async (data) => {
    const httpResponse = await fetch("/api/hello", {
      method: "post",
      body: JSON.stringify({ ...data, phone, selectedProject, range }),
    });
    reset();
    router.push({
      pathname: "/Popup",
      query: { name: data.name },
    });
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <h1
        className={
          "w-11/12   m-auto text-4xl lg:text-6xl font-semibold text-royal"
        }>
        Drop us a message
      </h1>
      <form
        className="w-11/12 m-auto overflow-hidden py-11  mb-32 lg:mt-16  "
        onSubmit={handleSubmit(submitHandler)}>
        <div className={`w-full   m-auto `}>
          <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">
            <input
              type="text"
              placeholder={errors.name ? "Please Enter your Name" : "Your Name"}
              {...register("name", { required: true })}
              className={`w-full text-royal  p-3 border-b-2 border-b-royal bg-transparent  ${
                errors.name
                  ? "text-red-500   outline-none"
                  : " outline-none text-royal "
              }`}
            />

            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className={`w-full   p-3 border-b-2 border-b-royal bg-transparent ${
                errors.lastName
                  ? "border-red-500 placeholder-royal outline-none"
                  : "border-white outline-none text-royal "
              }`}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">
            <input
              type="email"
              placeholder="Email*"
              {...register("email", {
                required: true,
                pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/",
              })}
              className={`w-full mb-5 p-3 border-b-2 border-b-royal bg-transparent ${
                errors.email
                  ? "border-red-500 placeholder-royal outline-none"
                  : "border-white outline-none text-royal "
              }`}
            />

        
         <div  className="border-royal border-b-2 px-3 mb-2  focus:outline-none focus:ring w-full flex items-end justify-between">
         <PhoneInput
          className="  "
           
           placeholder="Enter phone number"
         defaultCountry="ae"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        />
        {!isValid && <div className="text-[9px] md:text-sm  text-red-500 mb-2 text-center">Phone number is not valid</div>}
         </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">
          <select
  value={selectedProject}
  onChange={(e) => setSelectedProject(e.target.value)}
  className="block appearance-none w-full bg-white border-b-2 border-b-royal text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
>
  <option value="">Select Project ↓</option>
  {Object.entries(developers).map(([developer, projects]) => (
    <optgroup label={developer} key={developer} className="capitalize">
      {projects.map((project) => (
        <option key={project.value} value={project.value} >
          {project.name}
        </option>
      ))}
    </optgroup>
  ))}
</select>




        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
            </div>
            
          <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">
            <textarea
              type="textarea"
              {...register("notes")}
              placeholder="Notes"
              rows="10"
              cols="30"
              className={`w-full mb-5 max-h-32 p-3 border-b-2 border-b-royal bg-transparent ${
                errors.company
                  ? "border-red-500 placeholder-royal outline-none"
                  : "border-white outline-none text-royal "
              }`}></textarea>
          </div>

          <button   className="w-full lg:w-1/3 m-auto h-16 bg-royal hover:bg-royal/80 text-white rounded-xl ">
            Submit
          </button>
        </div>
        {isPopupOpen && (
          <Popup
            isOpen={isPopupOpen}
            onClose={closePopup}
           
          />
        )}
      </form>
    </>
  );
};

export default ContactForm;
