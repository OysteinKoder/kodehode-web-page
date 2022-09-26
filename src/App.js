import "./App.css";
import NavBarHeader from "./Components/NavBarHeader";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AvailableInternsPage from "./pages/AvailableInternsPage";
import ContactPage from "./pages/ContactPage";
import MediaPage from "./pages/MediaPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import PartnersPage from "./pages/PartnersPage";
import SyllabusPage from "./pages/SyllabusPage";
import GlobalStyle from "./Globalstyle/Globalstyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBarHeader />
      <Routes>
        <Route path="*" element={<AboutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/available-interns" element={<AvailableInternsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/success-stories" element={<SuccessStoriesPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
      </Routes>
    </>
  );
}

export default App;
