import React from "react";
import { PostTitle } from "../components/styled-components/Titles";

export default {
  title: "Post Title In Overview",
  component: PostTitle
};

export const TitleForPostOverview = () => (
  <PostTitle text={"This is my most recent post"} />
);
