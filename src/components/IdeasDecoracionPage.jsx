import React, { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import macetasInspiracion from "../data/macetasParaInspiracion";
import { motion } from "framer-motion";
import html2canvas from "html2canvas"; // Asegúrate de tenerlo instalado
import plantasInspiracion from "../data/plantasInspiracion";

export default function IdeasDecoracionPage() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [draggables, setDraggables] = useState([]);
  const canvasRef = useRef(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setBackgroundImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
  });

  const handleAddMaceta = (maceta) => {
    const newMaceta = {
      id: `${maceta.id}-${Date.now()}`,
      src: maceta.imagen,
      width: 100, // tamaño inicial
      x: 0,
      y: 0,
    };
    setDraggables((prev) => [...prev, newMaceta]);
  };

const handleAddPlanta = (planta) => {
  const nuevaPlanta = {
    id: `${planta.id}-${Date.now()}`,
    src: planta.imagen,
    width: 100,
    tipo: "planta",
  };
  setDraggables((prev) => [...prev, nuevaPlanta]);
};


  const updateSize = (id, delta) => {
    setDraggables((prev) =>
      prev.map((m) =>
        m.id === id ? { ...m, width: Math.max(40, m.width + delta) } : m
      )
    );
  };

  const clearCanvas = () => {
    setDraggables([]);
    setBackgroundImage(null);
  };

  const saveImage = async () => {
    if (!canvasRef.current) return;

    const canvasElement = canvasRef.current;
    const canvasImage = await html2canvas(canvasElement);
    const link = document.createElement("a");
    link.download = "mi-decoracion.png";
    link.href = canvasImage.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        🌿 Ideas de Decoración
      </h1>

      {!backgroundImage ? (
        <div
          {...getRootProps()}
          className={`border-4 border-dashed border-green-400 p-12 text-center rounded-lg cursor-pointer transition ${
            isDragActive ? "bg-green-50" : "bg-gray-50"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-lg text-gray-600">
            Arrastra una imagen aquí o haz clic para subir tu foto 📷
          </p>
        </div>
      ) : (
        <>
          {/* 🎨 ZONA DE DISEÑO */}
          <div className="relative w-full h-[600px] bg-gray-200 border rounded-lg overflow-hidden mb-6">
            <div ref={canvasRef} className="w-full h-full relative">
              <img
                src={backgroundImage}
                alt="Decoración"
                className="w-full h-full object-contain"
              />

              {draggables.map((maceta) => (
                <motion.div
  key={maceta.id}
  drag
  className="group absolute top-0 left-0 cursor-move"
  style={{ zIndex: 10, width: maceta.width }}
>
  <img
    src={maceta.src}
    alt=""
     className="w-full h-auto pointer-events-none select-none drop-shadow-md"
    draggable={false}
  />

  {/* Botones de tamaño - aparecen solo en hover */}
  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto bg-white bg-opacity-70 rounded px-1 py-0.5 shadow-md flex gap-1">
    <button
      onClick={() => updateSize(maceta.id, -10)}
      className="text-xs px-2 py-0.5 bg-gray-300 rounded hover:bg-gray-400"
    >
      −
    </button>
    <button
      onClick={() => updateSize(maceta.id, 10)}
      className="text-xs px-2 py-0.5 bg-gray-300 rounded hover:bg-gray-400"
    >
      +
    </button>
  </div>
</motion.div>
              ))}
            </div>
          </div>

          {/* BOTONES */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={clearCanvas}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Limpiar todo
            </button>

            <button
              onClick={saveImage}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Guardar diseño
            </button>
          </div>

          {/* 🎯 Macetas para elegir */}
          <div className="bg-white py-4 px-2 rounded shadow-inner overflow-x-auto flex gap-4">
            {macetasInspiracion.map((maceta) => (
              <img
                key={maceta.id}
                src={maceta.imagen}
                alt={maceta.nombre}
                title={maceta.nombre}
                className="h-20 w-auto object-contain cursor-pointer hover:scale-105 transition"
                onClick={() => handleAddMaceta(maceta)}
              />
            ))}
          </div>

            {/* 🌱 Plantas para elegir */}
<div className="bg-white py-4 px-2 rounded shadow-inner overflow-x-auto flex gap-4 mt-4">
  {plantasInspiracion.map((planta) => (
    <img
      key={planta.id}
      src={planta.imagen}
      alt={planta.nombre}
      title={planta.nombre}
      className="h-20 w-auto object-contain cursor-pointer hover:scale-105 transition"
      onClick={() => handleAddPlanta(planta)}
    />
  ))}
</div>

        </>
      )}
    </div>
  );
}