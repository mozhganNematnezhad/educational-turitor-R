import { Navigate, useRoutes } from "react-router-dom";

import {
  ContactPage,
  Courses,
  DetailsCourses,
  Home,
  TeacherPage,
  About,
  ArticlePage,
  LoginPage,
  SiqnUpPage,
  ForgetPage,
  CartPage,
  DetailTeacherPages,
} from "Pages/Site";

import {
  UserDashboard,
  FreeCourses,
  PurchasedCourses,
  EditUserAccount,
  Ticket,
  AddTicket,
  Account,
} from "Pages/UserDashboard";

// admin-dashboards
import {
  DashBoardPanel,
  EditDashboardPanel,
  CoursesAd,
  LoginAd,
  RegisterAd,
  AcountAd,
} from "Pages/AdminDashbords";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import LayoutAdmin from "../Layout/Admin/LayoutAdmin";
import Layout from "Layout/Layout";

const Router = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Navigate replace to="/" />,
        },
        {
          path: "courses",
          children: [
            { index: true, element: <Courses /> },
            {
              // courses/detailscourse/:courseId
              path: "detailcourse/:courseId",
              element: <DetailsCourses />,
            },
          ],
        },
        {
          path: "teachers",
          children: [
            { index: true, element: <TeacherPage /> },
            {
              path: "moreinformation/:tchId",
              element: <DetailTeacherPages />,
            },
          ],
        },
        {
          path: "article/:articleId",
          element: <ArticlePage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },

        // login- signup
        {
          path: "/login",
          element: (
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          ),
        },

        {
          path: "/siqnup",
          element: (
            <PublicRoute>
              <SiqnUpPage />
            </PublicRoute>
          ),
        },
        {
          path: "/forgetpassword",
          element: (
            <PublicRoute>
              <ForgetPage />
            </PublicRoute>
          ),
        },

        // {/* user- dashboard */}
        {
          path: "/userdashboard",
          element: (
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          ),
          children: [
            { path: "", element: <Account /> },
            { path: "freecourses", element: <FreeCourses /> },
            { path: "purchasecourses", element: <PurchasedCourses /> },
            { path: "editprofile", element: <EditUserAccount /> },
            { path: "ticket", element: <Ticket /> },
            { path: "addticket", element: <AddTicket /> },
          ],
        },
      ],
    },

    // pages admind dashboard
    {
      path: "admindashboard",
      element: <LayoutAdmin />,
      children: [
        {
          path: "admindashboard",
          element: <Navigate replace to="/" />,
        },

        {
          path: "dashboardpanel",
          element: <DashBoardPanel />,
        },

        {
          path: "editdashboardpanel",
          element: <EditDashboardPanel />,
        },
        {
          path: "pages/courses",
          element: <CoursesAd />,
        },
        
        {
          path: "acount",
          element: <AcountAd />,
        },

        {
          path: "pages/courses",
          element: <h2>hiiii</h2>,
        },

        // {/* admin-auth dashboard */}
        {
          path: "login",
          element: <LoginAd />,
        },

        {
          path: "Register",
          element: <RegisterAd />,
        },
      ],
    },
  ]);

  return element;
};

export default Router;
