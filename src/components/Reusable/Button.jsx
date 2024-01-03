/* eslint-disable react/prop-types */

export default function Button({ href, text, color, lightColor }) {
  return (
    <a
      href={href}
      className={`text-base font-semibold bg-${color} hover:bg-${lightColor} px-6 py-2.5 rounded-lg text-white hover:rounded-3xl block w-max transition-all duration-500 dark:bg-${lightColor} dark:hover:bg-${color}`}
    >
      {text}
    </a>
  );
}
