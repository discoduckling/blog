import React from "react";
import NavBar from "../components/styled-components/nav-elements/NavBox";

export default {
  title: "NavBar",
  component: NavBar
};

export const NavbarHome = () => <NavBar selected={"/"} />;
export const NavbarBlog = () => <NavBar selected={"/blog"} />;
export const NavbarProjects = () => <NavBar selected={"/projects"} />;
export const NavbarWorkflow = () => <NavBar selected={"/workflows"} />;
