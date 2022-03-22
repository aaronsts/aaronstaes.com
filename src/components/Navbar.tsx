import Link from "next/link";
import React, { useEffect, useState } from "react";

// icons
import { IconContext } from "react-icons";
import { RiMenu4Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

type Props = {};

const Navbar = (props: Props) => {
  // state
  const [show, setShow] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  // eventHandlers
  const handleClick = () => {
    setShow(!show);
  };

  // navbar color change
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  // icon styling
  const value = {
    size: "4rem",
  };

  return (
    <IconContext.Provider value={value}>
      <nav
        className={`fixed top-0 z-20 text-gray-50 w-screen flex flex-col transition-colors duration-500 ${
          bgColor ? "bg-gray-900" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between relative z-40 wrapper py-4">
          <Link href="/" passHref>
            <a>
              <div>
                <svg
                  width="100%"
                  height="100%"
                  fill="rgb(249 250 251)"
                  viewBox="0 0 500 500"
                  version="1.1"
                  style={{
                    width: "64px",
                    height: "64px",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeMiterlimit: 2,
                  }}
                >
                  <g transform="matrix(9.20885,0,0,9.20885,-568.29,-707.614)">
                    <g transform="matrix(0.548377,0,0,0.548377,42.8729,8.22524)">
                      <path d="M84.187,156.607C85.787,154.638 87.905,153.077 90.543,151.924C93.475,150.641 96.841,150 100.641,150C104.519,150 107.874,150.649 110.704,151.947C113.535,153.245 115.72,155.071 117.261,157.424C118.801,159.778 119.579,162.526 119.595,165.67L107.115,165.67C106.99,164.106 106.408,162.886 105.368,162.01C104.328,161.134 102.752,160.697 100.641,160.697C99.296,160.697 98.198,160.857 97.345,161.177C96.493,161.498 95.864,161.932 95.457,162.479C95.05,163.027 94.839,163.652 94.824,164.356C94.792,164.935 94.898,165.455 95.14,165.916C95.383,166.377 95.77,166.792 96.301,167.159C96.833,167.527 97.513,167.859 98.342,168.156C99.171,168.453 100.156,168.719 101.298,168.954L105.239,169.798C107.897,170.361 110.173,171.104 112.065,172.026C113.957,172.949 115.505,174.032 116.709,175.275C117.913,176.519 118.801,177.914 119.372,179.462C119.943,181.011 120.236,182.7 120.251,184.529C120.236,187.688 119.446,190.362 117.882,192.552C116.318,194.741 114.086,196.407 111.185,197.548C108.284,198.69 104.801,199.261 100.735,199.261C100.529,199.261 100.324,199.259 100.12,199.256L100.125,199.261L83.834,199.261L80.988,189.832L64.744,189.832L61.898,199.261L47.466,199.261L63.726,150L82.006,150L84.187,156.607ZM91.165,177.748C92.326,178.163 93.577,178.515 94.917,178.806L99.703,179.838C101.485,180.229 102.901,180.647 103.948,181.093C104.996,181.538 105.751,182.039 106.212,182.594C106.673,183.149 106.912,183.794 106.928,184.529C106.912,185.311 106.662,186.007 106.177,186.617C105.692,187.227 104.981,187.704 104.042,188.048C103.104,188.392 101.939,188.564 100.547,188.564C98.89,188.564 97.463,188.306 96.266,187.79C95.07,187.274 93.814,185.683 93.067,183.509L91.165,177.748ZM77.967,179.826L67.765,179.826L72.674,163.566L73.058,163.566L77.967,179.826Z" />
                    </g>
                    <g transform="matrix(0.108591,0,0,0.108591,61.7113,76.8406)">
                      <path d="M429.478,209.749L475.084,379.952L120.048,475.084L94.404,379.381L104.757,379.381L127.119,462.836C127.119,462.836 462.836,372.881 462.836,372.881L419.125,209.749L429.478,209.749ZM412.99,148.214C409.057,144.275 404.655,140.719 399.779,137.549L372.881,37.164L372.881,37.164C372.881,37.164 37.164,127.119 37.164,127.119L84.392,303.376L78.678,320.688L24.916,120.048L379.952,24.916L412.99,148.214Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </Link>
          <RiMenu4Line
            onClick={handleClick}
            className={`${
              show ? "hidden" : "text-gray-50"
            } cursor-pointer z-30`}
          />
          <RiCloseLine
            onClick={handleClick}
            className={`${
              show ? "text-gray-50" : "hidden"
            } cursor-pointer z-30`}
          />
        </div>
        <div
          className={`${
            show ? "translate-x-0" : "translate-x-full"
          } fixed top-0 bottom-0 right-0 z-30 left-0 md:left-2/3 bg-gray-900 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col wrapper text-gray-50 mt-32">
            <Link href="/" passHref>
              <a>
                <li
                  className="text-3xl font-bold uppercase text-center py-4 mb-4 border-b border-gray-50 hover:text-rose-600 hover:border-rose-600"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Home
                </li>
              </a>
            </Link>
            <Link href="#about" passHref>
              <a>
                <li
                  className="text-3xl font-bold uppercase text-center py-4 mb-4 border-b border-gray-50 hover:text-rose-600 hover:border-rose-600"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  About
                </li>
              </a>
            </Link>
            <Link href="#why" passHref>
              <a>
                <li
                  className="text-3xl font-bold uppercase text-center py-4 mb-4 border-b border-gray-50 hover:text-rose-600 hover:border-rose-600"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Services
                </li>
              </a>
            </Link>
            <Link href="#projects" passHref>
              <a>
                <li
                  className="text-3xl font-bold uppercase text-center py-4 mb-4 border-b border-gray-50 hover:text-rose-600 hover:border-rose-600"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Projects
                </li>
              </a>
            </Link>
            <a href="mailto:aaron.staes@gmail.com">
              <li
                className="text-3xl font-bold uppercase text-center py-4 mb-4 border-b text-amber-500 border-amber-500 hover:border-amber-600 hover:text-amber-600"
                onClick={() => {
                  setShow(false);
                }}
              >
                Contact
              </li>
            </a>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
