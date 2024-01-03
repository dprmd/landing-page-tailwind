/* eslint-disable react/prop-types */

export default function NavBar({ hamburgerActive, darkMode, setDarkMode }) {
  return (
    <ul
      id="navbar"
      className={
        "navbar md:translate-x-0 " + `${!hamburgerActive && "translate-x-full"}`
      }
    >
      <li>
        <a
          href="#home"
          className="nav-link active:text-primary hover:text-primary dark:active:text-primaryMuda dark:hover:text-primaryMuda"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="nav-link active:text-secondary hover:text-secondary dark:active:text-secondaryMuda dark:hover:text-secondaryMuda"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#myskill"
          className="nav-link active:text-tiga hover:text-tiga dark:active:text-tigaMuda dark:hover:text-tigaMuda"
        >
          My Skill
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          className="nav-link active:text-empat hover:text-empat dark:active:text-empatMuda dark:hover:text-empatMuda"
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="nav-link active:text-lima hover:text-lima dark:active:text-limaMuda dark:hover:text-limaMuda"
        >
          Contact
        </a>
      </li>
      <li className="nav-link">
        <div
          className="mode-toggle w-11 h-6 bg-dark dark:bg-light rounded-full cursor-pointer p-1 relative"
          onClick={() => {
            localStorage.getItem("theme") === "dark"
              ? localStorage.setItem("theme", "light")
              : localStorage.setItem("theme", "dark");
            setDarkMode();
          }}
        >
          <div
            className={
              "mode-toggle-circle w-4 h-4 rounded-full bg-white dark:bg-darkBgMuda absolute " +
              `${darkMode ? "right-1" : "left-1"}`
            }
          ></div>
        </div>
      </li>
    </ul>
  );
}
