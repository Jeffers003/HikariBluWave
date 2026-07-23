const products = [
  {
    id: 1,
    name: "MOUSE-PAD",
    href: "#",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_702786-MLA104145962926_012026-F-mouse-pad-hoopson-gamer-speed-anti-derrapante-360x280mm-3mm.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "CONTROLE COM GIROSCOPIO",
    href: "#",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_919506-MLB109660489235_032026-F-qrd-spark-n5-controle-sem-fio-para-ps4ps3pcios-joystick.webp",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "CADEIRA GAMER",
    href: "#",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_652344-MLA99939258617_112025-F.webp",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "HAED SET AZUL",
    href: "#",
    imageSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_806004-MLA112732831244_062026-F.webp",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
];

export default function Produtos() {
  return (
    <div className="bg-#010308">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
