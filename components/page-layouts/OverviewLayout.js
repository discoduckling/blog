import React from "react";
import NavBox from "../styled-components/nav-elements/NavBox";
import { PageTitle } from "../styled-components/Titles";
import { useMediaQuery } from "react-responsive";
import styled from "@emotion/styled";
import { device } from "../media-query-breakpoints";

const InnerLayout = styled.div`
  font-family: Helvetica, sans-serif;
  @media ${device.tablet} {
    display: flex;
    padding: 30px;
  }
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 10px 10px;
  @media ${device.tablet} {
    text-align: left;
    padding: 0px 45px;
    width: 60%;
  }
`;

const ContentBody = styled.div`
  text-align: left;
  margin-top: 60px;
  @media ${device.tablet} {
    padding-left: 50;
  }
`;

const OverviewLayout = props => {
  const { pageTitle } = props;
  return (
    <InnerLayout>
      <NavBox />
      <ContentContainer>
        <PageTitle text={pageTitle} />
        <ContentBody>
          <div style={{ maxWidth: 800 }}>{props.children}</div>
        </ContentBody>
      </ContentContainer>
    </InnerLayout>
  );
};

export default OverviewLayout;
