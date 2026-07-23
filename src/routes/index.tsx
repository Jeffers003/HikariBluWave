import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Produtos from "../pages/Produtos";
import Categorias from "../pages/Categorias";
import Contato from "../pages/Contato";
import { Ofertas } from "../pages/Ofertas";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "produtos",
        Component: Produtos,
      },
      {
        path: "categorias",
        Component: Categorias,
      },
      {
        path: "contato",
        Component: Contato,
      },
      {
        path: "ofertas",
        Component: Ofertas,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);
