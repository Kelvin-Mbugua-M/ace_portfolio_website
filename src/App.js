import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink ,useParams } from "react-router-dom";
import { About, Contact ,Footer } from "./components";

const staleRoutes =
  "text-slate-100 pl-4 pr-5 no-underline ml-4 capitalize h-full  items-center border-b-4 border-transparent rounded-sm transition-all max-md:pl-1 max-md:pr-1";
const activeRoutes =
  "text-slate-100 pl-4 pr-5 no-underline ml-4 capitalize h-full items-center border-b-4 border-b-colorDon transition-all rounded-sm max-md:pl-1 max-md:pr-1";
const App = () => {
  const {page} = useParams()
  return (
    <div className="bg-gray-950 w-screen min-h-screen overflow-x-hidden flex flex-col flex-wrap">
      <BrowserRouter>
        <div className="w-screen h-12 bg-transparent flex justify-center items-center mt-4" id="thisElement">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={({ isActive }) =>
              isActive ? activeRoutes : staleRoutes
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="w-screen h-auto">
         <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/home" element={<About />} />
          <Route exact path="/home/:page" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
        </Routes> 
        </div>
       
      </BrowserRouter>
      
    </div>
  );
};

export default App;
export { activeRoutes, staleRoutes };
