/* eslint-disable react/prop-types */

export default function Hamburger({ hamburgerActive, setHamburgerActive }) {
  return (
    <div
      id="hamburger"
      className={
        "hamburger relative md:hidden cursor-pointer p-4 " +
        `${hamburgerActive && "hamburger-active"}`
      }
      onClick={setHamburgerActive}
    >
      <span className="hamburger-line origin-top-left"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line origin-bottom-left"></span>
    </div>
  );
}
