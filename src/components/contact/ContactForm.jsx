import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Popup from './../../pages/Popup';
const schema = yup
  .object({
    name: yup.string().required(),
    lastName: yup.string(),
    email: yup.string().email().required(),
    phone: yup.string(),
    company: yup.string(),
    project: yup.string(),
    notes: yup.string(),
  })
  .required();

const ContactForm = () => {
  const router = useRouter();
  const contactPage = router.pathname === "/contact";

  const [phone, setPhone] = useState('');

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [range, setRange] = useState(1000000);
  const handleForm = (e) => {
    e.preventDefault();
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
      body: JSON.stringify(data),
    });
    reset();
    router.push({
      pathname: "/Popup",
      query: { name: data.name }, // Pass the name as a query parameter
    })
  };;
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
                errors.company
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

        
          <PhoneInput
          className="border-royal border-b-2 px-3 mb-2  focus:outline-none focus:ring w-full  "
        defaultCountry="ae"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
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

          <button className="w-full lg:w-1/3 m-auto h-16 bg-royal hover:bg-royal/80 text-white rounded-xl ">
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
