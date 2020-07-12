import OverviewLayout from "./OverviewLayout";
import { SubTitle } from "../styled-components/Titles";
import React from "react";

const BlogPostLayout = frontMatter => {
  return ({ children: content }) => {
    return (
      <OverviewLayout pageTitle={frontMatter.title}>
        <div style={{ display: "flex" }}>
          <SubTitle text={frontMatter.date} />
        </div>
        <div>{content}</div>
      </OverviewLayout>
    );
  };
};

export default BlogPostLayout;
