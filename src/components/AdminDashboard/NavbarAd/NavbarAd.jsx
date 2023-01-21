import React from "react";
import { Link, NavLink } from "react-router-dom";
// import components
import NavButton from "./NavButton/NavButton";

// import icon
import { BiExit, BiHomeHeart, BiShoppingBag } from "react-icons/bi";
import { BsChatSquareText, BsSunFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { IoExit, IoNotificationsOutline } from "react-icons/io5";
import { TiHomeOutline } from "react-icons/ti";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

// import img
import icon from "../../../Assets/images/Admin/adminDashImg/avatar.jpg";

const NavbarAd = ({ setShowMenu }) => {
  return (
    <div className="shadow-md bg-white relative py-4 
    dark:bg-Dark-MainBg 
     md:flex md:justify-between md:items-center  ">
      <div className="css-rightNav flex flex-wrap md:flex-nowrap ">
        {/* admin name */}
        <Link to="/admindashboard/acount">
          <div className="mr-5 flex items-center ml-5 text-gray-500 cursor-pointer hover:text-teal-600">
            <img
              src={icon}
              className=" w-11 h-11 rounded-full border-2  border-teal-400 "
              alt="admib"
            />

            <span className=" mr-2 pt-2">امیر علی </span>
            <span className=" pt-2">
              {" "}
              <FaAngleDown />
            </span>
          </div>
        </Link>
        {/* rightNav */}
        <div className="navButton">
          <NavButton icon={<BiShoppingBag />} color="rgb(13 148 136 ) " />
          <NavButton
            icon={<BsChatSquareText />}
            color="rgb(13 148 136 ) "
            dotColor="rgb(252, 102, 92)"
            customClass={"right-2 top-2"}
          />
          <NavButton
            icon={<IoNotificationsOutline />}
            color="rgb(13 148 136 ) "
            dotColor="rgb(254, 201, 15)"
            customClass={"right-4 top-3"}
          />
        </div>
      </div>
      {/* leftnav */}
      <div className="css-leftNav flex gap-2 items-center flex-row-reverse">
        <div onClick={() => setShowMenu((prev) => !prev)}>
          <NavButton icon={<HiOutlineMenuAlt1 />} color="rgb(13 148 136 )" />
        </div>

        <div className="text-2xl text-teal-600 cursor-pointer">
          <BsSunFill />
        </div>

        <NavLink to={"/"}>
          <BiHomeHeart className="text-2xl text-teal-600 cursor-pointer ml-3" />
        </NavLink>

        <NavLink to={"/admindashboard"}>
          <IoExit className="text-2xl text-teal-600 cursor-pointer ml-3" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavbarAd;




// ***************
// ***************
// ***************
// ***************



// {/* <div className="css-leftNav flex gap-2 items-center flex-row-reverse"> */}
// {/* چون اینجا نیاز به مقدار قبلی داشنیم پس  باید از کال بک استفاده کنیم */}
// {/* اگر فالز ترو کن اگر ترو فالز کن */}
// {/* این ایکن همیشه هست برای بازو بسته شدن هست */}
// {/* <div onClick={() => setShowMenu((prev) => !prev)}>
//   <NavButton icon={<HiOutlineMenuAlt1 />} color="rgb(13 148 136 )" />
// </div> */}