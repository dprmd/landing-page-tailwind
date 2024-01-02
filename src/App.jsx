import MessageBoxMabar from "./components/General/MessageBoxMabar";
import ScroolToTop from "./components/General/ScroolToTop";
import Nav from "./components/Header/Nav";
import Home from "./components/Hero/Home";
import About from "./components/About/About";
import MySkill from "./components/MySkill/MySkill";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showMessageBoxMabar, setShowMessageBoxMabar] = useState(false);
  const [showScroolToTop, setShowScroolToTop] = useState(false);
  const [isNavTransparent, setIsNavTransparent] = useState(false);

  const removeNavHamburger = (e) => {
    if (
      !e.target.classList.contains("hamburger") &&
      !e.target.classList.contains("hamburger-line")
    ) {
      setHamburgerActive(false);
    }
  };

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
    <div className={darkMode && "dark"} onClick={removeNavHamburger}>
      <ScroolToTop showScroolToTop={showScroolToTop} />

      <MessageBoxMabar
        showMessageBoxMabar={showMessageBoxMabar}
        setShowMessageBoxMabar={() => setShowMessageBoxMabar(false)}
      />

      <Nav
        darkMode={darkMode}
        setDarkMode={() => setDarkMode(!darkMode)}
        hamburgerActive={hamburgerActive}
        setHamburgerActive={setHamburgerActive}
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
