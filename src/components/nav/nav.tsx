"use client";
import { dancingScript } from "@/config/fonts";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState<string>("INICIO");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#ddd2bc] p-4 flex flex-col sm:flex-row items-center justify-between relative">
            <div className="flex items-center justify-between w-full sm:w-auto">
            <h1
  className={`text-3xl font-serif text-[#8b7d6b] ${dancingScript.className} mr-4`}
  style={{ marginLeft: '120px' }} // Ajusta el valor según sea necesario
>
  TU BODA
</h1>
        <button
          className="sm:hidden text-[#8b7d6b] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto items-center justify-center mt-4 sm:mt-0 sm:ml-0`} 
      >
        {["INICIO", "LISTA DE BODAS", "MI CUENTA"].map((item) => (
          <Link
            key={item}
            href="#"
            className={`text-sm ${
              activeItem === item
                ? "text-[#8b7d6b] border-b-2 border-[#8b7d6b]"
                : "text-[#8b7d6b] hover:text-[#6a5d4d]"
            }`}
            onClick={() => {
              setActiveItem(item);
              setIsMenuOpen(false);
            }}
          >
            {item}
          </Link>
        ))}
      </div>
      <Link
        href="#contact"
        className="hidden sm:flex flex-col items-center text-[#d1c7ba] hover:text-[#6a5d4d] transition-colors duration-300 absolute right-6 top-16"
        style={{ zIndex: 10 }}
      >
        <div
          className="transform -rotate-90 whitespace-nowrap bg-[#b19c82] px-2 py-1"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
        >
          CONTÁCTANOS
        </div>
        <div className="w-px h-16 bg-[#8b7d6b] ml-6 -mt-4"></div>
      </Link>

      <Link
        href="#contact"
        className="sm:hidden w-full mt-4 text-center text-[#8b7d6b] px-4 py-2 rounded-md"
      >
        CONTÁCTANOS
      </Link>
    </nav>
  );
}