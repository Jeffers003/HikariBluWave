import { Logo } from "./Logo";
import "./Header.css";

export function Header() {
  return (
    <header>
      <nav>
        <div>
          <Logo />
        </div>
        <ul>
          <li>
            <a href="/home">INÍCIO</a>
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
        <div className="header-icons">
          <img src="../assets/icons/icon-search.png" alt="search" />
          <img src="../assets/icons/icon-people.png" alt="profile" />
        </div>
      </nav>
    </header>
  );
}
