import Image from "next/image";

const Diseños: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-serif text-[#1a3b5d] text-center mb-12 relative overflow-hidden">
        <span className="relative z-10 bg-[#dddddd] whitespace-nowrap">ELEGÍ TU DISEÑO</span>
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#d4af37] -z-10"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 row-span-2">
          <div className="bg-gray-200 rounded-lg overflow-hidden h-full relative">
            <Image
              src="/img/Celu.jpg?height=600&width=400"
              alt="Base design"
              width={400}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gray-800 text-white px-2 py-1 text-xs sm:text-sm rounded">
              BASE
            </div>
          </div>
        </div>

        {[
          {
            src: "/img/plantilla2.jpg?height=300&width=400",
            alt: "Flores design",
            title: "FLORES",
            subtitle: "NOS VAMOS A CASAR",
            names: "María & Juan",
            date: "16 de abril 2023",
          },
          {
            src: "/img/plantilla3.jpg?height=300&width=400",
            alt: "Hojas design",
            title: "HOJAS",
            subtitle: "NOS VAMOS A CASAR",
            names: "María & Juan",
            date: "16 de abril 2023",
          },
          {
            src: "/img/plantilla4.jpg?height=300&width=400",
            alt: "Manantial design",
            title: "MANANTIAL",
            subtitle: "Nos vamos a casar",
            names: "",
            date: "",
          },
          {
            src: "/img/plantilla5.jpg?height=300&width=400",
            alt: "Marfil design",
            title: "MARFIL",
            subtitle: "NOS VAMOS A CASAR",
            names: "María & Juan",
            date: "16 de abril 2023",
          },
        ].map((design, index) => (
          <div key={index} className="col-span-1 row-span-1">
            <div className="bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src={design.src}
                alt={design.alt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-gray-800 text-white px-2 py-1 text-sm rounded">
                {design.title}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-serif mb-2">{design.subtitle}</h2>
                  {design.names && <p className="text-xl">{design.names}</p>}
                  {design.date && <p className="text-sm mt-2">{design.date}</p>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diseños;
