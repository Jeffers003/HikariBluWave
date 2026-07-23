import "./Categorias.css";
import cardSetup from "../assets/svg/card-setup.svg";
import cardGamer from "../assets/svg/card-gamer.svg";
import cardSmart from "../assets/svg/card-smart.svg";
import cardAudio from "../assets/svg/card-audio.svg";

const callouts = [
  {
    description: "Work from home accessories",
    imageSrc: cardAudio,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    description: "Journals and note-taking",
    imageSrc: cardSetup,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    description: "Daily commute essentials",
    imageSrc: cardGamer,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    description: "Daily commute essentials",
    imageSrc: cardSmart,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Categorias() {
  return (
    <div className="bg-#010308">
      <div className="mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl ">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:space-y-0 lg:gap-x-6 grid-flow-col">
            {callouts.map((callout) => (
              <div className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg  object-cover group-hover:opacity-75 max-sm:h-80 "
                />
                <h1 className="cards-categorias">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                  </a>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
