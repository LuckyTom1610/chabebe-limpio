import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MacetasMedianasPage from "./components/MacetasMedianasPage";
import MacetasGrandesPage from "./components/MacetasGrandesPage";
import SetdemacetasPage from "./components/setdemacetasPage";
import SistemasdeGoteoPage from "./components/SistemasdeGoteoPage";
import ComposterasPage from "./components/ComposterasPage";
import AccesoriosPage from "./components/AccesoriosPage";
import MacetasconPlantasPage from "./components/MacetasconPlantasPage";
import Home from "./components/Home";
import CarritoPage from "./components/CarritoPage";
import { CartProvider } from "./context/CartContext";
import WhatsAppButton from "./components/WhatsAppButton";
import SembremosEnCasaPage from "./components/SembremosEnCasaPage"; // 👈 NUEVO
import SobreNosotrosPage from "./components/SobreNosotrosPage";
import EnviosYGarantiasPage from "./components/EnviosYGarantiasPage";
import ContactoPage from "./components/ContactoPage";
import IdeasDecoracionPage from "./components/IdeasDecoracionPage";
import CuidadoPlantas from "./components/CuidadoPlantas";
import BuscarPage from "./components/BuscarPage";

function App() {
  return (
     
      <CartProvider>
      <Navbar />
      <main style={{ paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogos/macetas-medianas" element={<MacetasMedianasPage />} />
          <Route path="/catalogos/macetas-grandes" element={<MacetasGrandesPage />} />
          <Route path="/catalogos/set-de-macetas" element={<SetdemacetasPage />} />
          <Route path="/catalogos/Sistemas-de-Goteo" element={<SistemasdeGoteoPage />} />
          <Route path="/catalogos/Composteras" element={<ComposterasPage />} />
          <Route path="/catalogos/Accesorios" element={<AccesoriosPage />} />
          <Route path="/catalogos/Macetas con Plantas" element={<MacetasconPlantasPage />} />
          <Route path="/carrito" element={<CarritoPage />} />
           <Route path="/Sembremos-en-Casa" element={<SembremosEnCasaPage />} /> {/* 👈 NUEVA RUTA */}
           <Route path="/Sobre-nosotros" element={<SobreNosotrosPage />} />
          <Route path="/servicios/envios-y-garantias" element={<EnviosYGarantiasPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/inspiracion/ideas-decoracion" element={<IdeasDecoracionPage />} />
           <Route path="/inspiracion/cuidado-plantas" element={<CuidadoPlantas />} />
           <Route path="/buscar" element={<BuscarPage />} />
        </Routes>
      </main>
      <WhatsAppButton /> {/* Siempre visible */}
    </CartProvider>
    );
}
export default App;