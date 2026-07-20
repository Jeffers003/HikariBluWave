import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Produtos } from "../pages/Produtos";
import { Categorias } from "../pages/Categorias";
import { Contato } from "../pages/Contato";
import { Ofertas } from "../pages/Ofertas";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/produtos",
    Component: Produtos,
  },
  {
    path: "/categorias",
    Component: Categorias,
  },
  {
    path: "/contato",
    Component: Contato,
  },
  {
    path: "/ofertas",
    Component: Ofertas,
  },
]);
