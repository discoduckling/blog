/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { getSortedPostsData } from "../lib/utils";
import {
  PostOverviewLarge,
  PostOverviewSmall
} from "../components/styled-components/PostOverview";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import { device } from "../components/media-query-breakpoints";
import { useMediaQuery } from "react-responsive";

const Home = props => {
  const { posts } = props;
  const showLargePost = useMediaQuery({ query: device.laptop });
  const topPost = showLargePost ? (
    <PostOverviewLarge post={posts[0]} />
  ) : (
    <PostOverviewSmall post={posts[0]} />
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
            {topPost}
            {posts.slice(1, 4).map(post => (
              <PostOverviewSmall post={post} key={post.title}/>
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
