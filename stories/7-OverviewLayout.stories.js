import React from "react";
import OverviewLayout from "../components/page-layouts/OverviewLayout";
import samplePosts from "./sample-data/samplePosts"
import PostOverview from "../components/styled-components/PostOverview";

export default {
  title: "Overview Layout",
  component: OverviewLayout
};

export const RecentPosts = () => (
  <OverviewLayout pageTitle={"Recent Posts"}>
    <div>
      {samplePosts.map(post => (
        <PostOverview
          id={post.id}
          title={post.title}
          data={post.date}
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
