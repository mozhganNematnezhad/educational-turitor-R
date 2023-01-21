import React from "react";
import { NavLink } from "react-router-dom";

// import components
import { MenuItemsAd } from "../Data/Data";
import SidbarItemsAd from "./SidbarItemsAd/SidbarItemsAd";

// import icon
import { AiOutlineCloseCircle } from "react-icons/ai";

const SidbarAd = ({ setShowMenu }) => {
  const toggleSidbar = () => {
    setShowMenu(false);
  };

  return (
    // <div className="">
      <div className="sidbarAd  ">
        {/* logo-admin */}
        <div className=" flex justify-between  border-b border-teal-500 pb-4 py-8 px-4">
          <NavLink to={"/"}>
            <img
              src={require("../../../Assets/images/Admin/Touritor/white-logo.png")}
              className=" w-28 text-white"
              alt=""
            />
          </NavLink>
          {/* این ضربدر دیگه فقط بسته میکنه  */}
          {/* دیگه وقتی بسته شد خود سایدبار دیگه نیست که ما بخوایم بیاریم */}
          <button
            onClick={toggleSidbar}
            className=" ml-1  text-2xl  text-white/80 hover:text-white/100"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>

        {/* link page asli  */}
        <ul className="flex  flex-col  text-white mx-3 mt-4">
          {MenuItemsAd.map((MenuItem, index) => {
            // menu asli title page
            return (
              <div key={index}>
                <li>
                  <SidbarItemsAd MenuItem={MenuItem} />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    // </div>
  );
};

export default SidbarAd;
