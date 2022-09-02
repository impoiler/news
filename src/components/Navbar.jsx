import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo_2nd.svg";
import useKeypress from "react-use-keypress";

const Navbar = () => {
  const [input, setinput] = useState("");
  const [focus, setfocus] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate(`search?q=${input}`);
    setfocus(false);
  };

  useKeypress("Escape", () => {
    setfocus(false);
  });

  return (
    <nav>
      <div className="container flex">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <form
            onClick={() => {
              setfocus(true);
            }}
            className={focus ? "focused" : null}
            onSubmit={handlesubmit}
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.4159 37.7369L33.5411 31.0155L33.38 30.7704C33.0804 30.4721 32.6707 30.3041 32.2431 30.3041C31.8155 30.3041 31.4059 30.4721 31.1063 30.7704C25.2638 36.1305 16.2611 36.4218 10.0688 31.4512C3.87651 26.4807 2.41612 17.7905 6.65616 11.1441C10.8962 4.49775 19.5209 1.9575 26.8105 5.20808C34.1 8.45866 37.7924 16.4914 35.4388 23.979C35.2693 24.5199 35.4079 25.1082 35.8023 25.5221C36.1967 25.9361 36.787 26.1129 37.3509 25.986C37.9148 25.859 38.3666 25.4476 38.5361 24.9067C41.3496 16.0211 37.1003 6.45891 28.537 2.40592C19.9738 -1.64707 9.66646 1.02545 4.28289 8.69464C-1.10067 16.3638 0.0551434 26.7281 7.00265 33.0828C13.9502 39.4375 24.6043 39.8756 32.073 34.1136L38.1601 40.0648C38.7888 40.6768 39.8051 40.6768 40.4338 40.0648C41.0618 39.4442 41.0618 38.445 40.4338 37.8244L40.4159 37.7369Z"
                fill="black"
              />
            </svg>

            <input
              onChange={(e) => {
                setinput(e.target.value);
              }}
              placeholder="Search articles "
              type="text"
            />
          </form>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
