import { Outlet } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Authors from "./pages/Authors.jsx";
import Books from "./pages/Books.jsx";
import Stores from "./pages/Stores.jsx";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <Shop />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "authors",
        element: <Authors />,
      },
      {
        path: "stores",
        element: <Stores />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <div>
        <Shop />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "books",
        element: <Books />,
      },
    ],
  },
];

export default routes;
