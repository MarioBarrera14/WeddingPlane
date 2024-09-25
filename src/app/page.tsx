"use client"

import Details from "../components/detalles/details";
import Diseños from "../components/diseños/diseños";
import Header from "../components/header/header";
import Planes from "../components/plan/planes";
import Contact  from "../components/contacto/contact";

export default function Home() {
  return (
<>
<Header/>
<Details/>
<Planes/>
<Diseños/>
<Contact/>
</>
  );
}
