/** @jsx jsx */
import OverviewLayout from "./OverviewLayout";
import { DateLabel, SubTitle } from "../styled-components/Titles";
import React from "react";
import Colors from "../colors";
import { css, jsx } from "@emotion/core";

const BlogPostTitle = ({ title, date }) => (
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

const BlogPostLayout = frontMatter => {
  return ({ children: content }) => {
    return (
      <OverviewLayout selected={"Blog"}>
        <div
          css={css`
            display: flex;
            align-items: center;
            flex-direction: column;
          `}
        >
          <BlogPostTitle title={frontMatter.title} date={frontMatter.date} />
          <div
            css={css`
              width: 900px;
              margin-top: 70px;
            `}
          >
            <div
              css={css`
                width: 900px;
                height: 430px;
                border: 1px solid grey;
                margin-bottom: 70px;
              `}
            >
              image
            </div>
            {content}
          </div>
        </div>
      </OverviewLayout>
    );
  };
};

export default BlogPostLayout;
