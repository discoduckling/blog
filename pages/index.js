import OverviewLayout from "../components/page-layouts/OverviewLayout";
import React from "react";
import { getSortedPostsData } from "../lib/utils";
import PostOverview from "../components/styled-components/PostOverview";

const Home = props => {
  const { posts } = props;
  return (
    <OverviewLayout pageTitle={"Home"}>
      <div>
        {posts.map(post => (
          <PostOverview
            id={post.id}
            title={post.title}
            date={post.date}
            text={post.blurb}
            key={post.title}
            postType={post.postType}
            pid={post.pid}
            fileName={post.fileName}
          />
        ))}
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
