import React, { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as shamsi from "shamsi-date-converter";
import { Formik, Form, Field } from "formik";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import opacity from "react-element-popper/animations/transition";
import "react-multi-date-picker/styles/colors/teal.css";

// toast
import {
  toastifuyErr,
  toastifuySuccess,
} from "HelperFunctions/Toastify/Toastify";

// react-icon
import { BsFillCalendarDateFill } from "react-icons/bs";

// import
import { registerSchema } from "./../Validation/ValidationSchema";
import { registerData } from "./registerationData/registerationData";
import { userRegister } from "Services/HttpServices/HttpServices";
import InputFeild from "../SiqnUp/InputFeild/InputFeild";
import PasswordS from "./PasswordS/PasswordS";
import { frozenGlass } from "components/LoginSiqnUp/Constants/Particles";
import Terms from "../Terms/Terms";

// css
import "./SIqnUp.css";

const SiqnUp = () => {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState("");
  const [birthDateShamsi, setBirthDateShamsi] = useState("");
  const [checked, setChecked] = useState(false);

  // data picker
  let [value, setValue] = useState();



  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
  };


   // get  miladi to shamsi
  const handelBirthDate = (e) => {
     console.log("setBirthDate",e.target.value);
    setBirthDate(e.target.value);

    // get and change date
    const date = shamsi.gregorianToJalali(e.target.value);
    // console.log("date",date) //[1401, 7, 26]

    const finalDate = `${date[0]}/${date[1] < 10 ? `0${date[1]}` : date[1]}/${
      date[2] < 10 ? `0${date[2]}` : date[2]
    }`;
     console.log("finalDate",finalDate)  //1401/07/26
    setBirthDateShamsi(finalDate);
  };
 


  const submiteHandler = async (values) => {
  //  console.log("value", value.day);
  // console.log("value", value.month.number);
  // console.log("value", value.year);
  // console.log("value", value.format());


    let user = {
      ...values,
       birthDate: birthDateShamsi,
    };

    try {
      let newResult = await userRegister(user);
      console.log("newResult", newResult);
      // console.log("fullName",newResult.data.result.fullName);
      // console.log("newResult.status",newResult.status);
      if (newResult.status === 200) {
        toastifuySuccess(
          `ثبت نام ${newResult.data.result.fullName} در توریتور با موفقیت انحام شد`
        );
        setTimeout(() => {
          navigate("/login");
        }, 600);
      }
    } catch (err) {
      if (err.response.status === 401) {
        toastifuyErr("ایمیل یا شماره ملی موجود است");
      } else {
        toastifuyErr("مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید");
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  });

  return (
    <div className="siqnUp">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={frozenGlass}
      />
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className="formSiqnup bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام در توریتور
            </h1>
            <span className="text-[rgba(149,160,177,1)] text-[0.8rem] md:text-base mt-4 text-center">
              به توریتور خوش اومدی ! برای عضویت ثبت نام کنید
            </span>
          </div>

          {/* input siqu-up */}
          <div className="mt-10 SiqnUpForm">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                  // کاربر حتما تاریح تولد خودشووارد کنه
                  // داخل فرمیک چگ نکردیم برای همین این جا چکو گزاشتم
                  // این چگبرای اون ترم هست
                 if (birthDateShamsi !== "" && checked) {
                  if (value !== "" && checked) {
                    console.log("values", values);
                    submiteHandler(values);
                  } else {
                    toastifuyErr(
                      "مشکلی پیش آمده لطفا دوباره اطلاعات خود را چک کنید "
                    );
                  }
                }}}
              >
                <Form>
                  {registerData.map((item) => {
                    return (
                      <InputFeild
                        label={item.label}
                        id={item.id}
                        key={item.id}
                        icon={item.icon}
                        name={item.name}
                      />
                    );
                  })}

                  {/***birthDate ****/}
                  <div className="flex flex-col justify-center items-center mb-[1.2rem]  ">
                    {/* label */}
                    <div className="flex flex-row-reverse  w-full md:w-[80%]">
                      <label htmlFor="birthDate" className="label pr-2">
                        {" "}
                        تاریخ تولد :
                      </label>
                      {/* icon */}
                      <span className="text-[#0eb582]">
                        <BsFillCalendarDateFill />
                      </span>
                    </div>
                    {/* input */}
                    <div className="relative flex justify-center w-full md:w-[80%]">
                      <Field
                        type={"date"}
                        id="birthDate"
                        name="birthDate"
                        className="Input pl-4"
                        value={birthDate}
                        onChange={(e) => handelBirthDate(e)}
                      />

                     
                      <span className="borderLeft"></span>
                    </div>
                  </div>

                  {/***password ****/}
                  <PasswordS />

                  {/***terms ***/}
                  <Terms
                    name="checkbox"
                    label="شرایط و قوانین را میپذیرم"
                    id="checkbox"
                    type="checkbox"
                    checked={checked}
                    setChecked={setChecked}
                  />

                  {/* button */}
                  <div className="btnSiqnup">
                    <button type="submit"> ثبت نام</button>
                  </div>

                  <Link to="/login" className="">
                    <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                      ورود
                    </p>
                  </Link>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiqnUp;

