import React from "react";

const CoursesAd = () => {
  return (
    <div className=" md:p-4 lg:p-8">
      <ul className="  grid  grid-cols-7 w-full  text-center bg-rose-600 text-white  rounded-t-xl py-3 ">
        <li>تصویر دوره</li>
        <li>عنوان دوره</li>
        <li> قیمت دوره (تومان) </li>
        <li> مدرس</li>
        <li>اطلاعات دوره</li>
        <li> ویرایش</li>
        <li className="">حذف </li>
      </ul>

      <div>
        <img src="" alt="" />


      </div>
    </div>
  );
};

export default CoursesAd;
