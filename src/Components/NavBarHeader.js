import { Link } from "react-router-dom";

const NavBarHeader = () => {
  return (
    <header>
      <h1>Kodehode</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/success-stories">Success Stories</Link>
        <Link to="/media">Media</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/syllabus">Syllabus</Link>
        <Link to="/available-interns">Available Inters</Link>
      </nav>
    </header>
  );
};

export default NavBarHeader;
