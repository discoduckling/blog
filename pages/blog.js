import React from "react";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import { getSortedPostsData } from "../lib/utils";
import { PostOverviewSmall } from "../components/styled-components/PostOverview";

const BlogOverview = props => {
  const { posts } = props;
  return (
    <OverviewLayout selected={"Blog"}>
      <div>
        {posts.map(post => (
          <PostOverviewSmall
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
