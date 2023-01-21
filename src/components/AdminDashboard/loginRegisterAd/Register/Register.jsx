import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

// import components
import { registerSchema } from "components/LoginSiqnUp/Validation/ValidationSchema";
import { toastifuyErr } from "HelperFunctions/Toastify/Toastify";
import { registerData } from "components/LoginSiqnUp/SiqnUp/registerationData/registerationData";
import InputFeild from "components/LoginSiqnUp/SiqnUp/InputFeild/InputFeild";
import PasswordS from "components/LoginSiqnUp/SiqnUp/PasswordS/PasswordS";
import Terms from "components/LoginSiqnUp/Terms/Terms";

// import icons
import { BsFillCalendarDateFill } from "react-icons/bs";

// import css
import "./Register.css"

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [birthDate, setBirthDate] = useState("");
  const [birthDateShamsi, setBirthDateShamsi] = useState("");

  const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nationalId: "",
  };

  const handelBirthDate = () => {};

  const submiteHandler = () => {};

  
  return (
    <div className="register">
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className="formSiqnup bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام ادمین در توریتور
            </h1>
          </div>

          {/* input siqu-up */}
          <div className="mt-10 SiqnUpForm">
            <div>
              <Formik
                initialValues={initialValues}
                validationSchema={registerSchema}
                //   onSubmit={}
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

                  <Link to="/admindashboard/login" className="">
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

export default Register;
