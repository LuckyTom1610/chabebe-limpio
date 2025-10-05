import React from 'react';

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center justify-center text-center p-6 h-[calc(100vh-4rem)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondo-chabeve.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <img
          src="/logo.png"
          alt="Logo Chabeve"
          className="h-40 object-contain mb-6 mx-auto"
        />
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg mb-4">
          Bienvenido a Chabeve
        </h1>
        <p className="text-lg text-white">Donde las macetas hablan por ti 🌱</p>
      </div>
    </main>
  );
}
