import React from "react";
import { sdlcData } from "../data";
import { FaUserCircle } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
const Star = ({ value }) => {
  let children = [];
  for (let i = 0; i < value; i++) {
    children.push(
      <>
        <BsStar className="text-yellow-400 mr-1" />{" "}
      </>
    );
  }
  return (
    <article className="flex">
      {children.map((element, value) => (
        <div key={value}>{element}</div>
      ))}
    </article>
  );
};
const Overview = () => {
  return (
    <div className="w-full h-auto">
      <div className="h-auto w-full bg-transparent">
        <article className="text-2xl text-slate-200 font-bold text-balance pl-1">
          About us
        </article>
        <article className="pl-2 text-slate-100 text-balance font-light text-sm">
          {sdlcData.aboutUs.welcomeMessage}
        </article>
        <article className="pl-2 text-slate-100 text-balance text-sm font-normal mb-4">
          {sdlcData.aboutUs.description}
        </article>
        {sdlcData.aboutUs.phases.map((element, value) => (
          <div
            key={value}
            className="w-[90%] place-self-center mt-1 mb-1 rounded-md shadow-md hover:shadow-teal-300 pb-2"
          >
            <article className="pl-1 text-slate-100 text-balance text-xl font-bold mb-1 mt-1 ml-1">
              {element.phase}
            </article>

            <article className="pl-2 text-slate-100 text-balance text-sm ml-2 mb-2">
              {element.description}
            </article>
          </div>
        ))}
        <article className="text-normal text-slate-200 text-balance mt-4">
          {sdlcData.aboutUs.commitment}
        </article>
        <div className="w-full mt-5">
          {sdlcData.customerReviews.map((element, index) => (
            <div
              className="w-auto flex flex-row items-center pt-2 pb-1 shadow hover:shadow-teal-300"
              key={index}
            >
              <div className="h-auto p-2 w-auto">
                {" "}
                <FaUserCircle className="h-32 w-auto bg-transparent text-teal-400/40 hover:text-teal-300" />
              </div>
              <div className="w-auto h-full">
                <article className="text-xl text-gray-400 hover:text-teal-400 text-balance font-serif">
                  {element.name}
                </article>
                <article>
                  <Star value={element.star} />
                </article>
                <article className="text-sm text-gray-400 hover:text-teal-400 text-balance font-sans">
                  {element.review}
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
