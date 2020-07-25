/** @jsx jsx */
import OverviewLayout from "./OverviewLayout";
import { DateLabel } from "../styled-components/Titles";
import React from "react";
import { css, jsx } from "@emotion/core";

const BlogPostTitle = ({ title, date }) => (
  <div
    css={css`
      margin-left: 10px;
    `}
  >
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
            justify-content: center;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
            `}
          >
            <BlogPostTitle title={frontMatter.title} date={frontMatter.date} />
            <div
              css={css`
                max-width: 900px;
                margin-top: 70px;
                padding: 0 10px;
                flex-grow: 1;
              `}
            >
              <div
                css={css`
                  max-width: 900px;
                  margin-bottom: 70px;
                  width: 100%;
                `}
              >
                <img
                  src={frontMatter.image_path}
                  style={{ maxWidth: "100%" }}
                />
                {frontMatter.image_by && (
                  <div
                    css={css`
                      color: grey;
                      font-style: italic;
                      font-size: 12px;
                    `}
                  >
                    Image by{" "}
                    <a href={frontMatter.image_web_addr}>
                      {frontMatter.image_by}
                    </a>
                  </div>
                )}
              </div>
              <div>{content}</div>
            </div>
          </div>
        </div>
      </OverviewLayout>
    );
  };
};

export default BlogPostLayout;
