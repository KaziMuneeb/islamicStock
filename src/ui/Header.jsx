import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  return (
    <nav className="flex justify-between p-5 border-4 ">
      <span className="flex items-center">
        <img src="../../public/icon.png" alt="" className="h-7" />
        <Logo />
      </span>
      <ul className="mx-10 space-x-5">
        <Link>Portfolio</Link>
        <Link>Watchlist</Link>
        <Link>Screeners</Link>
      </ul>
    </nav>
  );
}

export default Header;
