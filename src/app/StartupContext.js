"use client";

import { createContext, useContext, useState } from "react";
import { data as initialData } from "./api/DB.js";

// Crear el contexto
const StartupContext = createContext();

// Proveedor del contexto
export function StartupProvider({ children }) {
  const [data, setData] = useState(initialData);

  // Métodos para manejar el estado
  const addStartup = (startup) => {
    setData((prevData) => [...prevData, startup]);
  };

  const deleteStartup = (id) => {
    setData((prevData) => prevData.filter((startup) => startup.id !== id));
  };

  const updateStartup = (id, updatedStartup) => {
    setData((prevData) =>
      prevData.map((startup) =>
        startup.id === id ? { ...startup, ...updatedStartup } : startup
      )
    );
  };

  return (
    <StartupContext.Provider value={{ data, addStartup, deleteStartup, updateStartup }}>
      {children}
    </StartupContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useStartups() {
  return useContext(StartupContext);
}
