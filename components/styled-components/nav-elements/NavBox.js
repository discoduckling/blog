/** @jsx jsx */
import Colors from "../../colors";
import Link from "next/link";
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core";
import { device } from "../../media-query-breakpoints";
import { slide as Menu } from "react-burger-menu";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "20px",
    height: "20px",
    right: "30px",
    top: "30px"
  },
  bmBurgerBars: {
    background: Colors.orange
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
    width: "100%",
    top: 0
  },
  bmMenu: {
    background: Colors.navToolbar,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowY: "hidden",
    top: "0"
  },
  bmMorphShape: {
    fill: "white"
  },
  bmItemList: {
    color: Colors.navFont,
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  bmItem: {},
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

const ExternalLink = props => {
  const { icon, to } = props;
  return (
    <div>
      <a href={to} style={{ textDecoration: "none", color: Colors.orange }}>
        {icon}
      </a>
    </div>
  );
};

const NavBarLink = ({ label, selected, to }) => {
  const linkText = (
    <span
      style={{
        cursor: "pointer"
      }}
    >
      {label}
    </span>
  );
  return (
    <div
      css={css`
        font-size: 17px;
        font-family: "Mulish", sans-serif;
        padding: 5px 8px;
        border-radius: 3px;
        background-color: ${selected ? Colors.orange : "white"};
        color: ${selected ? "white" : "black"};
        visibility: hidden;
        margin-left: 60px;
        :hover {
          background-color: ${selected ? Colors.orange : "rgba(250, 100, 0, 0.5)"};
          color: white;
          transition: background-color .2s;
        };
        @media ${device.tablet} {
          visibility: visible;
        }
      `}
    >
      <Link href={to}>{linkText}</Link>
    </div>
  );
};

const NavBarBody = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 100;
  justify-content: space-between;
`;

const MenuLink = ({ label, to, selected }) => {
  const linkText = (
    <span style={{ color: selected ? "white" : Colors.orange, cursor: "pointer" }}>
      {label}
    </span>
  );
  return (
    <div
      css={css`
        font-family: "Mulish", sans-serif;
        font-size: 30px;
        background-color: ${selected ? Colors.orange : null};
        margin-bottom: 30px;
        padding: 5px 12px;
        border-radius: 3px;
      `}
    >
      <Link href={to}>{linkText}</Link>
    </div>
  );
};
const NavBar = props => {
  const { selected } = props;
  return (
    <div>
      <div
        css={css`
          @media ${device.tablet} {
            visibility: hidden;
          }
        `}
      >
        <Menu styles={styles} disableAutoFocus>
          <MenuLink to={"/"} label={"Home"} selected={selected === "Home"} />
          <MenuLink
            to={"/blog"}
            label={"Blog"}
            selected={selected === "Blog"}
          />
          <MenuLink
            to={"/projects"}
            label={"Projects"}
            selected={selected === "Projects"}
          />
          <MenuLink
            to={"/workflows"}
            label={"How To's"}
            selected={selected === "How To's"}
          />
          <div
            style={{
              display: "flex",
              width: 150,
              justifyContent: "space-around"
            }}
          >
            <ExternalLink
              to={"https://twitter.com/_mitalee"}
              icon={<FaTwitter />}
            />
            <ExternalLink
              to={"https://github.com/discoduckling"}
              icon={<FaGithub />}
            />
            <ExternalLink
              to={"https://www.linkedin.com/in/msmitalee/"}
              icon={<FaLinkedin />}
            />
          </div>
        </Menu>
      </div>
      <NavBarBody>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            css={css`
              width: 200px;
              margin-left: 30px;
              @media ${device.tablet} {
                width: 106px;
                margin-left: 80px;
              }
            `}
          >
            <Link href={"/"}>
              <span
                style={{
                  fontSize: 20,
                  fontFamily: "Fredoka One, cursive",
                  cursor: "pointer"
                }}
              >
                Mitalee Desai
              </span>
            </Link>
          </div>
          <NavBarLink
            label={"Blog"}
            selected={selected === "Blog"}
            to={"/blog"}
          />
          <NavBarLink
            label={"Projects"}
            selected={selected === "Projects"}
            to={"/projects"}
          />
          <NavBarLink
            label={"How-To's"}
            selected={selected === "How To's"}
            to={"/workflows"}
          />
        </div>
        <div
          style={{
            display: "flex",
            marginRight: 80,
            width: 100,
            justifyContent: "space-between"
          }}
        >
          <ExternalLink
            to={"https://twitter.com/_mitalee"}
            icon={<FaTwitter />}
          />
          <ExternalLink
            to={"https://github.com/discoduckling"}
            icon={<FaGithub />}
          />
          <ExternalLink
            to={"https://www.linkedin.com/in/msmitalee/"}
            icon={<FaLinkedin />}
          />
        </div>
      </NavBarBody>
    </div>
  );
};

export default NavBar;
