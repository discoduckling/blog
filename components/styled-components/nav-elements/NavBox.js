import React from "react";
import Colors from "../../colors";
import Link from "next/link";
import styled from "@emotion/styled";
import { device } from "../../media-query-breakpoints";
import { slide as Menu } from "react-burger-menu";
import { GoQuote, GoProject, GoTasklist } from "react-icons/go";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const NavBoxBody = styled.div`
  visibility: hidden;
  height: 0px;
  width: 0px;
  background-color: ${Colors.navToolbar};
  padding: 22px 31px;
  @media ${device.tablet} {
    visibility: visible;
    height: 300px;
    width: 150px;
  }
`;

const NavMenuBody = styled.div`
  visibility: visible;
  font-family: Helvetica, sans-serif;
  @media ${device.tablet} {
    visibility: hidden;
  }
`;

const ExternalLinkBox = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: 50
    }}
  >
    <ExternalLink icon={<FaGithub />} to={"https://github.com/discoduckling"} />
    <ExternalLink
      icon={<FaLinkedin />}
      to={"https://www.linkedin.com/in/msmitalee/"}
    />
    <ExternalLink icon={<FaTwitter />} to={"https://twitter.com/_mitalee"} />
  </div>
);

const NavBox = props => {
  return (
    <NavBoxBody>
      <div style={{ fontSize: 28, marginBottom: 20 }}>
        <Link href={"/"}>
          <span style={{ cursor: "pointer", color: Colors.navFont }}>
            Mitalee Desai
          </span>
        </Link>
      </div>
      <div>
        <NavMenuItem text={"Blog"} to={"/blog"} icon={<GoQuote />} />
        <NavMenuItem text={"Projects"} to={"/projects"} icon={<GoProject />} />
        <NavMenuItem text={"How To"} to={"/workflows"} icon={<GoTasklist />} />
      </div>
      <ExternalLinkBox />
    </NavBoxBody>
  );
};

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "20px",
    left: "20px",
    top: "17px"
  },
  bmBurgerBars: {
    background: Colors.navFont
  },
  bmBurgerBarsHover: {
    background: "#a90000"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: Colors.navFont
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    width: 200
  },
  bmMenu: {
    background: Colors.navToolbar,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowY: "hidden"
  },
  bmMorphShape: {
    fill: "white"
  },
  bmItemList: {
    color: Colors.navFont,
    padding: "0.8em"
  },
  bmItem: {},
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const NavMenuItem = props => {
  const { text, to, icon } = props;
  const linkText = (
    <span style={{ color: Colors.navFont, cursor: "pointer" }}>{text}</span>
  );
  return (
    <div style={{ height: 40, display: "flex", alignItems: "center" }}>
      {icon && (
        <div style={{ opacity: 0.5, marginRight: 10, color: Colors.navFont }}>
          {icon}
        </div>
      )}
      <Link href={to}>{linkText}</Link>
    </div>
  );
};

const ExternalLink = props => {
  const { icon, to } = props;
  return (
    <div>
      <a href={to} style={{ textDecoration: "none", color: Colors.navFont }}>
        {icon}
      </a>
    </div>
  );
};
export const NavMenu = props => {
  const { pageTitle } = props;
  return (
    <NavMenuBody>
      <Menu styles={styles} disableAutoFocus>
        <NavMenuItem
          text={"Mitalee Desai"}
          to={"/"}
          style={{ marginBottom: 30 }}
        />
        <NavMenuItem text={"Blog"} to={"/blog"} icon={<GoQuote />} />
        <NavMenuItem text={"Projects"} to={"/projects"} icon={<GoProject />} />
        <NavMenuItem text={"How To"} to={"/workflows"} icon={<GoTasklist />} />
        <ExternalLinkBox />
      </Menu>
      <div
        style={{
          backgroundColor: Colors.navToolbar,
          color: Colors.navFont,
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          position: "fixed",
          width: "100%"
        }}
      >
        <div style={{ width: "70%", textAlign: "center" }}>{pageTitle}</div>
      </div>
    </NavMenuBody>
  );
};

export default NavBox;
