import Balloon from "./Balloon";
import "./Hero.css";
import { Button } from "./Button";
import { HeroImage } from "./HeroImage";
export function Hero() {
  return (
    <section>
      <div className="hero-container">
        <div className="hero-hero">
          <Balloon />
          <div className="hero-title-container">
            <h1 className="hero-title">
              TECNOLOGIA <br />
              <span className="hero-title-blue">DO FUTURO</span> <br />
              NA SUA MÃO
            </h1>
          </div>
          {/* TITULO */}

          <p className="hero-subtitle">
            Produtos inovadores que conectam você <br />
            ao que há de mais avançado no mundo.
          </p>
          {/* SUBTITULO */}
          <Button />
        </div>
        <div className="hero-image-container">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
