/* eslint-disable react/prop-types */

import NavTitle from "./NavTitle";
import Hamburger from "./Hamburger";
import NavBar from "./NavBar";

export default function Nav({
  darkMode,
  setDarkMode,
  hamburgerActive,
  setHamburgerActive,
  isNavTransparent,
}) {

  return (
    <nav
      className={
        "flex justify-between items-center fixed top-0 left-0 w-full pl-4 bg-white bg-opacity-80 z-20 md:p-3 lg:justify-around from-darkBg to-darkGradient dark:bg-opacity-80 font-poppins " +
        `${isNavTransparent ? "nav-scrooled" : "dark:bg-gradient-to-br"}`
      }
    >
      <NavTitle title="LandingPage" />
      <Hamburger
        hamburgerActive={hamburgerActive}
        setHamburgerActive={setHamburgerActive}
      />
      <NavBar
        hamburgerActive={hamburgerActive}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </nav>
  );
}
