import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { FiPieChart, FiShoppingBag } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiPlayListAddFill, RiStockLine } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  BsBarChart,
  BsJournalBookmark,
  BsJournalPlus,
  BsKanban,
} from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { BiColorFill, BiUserPlus } from "react-icons/bi";
import { GiLouvrePyramid } from "react-icons/gi";
import { MdLeakAdd, MdOutlinePlayLesson } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbNewSection } from "react-icons/tb";

export const MenuItemsAd = [
  // داشبورد
  {
    title: " داشبورد",
    subMenus: [
      {
        titlesub: "داشبورد پنل",
        path: "dashboardpanel",
        icon: <FiShoppingBag />,
      },
    ],
  },
  {
    title: " مدیریت پروفایل",
    subMenus: [
      {
        titlesub: " ویرایش پروفایل",
        path: "editdashboardpanel",
        icon: <FiShoppingBag />,
      },
    ],
  },
  //   pages
  {
    title: "صفحات",
    subMenus: [
      {
        titlesub: " ترم ها ",
        path: "pages/courses",
        icon: <MdOutlinePlayLesson />,
      },
      {
        titlesub: " درس ها ",
        path: "pages/lessons",
        icon: <BsJournalBookmark />,
      },
      {
        titlesub: "کارمندان",
        path: "pages/employes",
        icon: <IoMdContacts />,
      },
      {
        titlesub: "دانشجویان",
        path: "pages/students",
        icon: <RiContactsLine />,
      },
      {
        titlesub: "اخبار",
        path: "pages/news",
        icon: <IoNewspaperOutline />,
      },
    ],
  },
  //   add new
  {
    title: " افزودن داده های جدید",
    subMenus: [
      {
        titlesub: " ترم  ",
        path: "adddata/courses",

        icon: <RiPlayListAddFill />,
      },
      {
        titlesub: " درس  ",
        path: "adddata/lesson",

        icon: <BsJournalPlus />,
      },
      {
        titlesub: "خبر",
        path: "adddata/news",

        icon: <TbNewSection />,
      },
      {
        titlesub: "کارمند",
        path: "adddata/employees",

        icon: <AiOutlineUsergroupAdd />,
      },
      {
        titlesub: "دانشجو",
        path: "adddata/students",

        icon: <BiUserPlus />,
      },
      {
        titlesub: " دانشجو و دوره",
        path: "adddata/studenttocourse",
        icon: <MdLeakAdd />,
      },
    ],
  },
  // application
  {
    title: "اپلیکیشن ها",
    subMenus: [
      {
        titlesub: "ماشین حساب",
        path: "calendar",
        icon: <AiOutlineCalendar />,
      },
      {
        titlesub: "کانبان",
        path: "kanban",
        icon: <BsKanban />,
      },
      {
        titlesub: "ادیتور",
        path: "editor",
        icon: <FiEdit />,
      },
      {
        titlesub: "پالت-رنگ",
        path: "color-picker",
        icon: <BiColorFill />,
      },
    ],
  },
  //   charts
  {
    title: "نمودارها",
    subMenus: [
      {
        titlesub: "خطی",
        path: "line",
        icon: <AiOutlineStock />,
      },
      {
        titlesub: "مستطیلی",
        path: "area",
        icon: <AiOutlineAreaChart />,
      },

      {
        titlesub: "میله ای",
        path: "bar",
        icon: <AiOutlineBarChart />,
      },
      {
        titlesub: "دایره ای",
        path: "pie",
        icon: <FiPieChart />,
      },
      {
        titlesub: "تکنیکال",
        path: "financial",
        icon: <RiStockLine />,
      },
      {
        titlesub: "color-mapping",
        path: "",
        icon: <BsBarChart />,
      },
      {
        titlesub: "pyramid",
        path: "",
        icon: <GiLouvrePyramid />,
      },
      {
        titlesub: "stacked",
        path: "",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];




export const boxDashboard =[
  {
    text1:"124 نفر",
    text2:"دانشجویان",
    color :"bg-red-300"
  },
  {
    text1:"109نفر",
    text2:"اساتید",
    color :"bg-blue-300"
  },
  {
    text1:"116ترم",
    text2:"ترم ",
    color :"bg-yellow-300"
  },
  {
    text1:"124 خبرو مقاله",
    text2:"خبر ومقاله ",
    color :"bg-orange-300"
  }


]






export const EditDataDashbord = [
  
  {
    label: "نام کاربری  ",
    id: "fullName",
    name: "fullName",
    type:"text"
  },
  {
    label: " وضعیت  ",
    id: "status",
    name: "status",
    type:"text"
  },
  {
    label: " نقش  ",
    id: "role",
    name: "role",
    type:"text"
  },

  {
    label: "  ایمیل ",
    id: "email",
    name: "email",
    type:"email"
  },

  {
    label: " کد ملی ",
    id: "nationalId",
    name: "nationalId",
    type:"text"
  },

  {
    label: " تلفن همراه ",
    id: "phoneNumber",
    name: "phoneNumber",
    type:"number"
  },
  {
    
    label: "  تاریح تولد ",
    id: "birthDate",
    name: "birthDate",
    type:"text"
  },
  {
    
    label: "   آدرس محل کار ",
    id: "address work",
    name: "address work",
    type:"text"
  },
  
];
