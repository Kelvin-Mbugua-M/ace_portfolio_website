import React, { useState } from "react";
import { Footer } from ".";
import { servicesGeneral } from "../data";
import "./Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workTitle: "",
    telephone: "",
    email: "",
    organization: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="thisPoint" className="w-screen overflow-x-hidden overflow-y-auto min-h-screen flex flex-col items-center">
        <div className="w-[90%] h-auto">
          <form method="post">
            <div>
              <div className="w-full h-auto flex items-center justify-center max-md:flex-col">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="h-12 w-[38%] max-md:w-full text-gray-300 placeholder-gray-400 hover:shadow-md bg-gray-700/25 hover:shadow-teal-600 text-sm outline-none border-none rounded-sm mr-1 ml-1 pl-3"
                  maxLength="12"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="h-12 w-[38%] max-md:w-full text-gray-300 placeholder-gray-400 text-sm hover:shadow-md bg-gray-700/25 hover:shadow-teal-600 outline-none border-none rounded-sm mr-1 ml-1 pl-3"
                  maxLength="12"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="w-full h-auto flex mt-4 mb-2 items-center justify-center max-md:flex-col">
                <input
                  type="text"
                  name="workTitle"
                  placeholder="Work title"
                  className="h-12 w-[38%] max-md:w-full text-gray-300 placeholder-gray-400 text-sm hover:shadow-md bg-gray-700/25 hover:shadow-teal-600 outline-none border-none rounded-sm mr-1 ml-1 pl-3"
                  maxLength="12"
                  value={formData.workTitle}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="telephone"
                  placeholder="Telephone"
                  className="h-12 w-[38%] max-md:w-full text-gray-300 placeholder-gray-400 text-sm hover:shadow-md bg-gray-700/25 hover:shadow-teal-600 outline-none border-none rounded-sm mr-1 ml-1 pl-3"
                  maxLength="13"
                  value={formData.telephone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="w-full h-auto flex mt-2 mb-2 items-center justify-center max-md:flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="h-12 w-[77%] max-md:w-full text-gray-300 placeholder-gray-400 text-sm hover:shadow-md bg-gray-700/25 hover:shadow-teal-600 outline-none border-none rounded-sm mr-1 ml-1 pl-3"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <div className="w-full h-auto flex mt-2 mb-2 items-center justify-center max-md:flex-col">
                <input
                  type="text"
                  name="organization"
                  placeholder="Your organization name"
                  className="w-[77%] h-12 pl-4 text-gray-300 placeholder-gray-400 text-sm hover:shadow-md bg-gray-700/25 hover:shadow-teal-600 caret-amber-950 outline-none border-none rounded-sm"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="h-auto flex mt-4 mb-2 items-center justify-center flex-col">
              {servicesGeneral.map((element, index) => (
                <div className="w-[77%] h-12" key={index}>
                  <span className="h-full w-auto flex items-center hover:shadow-md hover:shadow-teal-600 pl-4 rounded-sm">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="h-4 w-4 border-none"
                    />
                    <article className="text-xl text-slate-200 ml-4">
                      {element}
                    </article>
                  </span>
                </div>
              ))}
            </div>
            <div className="w-screen overflow-x-hidden flex items-center justify-center p-2 ">
              <textarea name="" id="" cols="30" rows="10" className="w-[80%] h-auto border-none outline-none rounded-sm resize-none p-2 text-slate-200 bg-gray-800/25 text-sm"></textarea>
            </div>
            <div className="w-screen h-auto grid place-items-center mt-3 mb-2"><button className="w-64 h-12 place-self-center bg-blue-700 text-slate-200 rounded-l-full rounded-r-full"> Submit</button></div>
          </form>
        </div>
        <div className="w-[60%] flex justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
