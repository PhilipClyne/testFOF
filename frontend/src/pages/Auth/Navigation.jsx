import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
// import "./Navigation.css";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../../redux/api/usersApiSlice.js";

import logo from "../../img/fnb_logo.png";
import { logout } from "../../redux/features/auth/authSlice.js";
import { useSelector, useDispatch } from "react-redux";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toogleDropdown = () => {
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
      }  xl:flex lg:flex flex-col justify-between p-4 text-white h-[5%] bg-white w-[100%] fixed `}
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
                <a href="#" className="hover:text-yellow-500">
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
            <div className="space-x-4 relative">
              {userInfo ? (
                <span className="text-white">{userInfo.username}</span>
              ) : (
                <></>
              )}
            </div>

            <div className="space-x-4 relative">
              <button
                className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
                onClick={toogleDropdown}
              >
                Menu
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <div className="py-2">
                    <Link to="/login">
                      <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Đăng nhập
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
                        Đăng ký
                      </button>
                    </Link>
                    <button
                      onClick={logoutHandler}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Thoát
                    </button>
                    {userInfo.isAdmin && (
                      <div className="text-black border border-black">
                        <ul className="list-none">
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
                        </ul>
                      </div>
                    )}
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navigation;
