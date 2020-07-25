/** @jsx jsx */
// import React from "react";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import { jsx, css } from "@emotion/core";
import { getSortedPostsData } from "../lib/utils";
import { PostOverviewSmall } from "../components/styled-components/PostOverview";
import { device } from "../components/media-query-breakpoints";

const BlogOverview = props => {
  const { posts } = props;
  return (
    <OverviewLayout selected={"Blog"}>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div>
          <div
            className={"main-title"}
            css={css`
              margin-left: 20px;
            `}
          >
            Blog Posts
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              margin-top: 60px;
              width: 376px;
              @media ${device.tablet} {
                width: 752px;
              }
              @media ${device.laptopM} {
                width: 1128px;
              }
            `}
          >
            {posts.map(post => (
              <div
                css={css`
                  margin: 20px;
                `}
                key={post.title}
              >
                <PostOverviewSmall post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </OverviewLayout>
  );
};

export async function getStaticProps() {
  const blogPostsData = getSortedPostsData("blog");
  return {
    props: {
      posts: blogPostsData
    }
  };
}

export default BlogOverview;
