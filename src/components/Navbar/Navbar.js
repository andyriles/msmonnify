import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalState";
import Icon from "../../lib/assets/icon-hamburger.svg";
import IconClose from "../../lib/assets/icon-close.svg";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const { logout, user } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
  return (
    <>
      <div className=" fixed z-10  pb-3 w-full  h-screen transition duration-300 md:w-2/12 lg:ml-0 lg:w-[15%] xl:w-[20%] 2xl:w-[15%]">
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
        <img
          src={Icon}
          alt="icon"
          className="icon"
          onClick={handleOpen}
          style={{ display: isOpen ? "none" : null }}
        />
        <nav
          className="flex flex-col bg-blue-800 w-64 h-screen px-4 tex-gray-900 border border-purple-900 lg:block"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <img
            src={IconClose}
            alt="icon"
            className="icon-close"
            onClick={handleClose}
          />
          <div className="flex flex-wrap mt-8">
            <div className="w-1/2">
              <img
                src="https://randomuser.me/api/portraits/women/27.jpg"
                className="mx-auto w-20 h-20 rounded-full"
                alt="profile-pic"
              />
            </div>
            <div className="w-1/2">
              <span className="font-semibold text-white">{user?.name}</span>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
                {user?.role === "ROLE_ADMIN" ? "Admin" : "User"}
              </button>
            </div>
          </div>
          <div className="mt-10 mb-4">
            {user?.role === "ROLE_ADMIN" ? (
              <ul className="ml-4">
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                      <path
                        d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                      ></path>
                    </svg>
                  </span>

                  <Link to="/dashboard" className="ml-3">
                    Dashboard
                  </Link>
                </li>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-book-add"></i>
                  </span>
                  <Link to="/create-wallet" className="ml-4">
                    <span>Create Wallet</span>
                  </Link>
                </li>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                      <path
                        d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
                        4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
                        4h4v-4h-4M4 8h4V4H4v4z"
                      ></path>
                    </svg>
                  </span>
                  <Link to="/view-all-wallets" className="ml-2">
                    <span className="ml-2">View All Wallets</span>
                  </Link>
                </li>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-folder-plus"></i>
                  </span>
                  <Link to="/credit-wallet" className="ml-2">
                    <span className="ml-2">Credit Wallet</span>
                  </Link>
                </li>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-folder-minus"></i>
                  </span>
                  <Link to="/debit-wallet" className="ml-2">
                    <span className="ml-2">Debit Wallet</span>
                  </Link>
                </li>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-history"></i>
                  </span>
                  <Link to="/wallet-history" className="ml-2">
                    <span className="ml-2">View Wallet History</span>
                  </Link>
                </li>

                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-log-out"></i>
                  </span>
                  <Link to="/" className="ml-2" onClick={handleLogout}>
                    <span className="ml-2">Logout</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="ml-4">
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-history"></i>
                  </span>
                  <Link to="/wallet-history" className="ml-2">
                    <span className="ml-2">View Wallet History</span>
                  </Link>
                </li>
                <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                  <span>
                    <i className="bx bx-log-out"></i>
                  </span>
                  <Link to="/" className="ml-2" onClick={handleLogout}>
                    <span className="ml-2">Logout</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
