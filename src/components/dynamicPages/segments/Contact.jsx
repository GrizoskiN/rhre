import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Popup from './../../../pages/Popup';


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

const Contact = () => {
  const router = useRouter();
  const contactPage = router.pathname === '/contact';
 
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [range, setRange] = useState(500000);
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
        pathname: "./Popup",
        query: { name: data.name }, // Pass the name as a query parameter
      });
     
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
    {/* <h1 className={`"w-11/12 ${contactPage ?  "xl:w-11/12 " : "w-full"}  m-auto text-4xl lg:text-6xl font-semibold text-royal"`}>Drop as a message</h1> */}
      <form
        className="w-full pt-5 pb-3 lg:mt-0  "
        onSubmit={handleSubmit(submitHandler)}>
        <div className={`w-11/12  ${contactPage ?  "xl:w-11/12 " : "w-full"} m-auto `}>
          <div className="flex flex-col lg:flex-row items-center mb-2 w-full justify-center gap-5 ">
            <input
              type="text"
              placeholder={errors.name ? "Please Enter your Name" : "Your Name"}
              {...register("name", { required: true })}
              className={`w-full 2 p-3 border-[1px] rounded-md  bg-transparent  ${
                errors.name
                  ? "border-red-500 placeholder-royal outline-none"
                  : "border-royal outline-none text-royal "
              }`}
            />

            
          </div>
              <div className="flex flex-col  items-center mb-2 w-full justify-center  ">
              <input
            type="email"
            placeholder="Email*"
            {...register("email", {
              required: true,
              pattern: "/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/",
            })}
            className={`w-full p-3 border-[1px] rounded-md border-royal bg-transparent ${
              errors.email
                ? "border-red-500 placeholder-royal outline-none"
                : "border-royal outline-none text-royal "
            }`}
          />

              </div>
   
            <div className="flex flex-col  items-center my-2 w-full justify-center  ">
          <input
            type="tel"
            placeholder="Phone number"
            {...register("phone")}
            className={`w-full mb-2  p-3 border-[1px] rounded-md border-royal bg-transparent ${
              errors.phone
                ? "border-red-500 placeholder-royal outline-none"
                : "border-royal outline-none text-royal "
            }`}
          />

            <textarea
            type="textarea"
            {...register("notes")}
            placeholder="Notes"
            rows="10"
            cols="30"
            className={`w-full mb-2 max-h-32 p-3 border-[1px] rounded-md border-royal bg-transparent ${
              errors.company
                ? "border-red-500 placeholder-royal outline-none"
                : "border-royal outline-none text-royal "
            }`}></textarea>


            </div>


        

          <button className="w-full mx-auto py-3 bg-Blue hover:bg-royal/80 text-xl text-white rounded-md ">
          Send Email
          </button>
        </div>
        {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={closePopup} name={watch("name")} />}

      </form>
    </>
  );
};

export default Contact;
