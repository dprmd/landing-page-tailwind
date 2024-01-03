/* eslint-disable react/prop-types */
export default function NavTitle({ title }) {
  return (
    <span
      type="button"
      className="text-lg md:text-xl font-bold dark:text-light duration-300"
    >
      {title}
    </span>
  );
}
