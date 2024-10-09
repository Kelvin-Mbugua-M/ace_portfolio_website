import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-hidden">
      <hr />
      <div className="w-full  h-24 flex justify-around items-center">
        <Link to={"/home"}>
          <p className="flex flex-col justify-center items-center">
            
            <span className="text-slate-500 hover:text-teal-400 text-xl">
              <FaFacebook />
            </span>
          </p>
        </Link>
        <Link to={"/home"}>
          <p className="flex flex-col justify-center items-center">
            
            <span className="text-slate-500 hover:text-teal-400 text-xl">
              <AiFillLinkedin />
            </span>
          </p>
        </Link>
        <Link to={"/home"}>
          <p className="flex flex-col justify-center items-center">
            
            <span className="text-slate-500 hover:text-teal-400 text-xl">
              <FaGithub />
            </span>
          </p>
        </Link>
        <Link to={"/home"}>
          <p className="flex flex-col justify-center items-center">
            
            <span className="text-slate-500 hover:text-teal-400 text-xl">
              <AiOutlineMail />
            </span>
          </p>
        </Link>
        <Link to={"/home"}>
          <p className="flex flex-col justify-center items-center">
            
            <span className="text-slate-500 hover:text-teal-400 text-xl"><FaTwitter/></span>
          </p>
        </Link>
        
      </div>
      <p className="text-white text-sm font-serif mb-4 hover:text-teal-400 italic">All rights reserved</p>
      <p className="text-white text-sm font-serif mb-4 hover:text-teal-400 italic">copyright</p>
    </div>
  );
};

export default Footer;
