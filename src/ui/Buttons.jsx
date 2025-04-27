import { Children } from "react";
import { Link } from "react-router-dom";

function Buttons({ type, children, disabled, to, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-[2px] text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-200 focus:outline-none focus:ring focus:ring-yellow-200 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " text-xs py-2 px-4 md:px-5 md:py-2.5",
    rounded: base + " text-sm py-1 px-2.5 md:px-3.5 md:py-2",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Buttons;
