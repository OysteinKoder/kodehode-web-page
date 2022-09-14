import { Header, Logo, NavList, StyledLink } from "../ComponentsStyled/StyledHeader";
import LogoImg from "../img/jobloop_logo_colored.png";

const NavBarHeader = () => {
  return (
    <Header>
      <Logo src={LogoImg} alt="JobLoop Logo" />
      <NavList>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/success-stories">Success Stories</StyledLink>
        <StyledLink to="/media">Media</StyledLink>
        <StyledLink to="/partners">Partners</StyledLink>
        <StyledLink to="/syllabus">Syllabus</StyledLink>
        <StyledLink to="/available-interns">Available Inters</StyledLink>
      </NavList>
    </Header>
  );
};

export default NavBarHeader;
