import React from "react";

const AcountAd = () => {
  return (
    <div className="acountAd">
      <div className="HeaderAd">
        <h3>اطلاعات ادمین</h3>
      </div>

      <div className="ContentAd text-[#686e71] py-8 px-8">
        <div className="grid lg:grid-cols-2">
          <div className="flex text-[14px]">
            <p className=" dark:text-gray-300">نام و نام خانوادگی: </p>
            <p className="dark:text-white">امیر</p>
          </div>

          <div className="flex text-[14px] pt-8 lg:pt-0">
            <p className=" dark:text-gray-300 "> شماره تماس: </p>
            <p className="dark:text-white">09112345678</p>
          </div>
          <div className="flex pt-8 text-[14px]">
            <p className=" dark:text-gray-300"> ایمیل : </p>
            <p className="dark:text-white">amirali@gmail.com</p>
          </div>

          <div className="flex pt-8 text-[14px]">
            <p className=" dark:text-gray-300"> شماره ملی: </p>
            <p className="dark:text-white">2345678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcountAd;
