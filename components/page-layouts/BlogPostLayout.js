/** @jsx jsx */
import OverviewLayout from "./OverviewLayout";
import { DateLabel } from "../styled-components/Titles";
import React from "react";
import { css, jsx } from "@emotion/core";

const BlogPostTitle = ({ frontMatter }) => {
  const { title, date } = frontMatter;
  return (
    <div>
      <div
        className={"main-title"}
        css={css`
          margin-bottom: 20px;
        `}
      >
        {title}
      </div>
      <DateLabel text={date} />
    </div>
  );
};

const MainImage = ({ frontMatter }) => {
  return (
    <div
      css={css`
        max-width: 900px;
        margin-bottom: 70px;
        margin-top: 60px;
        width: 100%;
      `}
    >
      <img src={frontMatter.image_path} style={{ maxWidth: "100%" }} />
      {frontMatter.image_by && (
        <div
          css={css`
            color: grey;
            font-style: italic;
            font-size: 12px;
          `}
        >
          Image by{" "}
          <a href={frontMatter.image_web_addr} style={{ cursor: "pointer" }}>
            {frontMatter.image_by}
          </a>
        </div>
      )}
    </div>
  );
};

const BlogPostLayout = frontMatter => {
  return ({ children: content }) => {
    return (
      <OverviewLayout selected={"Blog"}>
        <div
          css={css`
            max-width: 900px;
            margin: 0 auto;
          `}
        >
          <BlogPostTitle frontMatter={frontMatter} />
          <MainImage frontMatter={frontMatter} />
          <div>{content}</div>
        </div>
      </OverviewLayout>
    );
  };
};

export default BlogPostLayout;
