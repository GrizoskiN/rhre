import Image from "next/image";
import contactImg from "@/../public/img/contact.webp";
import contactImg1 from "@/../public/img/contact1.jpg";
import ContactForm from "@/components/contact/ContactForm";

const contact = () => {
  return (
    <>
      <div className="h-[50vh] overflow-hidden relative object-bottom flex items-center justify-center">
        <h1 className="font-bold text-4xl lg:text-7xl text-white z-20">
          Contact Us
        </h1>
        <div className="absolute z-10 bg-royal/70 w-full h-full top-0 left-0"></div>
        <Image
          src={contactImg}
          className="w-full absolute z-0 left-0 bottom-0 object-cover "
        />
      </div>
      <div className="w-full lg:w-11/12 ml-auto py-16  lg:mt-32 lg:flex justify-between">
        <div className="w-full flex flex-col ">
          <div className="w-11/12 m-auto flex flex-col md:flex-row  mb-16">
            <div className=" flex items-center lg:items-start  2xl:flex-col">
              <span className="mr-5 2xl:mr-0">
                <svg
                  className="w-14 h-14 md:w-16 md:h-16 "
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8391 17.9277C19.6558 18.422 18.9281 18.8319 18.3477 18.9517C17.9507 19.0324 17.432 19.0968 15.686 18.4056C13.4527 17.5222 12.0145 15.3554 11.9024 15.2148C11.7951 15.0742 11 14.0675 11 13.0262C11 11.985 11.5538 11.478 11.777 11.2603C11.9604 11.0816 12.2634 11 12.5541 11C12.6481 11 12.7327 11.0045 12.8087 11.0082C13.0319 11.0172 13.144 11.0299 13.2912 11.3664C13.4746 11.7882 13.921 12.8294 13.9742 12.9364C14.0284 13.0435 14.0825 13.1886 14.0065 13.3292C13.9353 13.4743 13.8726 13.5387 13.7605 13.662C13.6484 13.7854 13.542 13.8797 13.4299 14.0121C13.3273 14.1273 13.2114 14.2507 13.3406 14.4638C13.4698 14.6724 13.9163 15.3681 14.5737 15.9268C15.4219 16.6479 16.1097 16.8783 16.3557 16.9762C16.5391 17.0488 16.7575 17.0315 16.8915 16.8955C17.0615 16.7204 17.2715 16.4302 17.4852 16.1445C17.6372 15.9395 17.8291 15.9141 18.0305 15.9867C18.2356 16.0547 19.3214 16.5672 19.5447 16.6733C19.7679 16.7803 19.9151 16.8311 19.9693 16.9209C20.0225 17.0107 20.0225 17.4324 19.8391 17.9277Z"
                    fill="#0F2034"
                  />
                  <path
                    d="M30.5 15C30.5 22.9928 23.7999 29.5 15.5 29.5C7.20015 29.5 0.5 22.9928 0.5 15C0.5 7.0072 7.20015 0.5 15.5 0.5C23.7999 0.5 30.5 7.0072 30.5 15Z"
                    stroke="#202441"
                  />
                </svg>
              </span>
              <div className="pl:16">
                <h3 className="font-bold text-2xl lg:text-5xl 2xl:my-5 ">
                  Phone
                </h3>
                <p className="text-2xl">00971 52999 2763</p>
              </div>
            </div>
            <div className="md:ml-16 lg::ml-32 flex items-center lg:items-start mt-5 md:mt-0 2xl:flex-col">
              <span className="mr-5 2xl:mr-0">
                <svg
                  className="w-14 h-14 md:w-16 md:h-16 "
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.7677 15.7617L15.8929 16.6394C15.5382 16.9954 14.9141 17.0031 14.5517 16.6394L13.6769 15.7617L10.535 18.9138C10.652 18.9678 10.7809 19.0001 10.918 19.0001H19.5266C19.6637 19.0001 19.7926 18.9679 19.9095 18.9138L16.7677 15.7617Z"
                    fill="#0F2034"
                  />
                  <path
                    d="M19.5265 11.6562H10.918C10.7809 11.6562 10.6519 11.6885 10.535 11.7426L13.8923 15.111C13.8925 15.1112 13.8928 15.1113 13.893 15.1115C13.8933 15.1117 13.8933 15.112 13.8933 15.112L14.9849 16.2073C15.1009 16.3232 15.3437 16.3232 15.4596 16.2073L16.551 15.1122C16.551 15.1122 16.5513 15.1117 16.5515 15.1115C16.5515 15.1115 16.552 15.1112 16.5522 15.111L19.9094 11.7426C19.7925 11.6885 19.6636 11.6562 19.5265 11.6562Z"
                    fill="#0F2034"
                  />
                  <path
                    d="M10.0976 12.1704C10.0371 12.2928 10 12.4286 10 12.5741V18.0819C10 18.2274 10.0371 18.3632 10.0976 18.4856L13.2449 15.3281L10.0976 12.1704Z"
                    fill="#0F2034"
                  />
                  <path
                    d="M20.347 12.1704L17.1997 15.3281L20.347 18.4857C20.4075 18.3633 20.4446 18.2275 20.4446 18.082V12.5741C20.4446 12.4286 20.4075 12.2928 20.347 12.1704Z"
                    fill="#0F2034"
                  />
                  <path
                    d="M30.5 15C30.5 22.9928 23.7999 29.5 15.5 29.5C7.20015 29.5 0.5 22.9928 0.5 15C0.5 7.0072 7.20015 0.5 15.5 0.5C23.7999 0.5 30.5 7.0072 30.5 15Z"
                    stroke="#202441"
                  />
                </svg>
              </span>
              <div className="pl:16">
               
                <h3 className="font-bold text-2xl lg:text-5xl  2xl:my-5">
                  Email
                </h3>
                <p className="text-2xl">zaid@risehighrealestate.ae</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <Image
          src={contactImg1}
          width={800}
          alt="Rise High Real Estate - Contact, Dubai, UAE"
          className="object-cover rounded-2xl hidden 2xl:flex"
        />
      </div>
    </>
  );
};

export default contact;
