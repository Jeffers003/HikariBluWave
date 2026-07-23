import searchIcon from "../assets/icons/icon-search.png";
import profileIcon from "../assets/icons/icon-people.png";
import { Logo } from "./Logo";
import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      {/* LOGO */}
      <nav>
        <ul>
          <li>
            <Link to="/">INÍCIO</Link>
          </li>
          <li>
            <a href="/categorias">CATEGORÍAS</a>
          </li>
          <li>
            <a href="/produtos">PRODUTOS</a>
          </li>
          <li>
            <a href="/ofertas">OFERTAS</a>
          </li>
          <li>
            <a href="/contato">CONTATO</a>
          </li>
        </ul>
      </nav>{" "}
      {/* NAVBAR */}
      <div className="header-icons">
        <img
          style={{ width: "1rem", height: "1rem" }}
          src={searchIcon}
          alt="search"
        />
        <Link to="/login">
          <img
            style={{ width: "1rem", height: "1rem" }}
            src={profileIcon}
            alt="profile"
          />
        </Link>
      </div>{" "}
      {/* HEADER ICONS */}
    </header>
  );
}
