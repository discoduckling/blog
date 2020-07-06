import OverviewLayout from "../components/page-layouts/OverviewLayout";
import React from "react";
import { getSortedPostsData } from "../lib/blog-posts";
import PostOverview from "../components/styled-components/PostOverview";

const Home = props => {
  const { allPostsData } = props;
  return (
    <OverviewLayout pageTitle={"Recent Posts"}>
      <div>
        {allPostsData.map(post => (
          <PostOverview
            id={post.id}
            title={post.title}
            date={post.date}
            text={post.blurb}
            key={post.title}
          />
        ))}
      </div>
    </OverviewLayout>
  );
};

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default Home;
