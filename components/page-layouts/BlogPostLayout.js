import OverviewLayout from "./OverviewLayout";
import { SubTitle } from "../styled-components/Titles";
import React from "react";
import Colors from "../colors";

const BlogPostLayout = frontMatter => {
  return ({ children: content }) => {
    return (
      <OverviewLayout pageTitle={frontMatter.title}>
        <div style={{ display: "flex" }}>
          <SubTitle text={frontMatter.date} />
        </div>
        <div style={{ color: Colors.navToolbar }}>{content}</div>
      </OverviewLayout>
    );
  };
};

export default BlogPostLayout;
