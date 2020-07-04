import React from "react";
import { PageTitle } from "../components/styled-components/Titles";

export default {
  title: "Page Title",
  component: PageTitle
};

export const RecentPosts = () => <PageTitle text={"Recent Posts"} />;
export const Blog = () => <PageTitle text={"Blog"} />;
export const Projects = () => <PageTitle text={"Projects"} />;
