'use client';

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
import '../globals.css';
import { data as initialData } from "../api/DB.js";

export default function StartupDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const [startup, setStartup] = useState(() =>
    initialData.find((item) => item.id === parseInt(id))
  );

  if (!startup) {
    return <div>No se encontró la startup</div>;
  }

  const handleDeleteStartup = () => {
    // Redirigir a la página principal con el ID a eliminar
    router.push(`/?deleteId=${startup.id}`);
  };

  const handleSave = () => {
    const updatedData = data.map((item) =>
      item.id === startup.id ? startup : item
    );
    setData(updatedData);
    router.push("/");
  };

  return (
    <div className="div1 row p-0 h-100">
      <div className="div1 col-4 py-4 px-5 bg-primary">
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
              Las startups aquí listadas representan el talento e innovación de nuestra comunidad escolar.
            </p>
            <div className="divBut">
              <button className="butModif" onClick={handleDeleteStartup}>Eliminar</button>
              <button className="butModif" onClick={handleSave}>Editar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8 py-4 px-5 bg-secondary">
        <div className="row h-100 rounded-3 bg-primary p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
              <input
                className="form-control form-control-lg"
                id="nombre"
                placeholder="Escribe el nombre"
                value={startup.name}
                onChange={(e) => setStartup({ ...startup, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="logotipo" className="labelInline form-label">Logotipo</label>
              <div className="divLogo">
                <img src={startup.logo} alt={startup.name} />
              </div>
              <input
                className="form-control form-control-lg"
                id="logotipo"
                placeholder="URL del logotipo"
                value={startup.logo}
                onChange={(e) => setStartup({ ...startup, logo: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="slogan" className="form-label">Slogan</label>
              <input
                className="form-control form-control-lg"
                id="slogan"
                placeholder="Escribe tu slogan"
                value={startup.example_title}
                onChange={(e) => setStartup({ ...startup, example_title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">Descripción</label>
              <textarea
                className="form-control form-control-lg"
                id="descripcion"
                rows="3"
                style={{ minHeight: "240px" }}
                placeholder="Descripción..."
                value={startup.example_description}
                onChange={(e) => setStartup({ ...startup, example_description: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
