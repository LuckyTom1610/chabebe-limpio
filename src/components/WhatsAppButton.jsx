import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/593982287640?text=Hola%20estoy%20interesado%20en%20sus%20macetas%20🌱"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded-l-full shadow-lg hover:bg-green-600 transition duration-300 z-50 flex items-center justify-center"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}