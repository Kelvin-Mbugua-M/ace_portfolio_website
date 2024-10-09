import React from "react";
import { BiPhoneIncoming } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaLocationPin, FaTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
const ContactInformation = () => {
  return (
    <div className="h-auto w-full">
      <article className="text-slate-400 text-sm italic font-thin text-balance flex text-pretty">
        We are Ace Developers, based in Allsops, Nairobi, specializing in
        delivering innovative and efficient software solutions alongside
        exceptional service. Our dedicated team is committed to providing
        top-quality services tailored to meet your unique needs. For inquiries
        or to discuss how we can assist you, please reach out via the contact
        details provided.
      </article>
      <div className="mt-4 mb-3">
        <p>
          <article className="text-slate-400 text-xl">Get in touch</article>
          <p className="flex ml-4 items-center">
            <span className="text-blue-800 mr-3 ml-2"><FaFacebookF/></span>
            <article className=" text-blue-800 hover:text-blue-500">@Facebook</article>
          </p>
          <p className="flex ml-4 items-center">
            <span className="text-blue-800 mr-3 ml-2"><FaLinkedinIn/></span>
            <article className=" text-blue-800 hover:text-blue-500">@Linked in</article>
          </p>
          <p className="flex ml-4 items-center">
            <span className=" text-gray-500 mr-3 ml-2"><FaTwitter/></span>
            <article className=" text-gray-800 hover:text-gray-500">@Twitter</article>
          </p>
          <p className="flex ml-4 items-center">
            <span className=" text-gray-500 mr-3 ml-2"><FaGithub/></span>
            <article className=" text-gray-800 hover:text-gray-500">@Github</article>
          </p>
        </p>
        <p className="w-auto h-auto">
          <article className="text-teal-700 mr-2 text-xl">Calls or text</article>
          <p>
            <p className="flex ml-4 items-center mr-3"> 
              <span className="text-teal-700 text-sm mr-3 ml-2"><BiPhoneIncoming />
                </span>             
                
                <span className="text-teal-700 text-sm hover:text-teal-400 mt-2">+254 790 845 067</span>
              
            </p>
            <p className="flex ml-4 items-center mr-3">
              <span className="text-teal-700 text-sm mr-3 ml-2">
                <BiPhoneIncoming />
              </span>
              
              <span className="text-teal-700 text-sm hover:text-teal-400 mt-2">+254 790 845 067</span>
            </p>
          </p>
        </p>
        <p>
          <article className="text-red-300">Email address</article>
          <p className="flex items-center ml-4">
            <span className=" ml-2 mr-3 text-pink-300"><TfiEmail/></span>
            <span className="text-pink-300 hover:text-pink-600">email@gmail.com</span>
          </p>
         <p className="flex items-center ml-4">
            <span className=" ml-2 mr-3 text-pink-300"><TfiEmail/></span>
            <span className="text-pink-300 hover:text-pink-600">email@gmail.com</span>
          </p>
         <p className="flex items-center ml-4">
            <span className=" ml-2 mr-3 text-pink-300"><TfiEmail/></span>
            <span className="text-pink-300 hover:text-pink-600">email@gmail.com</span>
          </p>
          <p>
            <article className="text-slate-400 text-xl">Find us</article>
            <p className="flex items-center">
              <span className="text-slate-400 mr-2 ml-4"><FaLocationPin/></span>
              <span className="text-slate-400 hover:text-slate-200">Allsops-Ruaraka Nairobi Kenya</span>
            </p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default ContactInformation;
