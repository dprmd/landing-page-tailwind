// Components
import MessageBoxMabar from "./components/0_General/MessageBoxMabar";
import ScroolToTop from "./components/0_General/ScroolToTop";
import Nav from "./components/1_Header/Nav";
import Home from "./components/2_Hero/Home";
import About from "./components/3_About/About";
import MySkill from "./components/4_MySkill/MySkill";
import Portfolio from "./components/5_Portfolio/Portfolio";
import Contact from "./components/6_Contact/Contact";
import Footer from "./components/7_Footer/Footer";

// React Hook
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMessageBoxMabar, setShowMessageBoxMabar] = useState(false);
  const [showScroolToTop, setShowScroolToTop] = useState(false);
  const [isNavTransparent, setIsNavTransparent] = useState(false);

  const removeHamburgerActive = (e) => {
    if (
      !e.target.classList.contains("hamburger") &&
      !e.target.classList.contains("hamburger-line")
    ) {
      setHamburgerActive(false);
    }
  };

  // Get theme from localStorage
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setDarkMode(currentTheme === "dark");
  }, []);

  window.onscroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroolToTop(true);
    } else {
      setShowScroolToTop(false);
    }

    if (window.pageYOffset > 0) {
      setIsNavTransparent(true);
    } else {
      setIsNavTransparent(false);
    }
  };

  return (
    <div className={darkMode && "dark"} onClick={removeHamburgerActive}>
      <ScroolToTop showScroolToTop={showScroolToTop} />

      <MessageBoxMabar
        showMessageBoxMabar={showMessageBoxMabar}
        setShowMessageBoxMabar={() => setShowMessageBoxMabar(false)}
      />

      <Nav
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        hamburgerActive={hamburgerActive}
        setHamburgerActive={() => setHamburgerActive(!hamburgerActive)}
        isNavTransparent={isNavTransparent}
      />

      <Home />

      <About setShowMessageBoxMabar={() => setShowMessageBoxMabar(true)} />

      <MySkill />

      <Portfolio />

      <Contact />

      <Footer />
    </div>
  );
}
