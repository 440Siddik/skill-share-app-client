import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.webp";
import { FaLightbulb, FaUser } from "react-icons/fa";
import { BsFillLightbulbOffFill } from "react-icons/bs";
import { AuthContext } from "../../Contexts/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex items-center">
            <img className="h-[50px] mr-2" src={logo} alt="" />
            <Link to="/">
              <span className="text-3xl">Skill Share</span>
            </Link>
          </div>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                to="/courses"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Courses
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/faq"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                FAQ
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/blog"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Blog
              </Link>
            </li>
            <li className="flex items-center">
              {user?.uid ? (
                <>
                  <img
                    className="rounded-full h-10"
                    src={user?.photoURL}
                    alt="profile image"
                  />
                  <button
                    onClick={handleLogOut}
                    className="ml-2 bg-zinc-200 py-2 px-2 font-medium rounded text-black"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li className="flex items-center">
              {toggle ? (
                <FaLightbulb
                  className="h-6"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <BsFillLightbulbOffFill
                  className="h-6 text-xl"
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
