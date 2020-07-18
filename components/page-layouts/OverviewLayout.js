import React from "react";
import NavBox, { NavMenu } from "../styled-components/nav-elements/NavBox";
import { PageTitle } from "../styled-components/Titles";
import styled from "@emotion/styled";
import { device, size } from "../media-query-breakpoints";
import { useMediaQuery } from "react-responsive";
import Colors from "../colors";

const InnerLayout = styled.div`
  font-family: Helvetica, sans-serif;
  @media ${device.tablet} {
    display: flex;
    padding: 30px;
  }
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 10px 10px;
  @media ${device.tablet} {
    text-align: left;
    padding: 0px 45px;
    width: 60%;
  }
`;

const ContentBody = styled.div`
  text-align: left;
  margin-top: 20px;
  @media ${device.tablet} {
    padding-left: 50px;
    margin-top: 60px;
  }
`;

const OverviewLayout = props => {
  const isTablet = useMediaQuery({ minWidth: size.tablet });
  const { pageTitle } = props;
  return (
    <div
      style={{
        margin: -8,
        backgroundColor: Colors.navBackground,
        minHeight: "100vh"
      }}
    >
      <NavMenu pageTitle={pageTitle} />
      <InnerLayout>
        <NavBox />
        <ContentContainer>
          {isTablet ? <PageTitle text={pageTitle} /> : null}
          <ContentBody>
            <div style={{ maxWidth: 800 }}>{props.children}</div>
          </ContentBody>
        </ContentContainer>
      </InnerLayout>
    </div>
  );
};

export default OverviewLayout;
