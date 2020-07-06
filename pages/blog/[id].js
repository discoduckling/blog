import React from "react";
import OverviewLayout from "../../components/page-layouts/OverviewLayout";
import { getAllPostIds, getPostData } from "../../lib/blog-posts";
import { SubTitle } from "../../components/styled-components/Titles";

const BlogPost = props => {
  const { postData } = props;
  return (
    <OverviewLayout pageTitle={postData.title}>
      <div
        style={{
          display: "flex"
        }}
      >
        <SubTitle text={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </OverviewLayout>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  };
}

export default BlogPost;
