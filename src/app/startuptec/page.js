"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
// import "../globals.css";
// import { data as initialData } from "../api/DB.js";
import { useStartups } from "../StartupContext";

export default function StartupDetails() {
  const router = useRouter();
  const { data, updateStartup, deleteStartup } = useStartups();

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  // const [data, setData] = useState(initialData);
  const [startup, setStartup] = useState(() =>
    // initialData.find((item) => item.id === parseInt(id))
    data.find((item) => item.id === parseInt(id))
  );

  if (!startup) {
    return <div>No se encontró la startup</div>;
  }

  const handleDeleteStartup = (e) => {
    // Redirigir a la página principal con el ID a eliminar
    const confirmEdit = window.confirm(
      "¿Estás seguro de que deseas eliminar esta startup?"
    );
    if (confirmEdit) {
      e.preventDefault();
      // router.push(`/?deleteId=${startup.id}`);
      deleteStartup(startup.id);
      router.push("/");
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const confirmEdit = window.confirm(
      "¿Estás seguro de que deseas actualizar esta startup?"
    );

    if (confirmEdit) {
      // Startup con los datos actualizados
      const query = {
        id: startup.id,
        name: startup.name,
        logo: startup.logo,
        example_title: startup.example_title,
        example_description: startup.example_description,
      }

      updateStartup(startup.id, query);
      router.push("/");
    }
  };

  return (
    <div className="row p-0 h-100">
      <div className="col-md-12 col-lg-4 py-4 px-5 bg-dark">
        <div className="row h-100 rounded-3 bg-secondary p-4">
          <div className="col p-0">
            <div className="d-flex flex-row">
              <ArrowLeftCircleIcon
                className="me-3 hand-cursor"
                style={{ width: "40px" }}
                onClick={() => router.push("/")}
              />
              <h1>{startup.name}</h1>
            </div>
            <p className="ps-2 pt-4 fs-4">
              Las startups aquí listadas representan el talento e innovación de
              nuestra comunidad escolar.
            </p>
          </div>
          <div className="mt-auto d-flex flex-row p-0 gap-3">
            <button
              className="btn btn-danger btn-lg w-100"
              onClick={(e) => handleDeleteStartup(e)}
            >
              Eliminar
            </button>
            <button className="btn btn-dark btn-lg w-100" onClick={handleSave}>
              Actualizar
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-8 py-4 px-5 bg-secondary">
        <div className="row h-100 rounded-3 bg-dark p-4 overflow-auto">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                className="form-control form-control-lg"
                id="nombre"
                placeholder="Escribe el nombre"
                value={startup.name}
                onChange={(e) =>
                  setStartup({ ...startup, name: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="logotipo" className="labelInline form-label">
                Logotipo
              </label>
              <div className="divLogo">
                <img src={startup.logo} alt={startup.name} />
              </div>
              <input
                className="form-control form-control-lg"
                id="logotipo"
                placeholder="URL del logotipo"
                value={startup.logo}
                onChange={(e) =>
                  setStartup({ ...startup, logo: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="slogan" className="form-label">
                Slogan
              </label>
              <input
                className="form-control form-control-lg"
                id="slogan"
                placeholder="Escribe tu slogan"
                value={startup.example_title}
                onChange={(e) =>
                  setStartup({ ...startup, example_title: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción
              </label>
              <textarea
                className="form-control form-control-lg"
                id="descripcion"
                rows="3"
                style={{ minHeight: "240px" }}
                placeholder="Descripción..."
                value={startup.example_description}
                onChange={(e) =>
                  setStartup({
                    ...startup,
                    example_description: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
