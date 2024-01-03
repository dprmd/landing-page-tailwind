/* eslint-disable react/prop-types */

export default function SelfTitle({ name, label }) {
  return (
    <>
      <h2 className="title-desc text-primary dark:text-primaryMuda">
        Hallo saya,
        <span className="text-2xl md:text-3xl block font-bold text-dark dark:text-light font-sans">
          {name}
        </span>
      </h2>
      <h3 className="text-sm md:text-md text-dark bg-slate-300 w-max pl-2 pr-4 rounded-r-full py-1 rounded-md dark:bg-slate-700 dark:text-light font-poppins">
        {label}
      </h3>
    </>
  );
}
