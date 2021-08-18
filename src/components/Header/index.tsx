import { Logo } from "components/Logo";
import { authCtx } from "index";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Header(props: any) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { isLogin } = props;
  const { state, handleUpdate } = useContext(authCtx);
  const isAuthenticated = Boolean(state.token);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full ">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 border-b-2 border-gray-100 bg-white ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <Link
                  className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  to="/web/"
                >
                  <Logo />
                </Link>
                <button
                  className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="text-blue-700">
                    <FaBars />
                  </span>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75" +
                        (!isLogin || isAuthenticated ? " hidden" : "")
                      }
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75" +
                        (isLogin || isAuthenticated ? " hidden" : "")
                      }
                      to="/web/signup"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75" +
                        (!isAuthenticated ? " hidden" : "")
                      }
                      to="/web/profile"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={
                        "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-blue-700 hover:opacity-75" +
                        (!isAuthenticated ? " hidden" : "")
                      }
                      to="/login"
                      onClick={() => {
                        handleUpdate({ name: "", role: "", token: "" });
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
