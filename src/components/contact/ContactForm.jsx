import React, { useState } from "react";
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
  const handleForm = (e) => {
    e.preventDefault();
  };
 

 
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [selectedProject, setSelectedProject] = useState('');

  const developers = {
    Emaar: [
      { name: 'Emaar Seapoint', value: 'emaar-seapoint' },
      { name: 'Emaar Club Drive', value: 'emaar-club-drive' },
      { name: 'Emaar Bayview', value: 'emaar-bayview' },
      { name: 'Emaar Mangrove', value: 'emaar-mangrove' },
      { name: 'Emaar Valo', value: 'emaar-valo' },
      { name: 'Emaar Oria', value: 'emaar-oria' }
    ],
    Ellington: [
      { name: "One Riverpoint", value: 'One-riverpoint' },
    ],
    Danube: [
      { name: "Danube Bayz 101", value: 'Bayz' },
      { name: "Danube Sportz",value: 'Sportz'  },
      { name: "Danube Diamondz",value: 'Diamondz'  }
    ],
    Sobha: [
      { name: "Sobha Riverside Crescent",value: 'Riverside' },
      { name: "Sobha Reserve",value: 'Reserve'  },
      { name: "Sobha Sea Heaven",value: 'SeaHeven'  },
      { name: "Sobha Verde" ,value: 'Verde'},
      { name: "Sobha One", value: 'SobhaOne' },
      { name: "Sobha Orbis", value: 'Orbis' },
      { name: "Sobha Skyscape ", value: 'Skyscape' },
    ],
    Damac: [
      { name: 'Damac Lagoons ', value: 'Lagoons ' },
      { name: 'Damac Hills 2 - Violet ', value: 'Hills 2 - Violet ' },
      { name: 'Damac Hills - Autograph Collection ', value: 'Hills - Autograph Collection ' },
    
    ],
    Arada: [
      { name: 'Armani Beach', value: 'Armani' },
    
    ]
  };

  const handleDeveloperChange = (e) => {
    setSelectedDeveloper(e.target.value);
    setSelectedProject('');
  };
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
      body: JSON.stringify({...data, phone, selectedProject, range }),
    });
    reset();
    router.push({
      pathname: "/Popup",
      query: { name: data.name }, // Pass the name as a query parameter
    })
  };
  const closePopup = () => {
    // Close the popup
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
        Drop as a message
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
           required 
           placeholder="Enter phone number"
         defaultCountry="ae"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        />
        {!isValid && <div className="text-red-500 mb-2">Phone is not valid</div>}
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
    <optgroup label={developer} key={developer}>
      {projects.map((project) => (
        <option key={project.value} value={project.value}>
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
          <div className="flex flex-col w-full h-full mb-24 ">
            <label htmlFor="name" className="text-royal  text-xl mt-5 relative">
              What is your budget?
            </label>

            <div className="w-full lg:w-[75%]  flex flex-col xl:flex-row justify-between mt-5 items-center">
              <div className=" w-full   ">
                <div className="relative w-full flex justify-between  ">
                  <label className="text-royal"> AED 500k </label>
                  <input
                    type="range"
                    min="500000"
                    max="100000000"
                    className="w-3/4 accent-royal"
                    {...register("budget")}
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                  />

                  <label className="text-royal"> AED 100M </label>
                  <span className="absolute top-7 left-2/4 -translate-x-3/4 text-royal">
                    AED {formatNumberWithCommas(range)}
                  </span>
                </div>
              </div>

              <div className="mt-11 xl:mt-0 text-center lg:w-1/3">
                <input
                  type="checkbox"
                  id="budget"
                  name="budget"
                  {...register("checkbox")}
                  value="I don't know my budget"
                  className="hidden peer"
                  // defaultChecked={true}
                />
                <label
                  htmlFor="budget"
                  id="budget"
                  className=" w-full  border-[1px] border-Green hover:bg-[#262538] text-royal hover:text-white  cursor-pointer peer-checked:bg-red-500 peer-checked:text-white transition-all duration-800 ease-in-out p-3 text-sm ">
                  I don't know my budget
                </label>
              </div>
            </div>
          </div>

          <button  disabled={!isValid} className="w-full lg:w-1/3 m-auto h-16 bg-royal hover:bg-royal/80 text-white rounded-xl ">
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
