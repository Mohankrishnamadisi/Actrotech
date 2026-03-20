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
        path: "/blog",
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
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Web Application Development",
        path: "/contact",
        newTab: false,
      },
      {
        id: 45,
        title: "API Development",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 46,
        title: "Backend Services",
        path: "/signin",
        newTab: false,
      },
      {
        id: 47,
        title: "Maintenance & Support",
        path: "/signup",
        newTab: false,
      },
      {
        id: 48,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
  // {
  //   id: 3,
  //   title: "Blog",
  //   path: "/blog",
  //   newTab: false,
  // },
  {
    id: 33,
    title: "Careers",
    path: "/blog",
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
