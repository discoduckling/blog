import NavBarLink from "./NavLink";
import Colors from "../../colors";
import Link from "next/link";
import styled from "@emotion/styled";
import { device } from "../../media-query-breakpoints";

const BoxLayout = styled.div`
  padding: 22px 31px;
  border: 5px solid black;
  width: auto;
  height: auto;
  @media ${device.tablet} {
    width: 130px;
    height: 269px;
  }
`;

const LinkBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-around;
  @media ${device.tablet} {
    flex-direction: column;
  }
`;
const NavBox = props => {
  return (
    <BoxLayout>
      <div style={{ fontSize: 28, marginBottom: 20 }}>
        <Link href={"/"}>
          <span style={{ cursor: "pointer" }}>Mitalee Desai</span>
        </Link>
      </div>
      <LinkBox>
        <NavBarLink text={"Blog"} color={Colors.lightBlue} to={"/blog"} />
        <NavBarLink
          text={"Projects"}
          color={Colors.lightBlue}
          to={"/projects"}
        />
        <NavBarLink
          text={"How To"}
          color={Colors.lightBlue}
          to={"/workflows"}
        />
      </LinkBox>
      <LinkBox>
        <NavBarLink
          text={"Github"}
          color={Colors.purple}
          to={"https://github.com/discoduckling"}
        />
        <NavBarLink
          text={"LinkedIn"}
          color={Colors.purple}
          to={"https://www.linkedin.com/in/msmitalee/"}
        />
        <NavBarLink
          text={"Twitter"}
          color={Colors.purple}
          to={"https://twitter.com/_mitalee"}
        />
      </LinkBox>
    </BoxLayout>
  );
};

export default NavBox;
