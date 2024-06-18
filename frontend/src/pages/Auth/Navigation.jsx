import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import "./Navigation.css";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/usersApiSlice.js";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import logo from "../../img/fnb_logo.png";
import { logout } from "../../redux/features/auth/authSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toogleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  return (
    <div
      style={{ zIndex: 999 }}
      className={`${
        showSidebar ? "hidden" : "flex"
      }  xl:flex lg:flex flex-col justify-between p-4 text-white h-[5%] bg-white w-[100%] flex `}
    >
      <div>
        <header className="bg-black text-white  rounded-full">
          <div className="container mx-auto flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="FnB" className="h-10 rounded-full" />
              <nav className="space-x-4">
                <a href="/" className="hover:text-yellow-500">
                  Trang chủ
                </a>
                <a href="#" className="hover:text-yellow-500">
                  Tìm hiểu
                </a>
                <a href="/menu" className="hover:text-yellow-500">
                  Thực đơn
                </a>
                <a href="#" className="hover:text-yellow-500">
                  Khuyến mãi
                </a>
                <a href="#" className="hover:text-yellow-500">
                  Tin tức
                </a>
                <a href="#" className="hover:text-yellow-500">
                  Liên hệ
                </a>
              </nav>
            </div>
            <div class="space-x-4">
              <button class="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
                Hệ thống Cửa Hàng
              </button>
              <button class="bg-red-600 px-4 py-2 rounded hover:bg-red-700">
                Giao hàng McDelivery
              </button>
            </div>
            <div className="relative">
              <button
                onClick={toggleDropDown}
                className="flex items-center text-gray-800 focus:outline-none"
              >
                {userInfo ? (
                  <span className="text-white">{userInfo.username}</span>
                ) : (
                  <></>
                )}
                {userInfo && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 ${
                      dropdownOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                )}
              </button>

              <div className="space-x-4 relative">
                {dropdownOpen && userInfo && (
                  <ul
                    className={`absolute right-0 mt-2 mr-14 space-y-2 bg-white border-2 border-black text-gray-600 p-4 ${
                      !userInfo.isAdmin ? "-top-0" : "top-0"
                    } `}
                  >
                    {userInfo.isAdmin && (
                      <>
                        <li>
                          <Link
                            to="/admin/dashboard"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/productlist"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Products
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/categorylist"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Category
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/orderlist"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/admin/userlist"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Users
                          </Link>
                        </li>
                      </>
                    )}

                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logoutHandler}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
                {!userInfo && (
                  <>
                    <Link to="/login">
                      <span>LOGIN</span>
                    </Link>
                    <Link to="/register">
                      <span>REGISTER</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
