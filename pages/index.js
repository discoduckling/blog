import React from "react";
import { getSortedPostsData } from "../lib/utils";
import {
  PostOverviewLarge,
  PostOverviewSmall
} from "../components/styled-components/PostOverview";
import OverviewLayout from "../components/page-layouts/OverviewLayout";

const Home = props => {
  const { posts } = props;
  return (
    <OverviewLayout selected={"Home"}>
      <div className={"main-title"}>Latest Posts</div>
      <div
        style={{
          marginTop: 60,
          display: "flex",
          width: 1200,
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        {posts
          .slice(0, 4)
          .map((post, i) =>
            i === 0 ? (
              <PostOverviewLarge
                id={post.id}
                title={post.title}
                date={post.date}
                blurb={post.blurb}
                key={post.title}
                postType={post.postType}
                pid={post.pid}
              />
            ) : (
              <PostOverviewSmall
                id={post.id}
                title={post.title}
                date={post.date}
                blurb={post.blurb}
                key={post.title}
                postType={post.postType}
                pid={post.pid}
              />
            )
          )}
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
