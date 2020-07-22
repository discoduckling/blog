import React from "react";
import { PageTitle } from "../styled-components/Titles";
import styled from "@emotion/styled";
import { device, size } from "../media-query-breakpoints";
import { useMediaQuery } from "react-responsive";
import Colors from "../colors";
import NavBar from "../styled-components/nav-elements/NavBox";

const InnerLayout = styled.div`
  font-family: Helvetica, sans-serif;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 10px 10px;
  @media ${device.tablet} {
    text-align: left;
    padding: 80px 45px;
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
  const { selected } = props;
  return (
    <div
      style={{
        minHeight: "100vh"
      }}
    >
      <NavBar selected={selected} />
      <div style={{ padding: "160px 120px" }}>{props.children}</div>
    </div>
  );
};

export default OverviewLayout;
