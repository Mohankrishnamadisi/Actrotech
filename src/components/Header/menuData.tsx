import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
   {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Products",
        path: "/products",
        newTab: false,
      },
      {
        id: 44,
        title: "Projects",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 41,
        title: "UI Development",
        path: "/ui-development",
        newTab: false,
      },
      {
        id: 42,
        title: "Web Application Development",
        path: "/web-application-development",
        newTab: false,
      },
      {
        id: 45,
        title: "API Development",
        path: "/api-development",
        newTab: false,
      },
      {
        id: 46,
        title: "Backend Services",
        path: "/backend-services",
        newTab: false,
      },
      {
        id: 47,
        title: "Maintenance & Support",
        path: "/maintenance-support",
        newTab: false,
      },
       {
        id: 47,
        title: "US Staffing",
        path: "/us-staffing",
        newTab: false,
      },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 33,
    title: "Careers",
    path: "/careers",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },  
];
export default menuData;
