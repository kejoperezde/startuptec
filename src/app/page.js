"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import { data as initialData } from "./api/DB.js";
// import "../globals.css";
import { useStartups } from "./StartupContext";

export default function Home() {
  const router = useRouter();
  // const [data, setData] = useState(initialData);
  const { data } = useStartups();
  const [searchQuery, setSearchQuery] = useState("");


  // const searchParams = useSearchParams();

  /* const deleteId = searchParams.get("deleteId"); // ID recibido para eliminar
  const updatedId = searchParams.get("id"); // Startup editada
  const updatedName = searchParams.get("name");
  const updatedLogo = searchParams.get("logo");
  const updatedSlogan = searchParams.get("slogan");
  const updatedDescription = searchParams.get("description"); */

  /* useEffect(() => {
    if (deleteId) {
      setData((prevData) =>
        prevData.filter((startup) => startup.id !== parseInt(deleteId))
      );
      router.replace("/"); // Limpiar el parámetro de la URL
    }
    // Manejo de actualización
    if (updatedId) {
      setData((prevData) =>
        prevData.map((startup) =>
          startup.id === parseInt(updatedId)
            ? {
                ...startup,
                name: updatedName,
                logo: updatedLogo,
                example_title: updatedSlogan,
                example_description: updatedDescription,
              }
            : startup
        )
      );
      router.replace("/"); // Limpiar el parámetro de la URL
    }
  }, [
    deleteId,
    updatedId,
    updatedName,
    updatedLogo,
    updatedSlogan,
    updatedDescription,
    router,
  ]); */

  const handleEdit = (e, id) => {
    e.preventDefault();
    router.push(`/startuptec?id=${id}`); // Redirige al detalle/edición con el id
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((startup) =>
    startup.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="row p-0 h-100">
      {/* Columna izquierda */}
      <div className="col-4 py-4 px-5 bg-dark">
        <div className="row h-100 rounded-3 bg-secondary p-4 d-flex flex-column">
          <div className="col p-0">
            <div className="d-flex flex-row align-items-center">
              <img src="/STARTUP.png" className="me-3" style={{width:"40px", height: "50px"}} />
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
            </div>
          </div>
          <div className="mt-auto p-0">
            <button
              type="button"
              className="btn btn-dark btn-lg w-50"
              onClick={() => router.push("/crear")} // Crear nueva startup
            >
              Añadir nueva
            </button>
          </div>
        </div>
      </div>
      {/* Columna derecha */}
      <div className="col-8 py-4 px-5 bg-secondary">
        <div className="row h-100 rounded-3 bg-dark p-4">
          <div className="divScroll row row-cols-1 row-cols-md-4 g-4 overflow-auto mt-2">
            {filteredData.map((startup) => (
              <div key={startup.id} className="col mt-0 mb-4">
                <div
                  className="divImg card text-center p-3 card-custom hover-overlay w-100 hand-cursor"
                >
                  <img
                    src={startup.logo}
                    alt={`${startup.name} logo`}
                    className="card-img-top mx-auto mb-3"
                    onClick={(e) => handleEdit(e, startup.id)}
                  />
                  <h5 className="card-title">{startup.name}</h5>
                  {/* <div className="d-flex justify-content-between mt-auto">
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
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
