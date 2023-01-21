import Router from "./Routes/Router";
import Loading from "components/commen/Loading/Loading";
import { ConsumeAllDataState } from "Context/AllData/AllData";
import ScrollToTop from "components/commen/ScrollToTOP/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  const { loading } = ConsumeAllDataState();
  // console.log(loading); //false

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ToastContainer rtl={true} position="top-right" theme="colored" />
          <ScrollToTop />
          <Router />
        </>
      )}
    </>
  );
}

export default App;
