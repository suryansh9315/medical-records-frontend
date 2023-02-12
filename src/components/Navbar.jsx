import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="min-h-[100px] flex items-center justify-between space-x-8 border-b-2">
      <div className="px-10 flex justify-between items-center w-screen">
        <div className="font-bold text-[28px] font-mono cursor-pointer">
          <Link to="/">Healthistory</Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-10">
          <div className={`${sidebar ? 'hidden' : ''} text-sm`}>
            <ConnectWallet />
          </div>
          <div className="z-20">
            <div
              onClick={() => setSidebar(!sidebar)}
              className={`space-y-[6px] cursor-pointer ${sidebar ? '-translate-y-4 translate-x-8':''}`}
            >
              <span
                className={`${
                  sidebar ? "rotate-45 translate-y-[6px] bg-gray-100" : ""
                } origin-center block w-8 h-1 bg-gray-800 transition-all duration-200`}
              ></span>
              <span
                className={`${
                  sidebar ? "hidden" : ""
                } block w-8 h-1 bg-gray-800 transition-all duration-200`}
              ></span>
              <span
                className={`${
                  sidebar ? "-rotate-45 -translate-y-1 bg-gray-100" : ""
                } origin-center block w-8 h-1 bg-gray-800 transition-all duration-200`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      {sidebar ? (
        <div>
          <div className="sidebar fixed top-0 bottom-0 right-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 -z-5">
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center">
                <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                  Healthistory
                </h1>
              </div>
              <div className="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                <Link to='/'>Register Hospital</Link>
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
              <Link to='/register-doctor'>Register Doctor</Link>
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
              <Link to='/register-patient'>Register Patient</Link>
              </span>
            </div>
            <div className="my-4 bg-gray-600 h-[1px]"></div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  <Link to='/add-patient-record'>Add Patient Record</Link>
                </span>
              </div>
            </div>
            <div
              className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <div className="flex justify-between w-full items-center">
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                <Link to='/view-patient-records'>View Patient Records</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
