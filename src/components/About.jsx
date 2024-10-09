import React from "react";
import { Link, NavLink } from "react-router-dom";
import { activeRoutes, staleRoutes } from "../App";
import {Details ,Footer ,Loop} from "."
const About = () => {
  
  return (
    <div className="w-screen h-auto flex justify-center mt-4">
      <div className="w-[60%] h-[50dvh] max-md:w-screen flex flex-col">
        <h1 className="text-slate-100 w-full text-3xl text-center font-bold mb-8">
          <Loop data="Ace developers" marker="🫶"/>
        </h1>
        <div className="w-full max-md:w-screen max-md:p-2">
          <article className="text-center text-white text-3xl text-bold font-thin">
            <Loop data="Hi there" marker="👋"/>{" "}
          </article>
          <article className="text-center text-slate-400 font-serif mt-3 mb-2 text-balance ml-auto mr-auto">
            Welcome to Ace Developers, your trusted software development partner
            in <b>Allsops, Nairobi.</b> We specialize in <i>web development</i>{" "}
            ,{" "}
            <b>
              <i>mobile apps</i>
            </b>{" "}
            ,
            <b>
              {" "}
              <b>
                <i>API integrations </i>
              </b>
            </b>
            and{" "}
            <b>
              <i>custom software solutions</i>
            </b>{" "}
            tailored to your business needs. From e-commerce platforms to
            scalable software, our expert developers deliver secure,
            high-performance digital products.
          </article>
          <article className="text-center text-slate-400 text-balance mr-auto ml-auto font-serif mb-2 mt-4">
            Based in Nairobi's tech hub, we help startups and established
            businesses thrive with innovative, cutting-edge solutions. Whether
            you're looking to boost your online presence or optimize operations,
            Ace Developers is here to bring your digital vision to life.
          </article>
          <article className="text-center text-slate-400 text-wrap font-serif mt-3 mb-2">
            <Link
              to={"/contact-us"}
              className="mr-2 text=2xl font-mono text-teal-200 underline"
            >
              Contact us today
            </Link>
            for expert software development services that drive growth!
          </article>
        </div>
        <hr className="mt-4 mb-4" />
        <div className="flex h-14 justify-around max-md:w-screen">
        <NavLink
            to={"/home/overview"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Overview
          </NavLink>
          <NavLink
            to={"/home/services"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/home/contact"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Contacts
          </NavLink>
          <NavLink
            to={"/home/projects"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Projects
          </NavLink>
          
          
          
          <NavLink
            to={"/home/developers"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Team
          </NavLink>
        </div>
        <hr className="mt-4 mb-4" />
       <div className="h-auto w-full">
        <Details/>
        <Footer/>
      </div> 
      </div>
      
    </div>
  );
};

export default About;
