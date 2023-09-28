import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode } from "../redux/reducers/Theme";

export default function NavBar() {
  const [value, setValue] = useState("");
  const [state, setState] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${value}`);
    setValue("");
    location.reload(text - black);
  };
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Theme);

  return (
    <>
      <div className="py-3 border-b-2 border-slate-50">
        <div className="container m-auto flex justify-between items-center">
          <Link
            to={"/"}
            className="text-xl text-black dark:text-white hover:dark:text-white hover:text-black"
          >
            Play
          </Link>
          <div className=" items-center desktop-header">
            <form className="" onSubmit={handleSubmit}>
              <input
                type="search"
                className="p-2 focus:outline-none"
                placeholder="Enter Movies Name...."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <input
                className="p-2 cursor-pointer capitalize text-black dark:text-white"
                type="submit"
                value="search"
              />
            </form>
            <NavLink
              className="capitalize ms-4 hover:text-red-600 transition-all text-black dark:text-white"
              to={"/categories"}
            >
              categories
            </NavLink>
            <NavLink
              className="capitalize ms-4 hover:text-red-600 transition-all text-black dark:text-white"
              to={"/actors"}
            >
              actors
            </NavLink>
          </div>
          <div className="flex items-center">
            <span
              className="header-icon cursor-pointer"
              onClick={() => setState(!state)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                className="text-white"
                viewBox="0 0 448 512"
                style={{}}
              >
                <path
                  fill="white"
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            </span>
            <span
              className="ms-4 cursor-pointer text-black dark:text-white"
              onClick={() => dispatch(setDarkMode())}
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
            </span>
          </div>
        </div>
      </div>
      {state && (
        <div className="">
          <div className="block transition-all">
            <form className="" onSubmit={handleSubmit}>
              <input
                type="search"
                className="p-2 focus:outline-none"
                placeholder="Enter Movies Name...."
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <input
                className="p-2 cursor-pointer capitalize text-black dark:text-white"
                type="submit"
                value="search"
              />
            </form>
            <NavLink
              className="capitalize ms-4 text-black dark:text-white hover:text-red-600 transition-all block"
              to={"/categories"}
            >
              categories
            </NavLink>
            <NavLink
              className="capitalize ms-4 text-black dark:text-white hover:text-red-600 transition-all block"
              to={"/actors"}
            >
              actors
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
