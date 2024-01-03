export default function FooterNavigation() {
  return (
    <div className="px-4 border border-slate-400 dark:border-slate-500 rounded-xl w-full my-6 md:w-[45%] flex justify-center items-center py-10">
      <ul className="text-center">
        <li>
          <h2 className="text-dark dark:text-light font-bold text-xl mb-2">
            Navigasi
          </h2>
        </li>
        <li>
          <a
            href="#home"
            className="block py-2 md:py-1 font-poppins hover:text-primary active:text-primary dark:hover:text-primaryMuda dark:active:text-primaryMuda transition duration-400 text-dark dark:text-light font-medium"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="block py-2 md:py-1 font-poppins hover:text-secondary active:text-secondary dark:hover:text-secondaryMuda dark:active:text-secondaryMuda transition duration-400 text-dark dark:text-light font-medium"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#myskill"
            className="block py-2 md:py-1 font-poppins hover:text-tiga active:text-tiga dark:hover:text-tigaMuda dark:active:text-tigaMuda transition duration-400 M text-dark dark:text-light font-medium"
          >
            My Skill
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="block py-2 md:py-1 font-poppins hover:text-empat active:text-empat dark:hover:text-empatMuda dark:active:text-empatMuda transition duration-400 text-dark dark:text-light font-medium"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="block py-2 md:py-1 font-poppins hover:text-lima active:text-lima dark:hover:text-limaMuda dark:active:text-limaMuda transition duration-400 text-dark dark:text-light font-medium"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
