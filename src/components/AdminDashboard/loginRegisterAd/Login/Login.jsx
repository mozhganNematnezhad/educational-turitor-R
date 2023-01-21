import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";

// import components
import Terms from "components/LoginSiqnUp/Terms/Terms";
import Password from "components/LoginSiqnUp/Login/Password/Password";
import InputFeild from "components/LoginSiqnUp/Login/InputFeild/InputFeild";
import { MdEmail } from "react-icons/md";
import { loginSchema } from "components/LoginSiqnUp/Validation/ValidationSchema";

// import css
import "./Login.css";

const Login = () => {
  const [checked, setChecked] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const submitHandler = () => {};
  return (
    <div className="Login">
      <div className="container mx-auto  flex  justify-center items-center pt-8 pb-20 md:py-8">
        <div className=" formLogin  bg-white mx-auto  py-9  px-5 rounded-2xl shadow-sm w-[85%] lg:w-[60%] xl:w-[50%]   ">
          {/* title */}
          <div className="flex flex-col">
            <h1 className="text-[rgba(86,86,86)] text-xl md:text-2xl text-center">
              ثبت نام ادمین در توریتور
            </h1>
          </div>

          {/* input */}
          <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={submitHandler}
          >
            <div className="mt-10 LoginForm">
              <Form>
                {/* email */}
                <InputFeild
                  id="email"
                  name="email"
                  icon={<MdEmail />}
                  label="ایمیل"
                  type="email"
                />

                {/* password */}
                <Password />

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
                <div className="btnlogin">
                  <button type="submit">ورود</button>
                </div>

                <Link to="/admindashboard/register" className="">
                  <p className="text-center mt-4 text-[rgba(100,116,139,1)] w-[25%] mx-auto pb-2 border-b-2 border-solid border-[#0eb582] ">
                    ثبت نام
                  </p>
                </Link>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
