import React from "react";
import { profileData } from ".";
import girl from "../files/indoor-shot-attractive-dark-skinned-girl-with-toothy-smile.png";
const Team = () => {
  return (
    <>
      <div className="h-auto w-full flex flex-col items-center">
        {profileData.map((element, index) => (
          <div className="h-96 w-full flex items-center justify-evenly max-md:w-screen max-md:flex-col" key={index}>
            <div className="h-auto w-[48%] transparent rounded md">
              <img
                src = {element.data.image}
                className="w-full h-auto outline-none margin-none rounded-md max-md:h-auto"
              />
            </div>
            <div className="h-auto w-[48%] bg-transparent flex flex-col pr-4 hover:shadow-sm max-md:w-screen">
              <article className="text-xl bg-gray-600 text-sans p-2 pl-4">
                Name:{element.data.name}
              </article>
              <article className="text-xl bg-gray-600 text-sans p-2 pl-4">
                Title:{element.data.title}
              </article>
              <article className="text-xl bg-gray-600 text-sans p-2 pl-4">
                Experience:{element.data.experience}
              </article>
              <div className="flex flex-wrap p-4 gap-3 text-xl bg-gray-600 text-sans">
                {element.data.strengths.map((item, key) => (
                  <div key={key} className="text-5xl flex flex-wrap text-trans hover:text-teal-400 hover:shadow-sm hover:shadow-teal-300 ">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;
