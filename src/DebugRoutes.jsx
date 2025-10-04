import { useLocation } from "react-router-dom";

export default function DebugRoutes() {
  const location = useLocation();
  console.log("Ruta actual:", location.pathname);
  return null;
}