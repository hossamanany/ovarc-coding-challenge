import { Outlet } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Authors from "./pages/Authors.jsx";
import Books from "./pages/Books.jsx";
import Stores from "./pages/Stores.jsx";
import Landing from "./pages/Landing.jsx";
import AuthorsView from "./pages/AuthorsView.jsx";
import BooksView from "./pages/BooksView.jsx";
import StoresView from "./pages/StoresView.jsx";

const routes = [
  {
    path: "/",
    element: (
      <div>
        <Landing />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "books",
        element: <BooksView />,
      },
      {
        path: "authors",
        element: <AuthorsView />,
      },
      {
        path: "stores",
        element: <StoresView />,
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
];

export default routes;
