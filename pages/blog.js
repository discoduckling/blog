import React from "react";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import { getSortedPostsData } from "../lib/utils";
import PostOverview from "../components/styled-components/PostOverview";

const BlogOverview = props => {
  const { posts } = props;
  return (
    <OverviewLayout pageTitle={"Blog"}>
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
  const blogPostsData = getSortedPostsData("blog");
  return {
    props: {
      posts: blogPostsData
    }
  };
}

export default BlogOverview;
