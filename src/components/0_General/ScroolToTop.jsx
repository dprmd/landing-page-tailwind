/* eslint-disable react/prop-types */

export default function ScroolToTop({ showScroolToTop }) {
  return (
    <a
      href="#home"
      id="scrool-to-top"
      className={
        "w-11 h-11 rounded-full bg-primary dark:bg-primaryMuda justify-center items-center p-2 bottom-8 right-4 cursor-pointer z-20 fixed text-white font-medium text-xl " +
        `${showScroolToTop ? "flex": "hidden"}`
      }>
      &uarr;
    </a>
  );
}
