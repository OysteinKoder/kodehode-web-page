import { Header, Logo, NavList, StyledLink, NavToggle } from "../ComponentsStyled/StyledHeader";
import LogoImg from "../img/jobloop_logo_colored.png";
import { useState, useRef } from "react";

const NavBarHeader = () => {
  const [active, setActive] = useState(false);

  const menuToggle = () => {
    setActive(!active);
  };

  const autoClose = () => {
    setActive(false);
  };

  const menu = useRef(null);

  const closeMenu = (e) => {
    if (menu.current && active && !menu.current.contains(e.target)) {
      setActive(false);
    }
  };

  document.addEventListener("mousedown", closeMenu);

  return (
    <Header ref={menu}>
      <Logo src={LogoImg} alt="JobLoop Logo" />
      <NavList active={active}>
        <StyledLink onClick={autoClose} to="/about">
          About
        </StyledLink>
        <StyledLink onClick={autoClose} to="/contact">
          Contact
        </StyledLink>
        <StyledLink onClick={autoClose} to="/success-stories">
          Success Stories
        </StyledLink>
        <StyledLink onClick={autoClose} to="/media">
          Media
        </StyledLink>
        <StyledLink onClick={autoClose} to="/partners">
          Partners
        </StyledLink>
        <StyledLink onClick={autoClose} to="/syllabus">
          Syllabus
        </StyledLink>
        <StyledLink onClick={autoClose} to="/available-interns">
          Available Inters
        </StyledLink>
      </NavList>
      <NavToggle active={active} onClick={menuToggle}>
        <span className="lines line--1"></span>
        <span className="lines line--2"></span>
        <span className="lines line--3"></span>
      </NavToggle>
    </Header>
  );
};

export default NavBarHeader;
