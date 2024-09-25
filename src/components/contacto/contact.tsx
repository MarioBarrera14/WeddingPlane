"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    phone: "",
    weddingDate: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-stretch gap-12">
        {/* Formulario */}
        <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-4xl font-serif text-[#1a3b5d] text-center mb-8 relative overflow-hidden">
            <span className="relative z-10 bg-[#dddddd] px-4">Contáctanos</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#d4af37] -z-10"></div>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 flex-grow"
          >
            <div className="space-y-2">
              <Label htmlFor="names" className="text-[#1e3a5f]">
                Nombres de los novios
              </Label>
              <Input
                id="names"
                name="names"
                value={formData.names}
                onChange={handleChange}
                placeholder="Ej: María y Juan"
                className="border-[#1e3a5f]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#1e3a5f]">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tucorreo@ejemplo.com"
                className="border-[#1e3a5f]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[#1e3a5f]">
                Teléfono
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Ej: +56 9 1234 5678"
                className="border-[#1e3a5f]"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weddingDate" className="text-[#1e3a5f]">
                Fecha de la boda
              </Label>
              <Input
                id="weddingDate"
                name="weddingDate"
                type="date"
                value={formData.weddingDate}
                onChange={handleChange}
                className="border-[#1e3a5f]"
                required
              />
            </div>

            <div className="space-y-2 flex-grow">
              <Label htmlFor="message" className="text-[#1e3a5f]">
                Mensaje
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos más sobre tu boda y cómo podemos ayudarte..."
                className="border-[#1e3a5f] h-full min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="bg-[#1e3a5f] hover:bg-[#2c5282] text-white mt-4"
            >
              Enviar mensaje
            </Button>
          </form>
        </div>

        {/* Imagen */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-full min-h-[400px]">
            <Image
              src="/Boda.webp"
              alt="Imagen de ejemplo"
              className="rounded-lg shadow-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}