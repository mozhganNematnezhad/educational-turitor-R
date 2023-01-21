import React from "react";

const Loader = () => {
  

  return (
    <>
      {/* {loading ? ( */}
        <div className=" mx-auto fixed top-0 right-0 bg-black/70 flex justify-center items-center w-full h-full z-[2000]">
          <img
            src={require("../../../Assets/images/spinner/Spinner.gif")}
            className=" w-[20%]"
            alt="loading"
          />
        </div>
      {/* ) : null} */}
    </>
  );
};

export default Loader;
