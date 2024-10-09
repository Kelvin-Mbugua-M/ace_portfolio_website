import React from "react";
import { useLocation } from "react-router-dom";
import { ContactInformation, Overview, Projects, Services, Team } from ".";
const Details = () => {
  const location = useLocation();
  let children;
  if (location.pathname === "/home/developers") {
    return (children = <Team />);
  } else if (location.pathname === "/home/projects") {
    return (children = <Projects />);
  } else if (location.pathname === "/home/services") {
    return (children = <Services />);
  } else if (location.pathname === "/home/contact") {
    return (children = <ContactInformation />);
  } else if (location.pathname === "/home/overview") {
    return (children = <Overview />);
  } else if (location.pathname === "/") {
    return (children = <Team />);
  } else return (children = <Team/>);
  return <>{children}</>;
};

export default Details;
