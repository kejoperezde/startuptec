"use client"; 
// Hola yo Dulce hice esta y le movi al css

import { useState } from "react";
import { useRouter } from "next/navigation";
import { data as initialData } from "./api/DB.js"; 
import './globals.css';

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(initialData); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleDelete = (id) => {
    const updatedData = data.filter((startup) => startup.id !== id); 
    setData(updatedData); 
  };

  const handleEdit = (id) => {
    router.push(`/editar/${id}`); // Aqui debe de ser a editar pero no se donde esta esa pagina ajaj
  };

  //Bsqueda
  const filteredData = data.filter(startup =>
    startup.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="row p-0 h-100">
      {/* Columna izquierda*/}
      <div className="col-4 py-4 px-5 bg-left"style={{ flexShrink: 0 }}>
        <div className="row h-100 rounded-3 bg-secondary p-4 d-flex flex-column">
          <div className="col p-0">
            <div className="d-flex flex-row">
              <h1>Startup TEC</h1>
            </div>
            <div className="d-flex flex-row mb-4">
              <p className="pt-4 fs-4">
                Es una plataforma digital diseñada para centralizar y facilitar
                la búsqueda de proyectos emprendedores creados por estudiantes y
                profesores.
              </p>
            </div>
            
            <div className="d-flex flex-column">
              <div className="d-flex flex-row mb-4">
                <form className="w-100">
                  <div className="mb-3 search-bar">
                    <input
                      className="form-control form-control-lg"
                      id="nombre"
                      placeholder="Buscar"
                      value={searchQuery} 
                      onChange={handleSearchChange} 
                    />
                  </div>
                </form>
              </div>
              
              {/* Botón "Añadir nueva"*/}
              <div className="mt-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => router.push("/crear")}
                >
                  Añadir nueva
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="col-8 py-4 px-5" style={{ backgroundColor: '#6c757d'}} >
        <div className="row h-100 rounded-3 bg-primary p-4">
          <div className="row row-cols-1 row-cols-md-4 g-4 overflow-auto">
            {filteredData.slice(0, 12).map((startup) => (
              <div key={startup.id} className="col">
                <div className="card text-center p-3 card-custom" style={{ height: '300px'}} >
                  <img
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    className="card-img-top mx-auto mb-3"
                  />
                  <h5 className="card-title">{startup.name}</h5>
                  <div className="d-flex justify-content-between mt-auto">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(startup.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(startup.id)}
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
