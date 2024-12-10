"use client";

import { useRouter } from "next/navigation";
import { data } from "./api/DB.js";

export default function Home() {
  const router = useRouter();

  data.map((item) => {
    console.log(item);
  });
  
  return (
    <div className="row p-0 h-100">
      <div className="col-4 py-4 px-5 bg-primary">
        <div className="row h-100 rounded-3 bg-secondary p-4 d-flex flex-column">
          <div className="col p-0">
            <div className="d-flex flex-row">
              <h1>Startup Tec</h1>
            </div>
            <div className="d-flex flex-row mb-4">
              <p className="pt-4 fs-4">
                Es una plataforma digital diseñada para centralizar y facilitar
                la búsqueda de proyectos emprendedores creados por estudiantes y
                profesores.
              </p>
            </div>
            <div className="d-flex flex-row">
              {/* buscar */}
              <form className="w-100">
                <div className="mb-3">
                  <input
                    className="form-control form-control-lg"
                    id="nombre"
                    placeholder="Buscar"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="mt-auto d-flex flex-row p-0">
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
      <div className="col-8 py-4 px-5 bg-secondary">
        <div className="row h-100 rounded-3 bg-primary p-4">
          <div className="overflow-auto">
            <h1
              className="hand-cursor"
              onClick={() => router.push("/startuptec")}
            >
              Contenido
            </h1>
            <img src="https://logotypes.dev/static/logos/linkedin-wordmark-color.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
