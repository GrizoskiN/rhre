import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Popup from "../../pages/Popup";


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
  const [isPopupOpen, setPopupOpen] = useState(false);

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
  return (
    <>
    <h1 className="w-11/12 m-auto text-4xl lg:text-6xl font-semibold text-royal">Drop as a message</h1>
      <form
        className="w-full py-11 mt-11 mb-32 lg:mt-0  "
        onSubmit={handleSubmit(submitHandler)}>
        <div className="w-11/12 m-auto ">
          <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">
            <input
              type="text"
              placeholder={errors.name ? "Please Enter your Name" : "Your Name"}
              {...register("name", { required: true })}
              className={`w-full   p-3 border-b-2 border-b-royal bg-transparent  ${
                errors.name
                  ? "border-red-500 placeholder-royal outline-none"
                  : "border-white outline-none text-royal "
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

          <input
            type="tel"
            placeholder="Phone number"
            {...register("phone")}
            className={`w-full mb-5 p-3 border-b-2 border-b-royal bg-transparent ${
              errors.phone
                ? "border-red-500 placeholder-royal outline-none"
                : "border-white outline-none text-royal "
            }`}
          />
              </div>
   
            <div className="flex flex-col lg:flex-row items-center mb-5 w-full justify-center gap-5 ">

          <input
            type="text"
            placeholder="Company Name"
            {...register("company")}
            className={`w-full mb-5  p-3 border-b-2 border-b-royal bg-transparent ${
              errors.company
                ? "border-red-500 placeholder-royal outline-none"
                : "border-white outline-none text-royal "
            }`}
          />

          <select
            name="projects"
            {...register("project")}
            className="w-full mb-5  p-3  border-b-2 border-b-royal bg-transparent text-royal overflow-hidden">
            <option className="text-black my-5" value="light">
              Please select your project
            </option>
            <option className="text-black my-5" value="Buying">
            Buying a property
            </option>
            <option className="text-black my-5" value="Selling">
            Selling a property
            </option>
            <option className="text-black my-5" value="Leasing">
            Leasing a property
            </option>
            
          </select>

            </div>

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

          <button className="w-1/3 mx-auto h-16 bg-royal text-white rounded-xl ">
            Submit
          </button>
        </div>
        {isPopupOpen && <Popup isOpen={isPopupOpen} onClose={closePopup} name={watch("name")} />}

      </form>
    </>
  );
};

export default ContactForm;
