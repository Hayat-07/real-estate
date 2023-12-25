import Signin from "../assets/pages/Signin";
import Profile from "../assets/pages/Profile";
import About from "../assets/pages/About";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" py-2 bg-emerald-500  flex  items-center justify-center ">
      <Link to="/">
        <h2 className=" m-auto text-center bg-slate-600">
          <span className=" text-gray-800">BD</span>
          <span className=" text-slate-950">State</span>
        </h2>
      </Link>

      <form className=" rounded p-2 flex items-center justify-center roun m-auto bg-slate-100">
        <input
          className=" bg-transparent focus:outline-none"
          type="text"
          placeholder="Search...."
        />
        <FaSearch className=" hover:cursor-pointer active:text-lime-500"/>
      </form>
      <ul className=" flex m-auto gap-3 ">
        <Link to="/">
          <li className="hidden sm:inline hover:underline cursor-pointer">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="hidden sm:inline hover:underline cursor-pointer">
            About
          </li>
        </Link>
        <Link to="/signin">
          <li className=" sm:inline hover:underline cursor-pointer">SignIn</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
