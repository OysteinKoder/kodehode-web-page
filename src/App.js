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
import axios from "axios";

function App() {
  const apiTest = () => {
    axios(
      "https://srnkzdqk.api.sanity.io/v2021-10-21/data/query/production?query=*%20%5B_type%3D%3D%20%27kodehodeContent%27%5D%20%7B%0A%20%20aboutPage_title%2C%20%0AaboutPage_text%2C%20%0Aimage%0A%7D"
    ).then((res) => {
      console.log(res);
      console.log("hello");
    });
  };

  return (
    <>
      <NavBarHeader />
      <button onClick={apiTest}>click</button>
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
