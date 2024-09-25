import { Heart, CreditCard, List, MessageCircle, GiftIcon, FileText } from 'lucide-react'

export default function Details() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="border-2 border-gray-800 p-8 relative">
        <h2
          className="text-4xl font-serif text-[#1a3b5d] text-right mb-12 absolute -top-6 right-4 z-10 bg-[#dfdfdf] px-10"
          style={{ zIndex: 2 }}
        >
          ¿Están listos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[{
              icon: <Heart className="w-8 h-8 text-[#d4af37]" />,
              title: "Crea tu cuenta",
              description: "Completa tus datos personales y efectúa el pago del servicio utilizando Mercado Pago."
            },
            {
              icon: <CreditCard className="w-8 h-8 text-[#d4af37]" />,
              title: "Accede al perfil",
              description: "Personaliza tu lista con una página web para que tus invitados puedan ver la información del evento."
            },
            {
              icon: <List className="w-8 h-8 text-[#d4af37]" />,
              title: "Elige tu lista",
              description: "Hay cuatro opciones, elige la que más te guste: Hogar, Viaje de Bodas, La Joda y Varieté"
            },
            {
              icon: <MessageCircle className="w-8 h-8 text-[#d4af37]" />,
              title: "Compártela",
              description: "Comparte tu lista con tus invitados y comienza a recibir regalos."
            }
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 transition-transform transform hover:scale-105">
              {step.icon}
              <h3 className="text-xl font-semibold text-[#1a3b5d] mt-4 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-serif text-[#1a3b5d] mb-4">Los invitados</h2>
          <p className="text-xl italic text-[#1a3b5d] mb-8">Cómo regalan...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
                icon: <List className="w-8 h-8 text-[#1a3b5d]" />,
                number: "1",
                title: "Eligen el regalo",
                description: "Pueden elegir la cantidad de regalos que quieran o regalar un monto libre."
              },
              {
                icon: <GiftIcon className="w-8 h-8 text-[#1a3b5d]" />,
                number: "2",
                title: "Abonan el regalo",
                description: "Mediante las plataformas de pago abonan los regalos elegidos."
              },
              {
                icon: <FileText className="w-8 h-8 text-[#1a3b5d]" />,
                number: "3",
                title: "El comprobante",
                description: "Por medio de nuestra plataforma suben el comprobante de pago."
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start p-4 transition-transform transform hover:scale-105">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 rounded-full bg-[#d4af37] flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    {step.icon}
                    <h3 className="text-xl font-semibold text-[#1a3b5d] ml-2">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
