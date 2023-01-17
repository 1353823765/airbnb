import React from "react";
import {Navigate} from "react-router-dom"
//路由懒加载
const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Detail = React.lazy(() => import("@/views/detail"));
export const routers = [
{
  path:"/",
  element:<Navigate to="/home"></Navigate>
},

  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/entire",
    element: <Entire></Entire>,
  },
  {
    path: "/detail",
    element: <Detail></Detail>,
  },
];
