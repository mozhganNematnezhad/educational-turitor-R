import InputFeildEdit from "Pages/UserDashboard/EditUserAccount/InputFeildEdit/InputFeildEdit";
import React from "react";
import { Link } from "react-router-dom";
import { Field, Form } from "formik";
import { Formik } from "formik";
import { EditDataDashbord } from "components/AdminDashboard/Data/Data";

import axeimg from "../../../Assets/images/panel/1.jpg";
import { FiUploadCloud } from "react-icons/fi";

const EditDashboardPanel = () => {
  return (
    <div className="Da_Edit   ">
      <div className=" mt-16 mx-8 text-[#2d3339]  border-b-4 border-solid border-[#00ffb1] ">
        <h3 className="text-center pb-4 text-base dark:text-white">
          {" "}
          ویرایش پروفایل ادمین
        </h3>
      </div>

      <Formik>
        {(props) => (
          <div
            className="Da_edit rounded-lg my-8 mx-8 shadow-xl md:px-[40px]  py-[10px] border border-solid border-[#ecf0f4]
        dark:bg-[rgb(27,52,77)]
          dark:!border dark:!border-solid dark:!border-[rgb(66,63,81)]
        "
          >
            <Form className="">
              <div>
                <div
                  className="py-2 lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0 w-[150px] h-[150px]
                m-auto
                "
                >
                  <img src={axeimg} alt="" className="rounded-[50%]" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 items-center">
                {EditDataDashbord.map((item) => {
                  return (
                    <InputFeildEdit
                      id={item.id}
                      label={item.label}
                      key={item.id}
                      name={item.name}
                      type={item.type}
                    />
                  );
                })}
              </div>

              {/* upload image */}
              <div>
                <div className="py-2 w-[400px] lg:py-4 flex flex-col px-4 md:flex md:items-center md:flex-row md:pr-0">
                  <label
                    htmlFor="image"
                    className=" w-[70%]  bg-[#0eb582]  cursor-pointer text-center justify-center flex rounded mt-2 h-10 px-3 py-2 gap-2"
                  >
                    <FiUploadCloud className="text-white " />{" "}
                    <p className="text-white">انتخاب عکس</p>:{" "}
                  </label>
                  <Field
                    type={"file"}
                    id="image"
                    name="image"
                    className="hidden"
                    // onChange={handelUploadImage}
                    // onChange={(e) =>
                    //   handelUploadImage(e, props.setFieldValue)
                    // }
                  />
                </div>

               
              </div>

              <div className="flex justify-center mt-8 mb-6">
                <button
                  type="submit"
                  className="btn text-[#fff] bg-[#00ffb1] py-[0.5rem] px-4 rounded-lg"
                >
                  ویرایش تغییرات
                </button>

                <Link
                  to="/"
                  className="btn text-[#fff] bg-[#ff2929] py-[0.5rem] px-4 rounded-lg mr-4"
                >
                  انصراف
                </Link>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditDashboardPanel;
