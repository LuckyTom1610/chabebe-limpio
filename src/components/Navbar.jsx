import React, { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const closeTimeout = useRef(null);
  const { cart } = useContext(CartContext);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo izquierda */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo Chabeve" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-gray-800">Chabeve</span>
        </div>

        {/* Menú centrado */}
        <ul className="hidden md:flex flex-1 justify-center space-x-6 font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-green-600">
              Inicio
            </Link>
          </li>

          {/* Catálogo con dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              setDropdownOpen("catalogo");
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => setDropdownOpen(null), 250);
            }}
          >
            Catálogo
            <ul
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded transition-opacity duration-200 ${
                dropdownOpen === "catalogo"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/macetas-medianas">Macetas Medianas</Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/macetas-grandes">Macetas Grandes</Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/set-de-macetas">Set de Macetas</Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/Macetas con Plantas">
                  Macetas con Plantas
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/Sistemas-de-Goteo">Sistemas de Goteo</Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/Composteras">Composteras</Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/catalogos/Accesorios">Accesorios</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/sembremos-en-casa" className="hover:text-green-600">
              Sembremos en Casa
            </Link>
          </li>
          <li>
            <Link to="/sobre-nosotros" className="hover:text-green-600">
              Sobre Nosotros
            </Link>
          </li>

          {/* Inspiración con dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              setDropdownOpen("inspiracion");
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => setDropdownOpen(null), 250);
            }}
          >
            Inspiración
            <ul
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded transition-opacity duration-200 ${
                dropdownOpen === "inspiracion"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/inspiracion/ideas-decoracion">Ideas de Decoración</Link>
              </li>
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/inspiracion/cuidado-plantas">Cuidado de Plantas</Link>
              </li>
            </ul>
          </li>

          {/* Servicios con dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              setDropdownOpen("servicios");
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => setDropdownOpen(null), 250);
            }}
          >
            Servicios
            <ul
              className={`absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded transition-opacity duration-200 ${
                dropdownOpen === "servicios"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <li className="px-4 py-2 hover:bg-green-50">
                <Link to="/servicios/envios-y-garantias">
                  Envíos y Garantías
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contacto" className="hover:text-green-600">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Bloque derecho - buscador y carrito */}
        <div className="hidden md:flex items-center space-x-4 justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="border rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <span className="absolute right-3 top-1.5 text-gray-400">🔍</span>
          </div>

          <Link
            to="/carrito"
            className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
          >
            🛒 Carrito {cart.length > 0 ? `(${cart.length})` : ""}
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
{mobileMenuOpen && (
  <div className="md:hidden bg-white shadow-md">
    <ul className="flex flex-col space-y-2 p-4 font-medium text-gray-700">
      <li><Link to="/" onClick={handleMobileLinkClick} className="hover:text-green-600 cursor-pointer">Inicio</Link></li>

      {/* Catálogo */}
      <li>
        <button onClick={() => setDropdownOpen(dropdownOpen === "catalogo" ? null : "catalogo")} className="flex justify-between w-full">
          Catálogo <span>{dropdownOpen === "catalogo" ? "▲" : "▼"}</span>
        </button>
        {dropdownOpen === "catalogo" && (
          <ul className="pl-4 mt-2 space-y-1">
            <li><Link to="/catalogos/macetas-medianas" onClick={handleMobileLinkClick}>Macetas Medianas</Link></li>
            <li><Link to="/catalogos/macetas-grandes" onClick={handleMobileLinkClick}>Macetas Grandes</Link></li>
            <li><Link to="/catalogos/set-de-macetas" onClick={handleMobileLinkClick}>Set de Macetas</Link></li>
            <li><Link to="/catalogos/Macetas con Plantas" onClick={handleMobileLinkClick}>Macetas con Plantas</Link></li>
            <li><Link to="/catalogos/Sistemas-de-Goteo" onClick={handleMobileLinkClick}>Sistemas de Goteo</Link></li>
            <li><Link to="/catalogos/Composteras" onClick={handleMobileLinkClick}>Composteras</Link></li>
            <li><Link to="/catalogos/Accesorios" onClick={handleMobileLinkClick}>Accesorios</Link></li>
          </ul>
        )}
      </li>

      {/* Sembremos en Casa */}
      <li><Link to="/sembremos-en-casa" onClick={handleMobileLinkClick}>Sembremos en Casa</Link></li>

      {/* Inspiración */}
      <li>
        <button onClick={() => setDropdownOpen(dropdownOpen === "inspiracion" ? null : "inspiracion")} className="flex justify-between w-full">
          Inspiración <span>{dropdownOpen === "inspiracion" ? "▲" : "▼"}</span>
        </button>
        {dropdownOpen === "inspiracion" && (
          <ul className="pl-4 mt-2 space-y-1">
            <li><Link to="/inspiracion/ideas-decoracion" onClick={handleMobileLinkClick}>Ideas de Decoración</Link></li>
            <li><Link to="/inspiracion/cuidado-plantas" onClick={handleMobileLinkClick}>Cuidado de Plantas</Link></li>
          </ul>
        )}
      </li>

      {/* Sobre Nosotros */}
      <li><Link to="/sobre-nosotros" onClick={handleMobileLinkClick}>Sobre Nosotros</Link></li>

      {/* Servicios (móvil dropdown corregido) */}
      <li>
        <button onClick={() => setDropdownOpen(dropdownOpen === "servicios" ? null : "servicios")} className="flex justify-between w-full">
          Servicios <span>{dropdownOpen === "servicios" ? "▲" : "▼"}</span>
        </button>
        {dropdownOpen === "servicios" && (
          <ul className="pl-4 mt-2 space-y-1">
            <li><Link to="/servicios/envios-y-garantias" onClick={handleMobileLinkClick}>Envíos y Garantías</Link></li>
          </ul>
        )}
      </li>

      {/* Contacto */}
      <li><Link to="/contacto" onClick={handleMobileLinkClick}>Contacto</Link></li>

      {/* Barra de búsqueda (movil) */}

        <li>
  <input
    type="text"
    placeholder="Buscar..."
    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
  />
</li>
      {/* Carrito */}
      
      <li>
        <Link to="/carrito" onClick={handleMobileLinkClick} className="block text-center w-full bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
          🛒 Carrito {cart.length > 0 ? `(${cart.length})` : ""}
        </Link>
      </li>
    </ul>
  </div>
)}
 </nav>
  );
}