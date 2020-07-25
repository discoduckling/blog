import React from "react";
import NavBar from "../components/styled-components/NavBar";

export default {
  title: "NavBar",
  component: NavBar
};

export const NavbarHome = () => <NavBar selected={"Home"} />;
export const NavbarBlog = () => <NavBar selected={"Blog"} />;
export const NavbarProjects = () => <NavBar selected={"Projects"} />;
export const NavbarWorkflow = () => <NavBar selected={"How To's"} />;
