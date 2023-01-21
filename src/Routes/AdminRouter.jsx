import { Route, Navigate, useRoutes } from "react-router-dom";

// admin-dashboards
import {
  EcommerceAd,
  LoginAd,
  RegisterAd,
  AcountAd,
  CoursesAd,
} from "Pages/AdminDashbords";
import LayoutAdmin from "Layout/Admin/LayoutAdmin";

const AdminRouter = () => {
  let element = useRoutes([
    // {/* admin-auth dashboard */}
   
    {
        path: "/admindashboard/login",
        element: <LoginAd />,
      },

      {
        path: "/admindashboard",
        element: <Navigate replace to="/admindashboard/login" />,
      },
      {
        path: "/admindashboard/Register",
        element: <RegisterAd />,
      },

    // pages admin

    {
      path: "/admindashboard",
      element: <LayoutAdmin />,
      children: [
        {
          path: "ecommerce",
          element: <EcommerceAd />,
        },
        {
          path: "acount",
          element: <AcountAd />,
        },

        {
          path: "/pages/course",
          element: <CoursesAd />,
        },


      ],
    },

    
  ]);

  return element;
};

export default AdminRouter;
