export default function Component() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 overflow-x-hidden">
      <h2 className="text-4xl font-serif text-[#1a3b5d] text-center mb-12 relative">
        <span className="relative z-10 bg-[#dddddd]">PLANES</span>
        <div className="absolute top-1/2 left-0 w-full h-px bg-[#d4af37] -z-10"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {[{
            title: "Prémium",
            subtitle: "Que no te falte nada",
            price: "$45.500,-",
            features: [
              "Lista de Regalo Online",
              "RSVP: confirmación de asistencia y menú",
              "Link de Micrositio para compartir",
              "Álbum de Fotos",
              "Diseños Premium para tu Micrositio",
              "Generador de tarjetas para compartir",
              "Checkout Mercadopago para tus regalos",
              "Agenda fecha en calendario",
              "Acceso directo a ubicación del Evento",
              "Cronograma del evento",
              "Lista de SPOTIFY"
            ]
          },
          {
            title: "Básico",
            subtitle: "Lo necesario",
            price: "$35.500,-",
            features: [
              "Lista de Regalo Online",
              "RSVP: confirmación de asistencia y menú",
              "Link de Micrositio para compartir",
              "Álbum de Fotos",
              "Diseños Base para tu Micrositio"
            ]
          }
        ].map((plan, index) => (
          <div key={index} className="bg-[#e6e0d4] p-8 rounded-lg shadow-md flex flex-col h-full">
            <h3 className="text-3xl font-serif text-[#1a3b5d] mb-2">{plan.title}</h3>
            <p className="text-xl italic text-[#1a3b5d] mb-6">{plan.subtitle}</p>
            <ul className="space-y-2 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm text-gray-700">{feature}</li>
              ))}
            </ul>
            <p className="text-2xl font-bold text-[#1a3b5d] mb-6">{plan.price}</p>
            <div className="mt-auto">
              <button className="w-full bg-[#1a3b5d] text-white py-3 rounded-md hover:bg-[#152f4a] transition-colors duration-300">
                Arma tu lista!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
