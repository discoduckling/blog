/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { getSortedPostsData } from "../lib/utils";
import {
  PostOverviewLarge,
  PostOverviewSmall
} from "../components/styled-components/PostOverview";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import { device } from "../components/media-query-breakpoints";

const Home = props => {
  const { posts } = props;
  const topPostLarge = (
    <div
      css={css`
        display: none;
        @media ${device.laptop} {
          display: inline-block;
        }
      `}
    >
      <PostOverviewLarge post={posts[0]} />
    </div>
  );
  const topPostSmall = (
    <div css={css`
      @media ${device.laptop} {
        display: none;
      }
    `}>
      <PostOverviewSmall post={posts[0]} />
    </div>
  );
  return (
    <OverviewLayout selected={"Home"}>
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            @media ${device.tablet} {
              align-items: flex-start;
            }
          `}
        >
          <div className={"main-title"}>Latest Posts</div>
          <div
            css={css`
              margin-top: 60px;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              @media ${device.tablet} {
                max-width: 1200px;
                min-width: 710px;
                justify-content: space-between;
              }
              @media ${device.laptop} {
                justify-content: space-around;
              }
              @media ${device.laptopM} {
                justify-content: space-between;
              }
            `}
          >
            {topPostLarge}
            {topPostSmall}
            {posts.slice(1, 4).map(post => (
              <PostOverviewSmall post={post} key={post.title} />
            ))}
          </div>
        </div>
      </div>
    </OverviewLayout>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      posts: allPostsData
    }
  };
}

export default Home;
