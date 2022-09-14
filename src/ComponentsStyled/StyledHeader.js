import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  color: #fff;
  background: linear-gradient(270deg, #77c4b4 46.15%, #d8fef6 98.18%);
  padding-inline: 30px;
`;

export const Logo = styled.img`
  height: 70px;
`;

export const NavList = styled.nav`
  display: flex;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
