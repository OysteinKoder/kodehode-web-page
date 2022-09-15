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
  flex-wrap: wrap;
  gap: 12px;
  transition: 0.6s;
  @media (max-width: 820px) {
    flex-direction: column;
    position: fixed;
    top: 100px;
    right: 0;
    gap: 40px;
    width: 50%;
    height: 100vh;
    padding-top: 40px;
    background-color: #77c4b4;
    transform: translateX(${(props) => (props.active ? "0" : "100%")});
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 820px) {
    padding-inline: 20px;
    text-align: center;
    font-size: 20px;
  }
`;

export const NavToggle = styled.div`
  position: relative;
  width: 3rem;
  height: 3.5rem;
  cursor: pointer;
  align-self: center;
  justify-self: center;
  display: none;

  .lines {
    position: absolute;
    background: #f0f0f0;
    border-radius: 5px;
    transition: 0.4s;
    height: 3px;
    width: 35px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .line--1 {
    transform: translate(-50%, ${(props) => (props.active ? "0" : "10px")})
      rotate(${(props) => (props.active ? "-45deg" : "0")});
  }

  .line--2 {
    width: ${(props) => (props.active ? "0%" : "")};
  }

  .line--3 {
    transform: translate(-50%, ${(props) => (props.active ? "0" : "-13px")})
      rotate(${(props) => (props.active ? "45deg" : "0")});
  }

  @media (max-width: 820px) {
    display: block;
  }
`;
