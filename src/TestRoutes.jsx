import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dummy() {
  return <h1>✅ Funciona cuidado-plantas</h1>;
}

export default function TestRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/inspiracion/cuidado-plantas" element={<Dummy />} />
      </Routes>
    </BrowserRouter>
  );
}