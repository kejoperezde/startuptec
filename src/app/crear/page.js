"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";
// import { data as initialData } from "../api/DB.js";
import { useStartups } from "../StartupContext";

export default function Crear() {
  const router = useRouter();
  const { addStartup, data } = useStartups();

  const onSubmit = (e) => {
    e.preventDefault(); // Previene recarga de la página
    const form = e.currentTarget;
    const formData = new FormData(form);

    let nameF = formData.get("nombre")
    let logoF = formData.get("logotipo")
    let exampleTitleF = formData.get("slogan")
    let exampleDescriptionF = formData.get("descripcion")

    // Para validar formulario
    const missingFields = [];

    if (!nameF) missingFields.push("nombre");
    if (!logoF) missingFields.push("logotipo");
    if (!exampleTitleF) missingFields.push("slogan");
    if (!exampleDescriptionF) missingFields.push("descripcion");

    if (missingFields.length > 0) {
      alert(`Faltan datos en los campos: ${missingFields.join(", ")}`);
    } else {
      // Crea un nuevo objeto con los datos del formulario
      const newStartup = {
        id: data.length + 1,
        name: nameF,
        logo: logoF,
        example_title: exampleTitleF,
        example_description: exampleDescriptionF,
      };

      // Actualiza el estado con el nuevo startup
      addStartup(newStartup);
      alert("Startup creada con éxito");

      // Navega de vuelta al inicio
      router.push("/");
    }
  };

  return (
    <div className="row p-0 h-100">
      {/* Columna Izquierda */}
      <div className="col-4 py-4 px-5 bg-dark">
        <div className="row h-100 rounded-3 bg-secondary p-4 d-flex flex-column">
          <div className="col p-0">
            <div className="d-flex flex-row align-items-center">
              <ArrowLeftCircleIcon
                className="me-3 hand-cursor"
                style={{ width: "40px" }}
                onClick={() => router.push("/")}
              />
              <h1 className="m-0">Añadir nueva</h1>
            </div>
            <div className="d-flex flex-row mb-4">
              <p className="ps-2 pt-4 fs-4">
                Asegúrate de que la información proporcionada sea precisa y
                completa. Los datos ingresados serán utilizados para conectar tu
                startup con posibles colaboradores e inversionistas.
              </p>
            </div>
          </div>
          <div className="mt-auto d-flex flex-row p-0 gap-3">
            <button
              type="button"
              className="btn btn-danger btn-lg w-100"
              onClick={() => router.push("/")}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-dark btn-lg w-100"
              form="startupForm"
            >
              Crear
            </button>
          </div>
        </div>
      </div>
      {/* Columna derecha */}
      <div className="col-8 py-4 px-5 bg-secondary">
        <div className="row h-100 rounded-3 bg-dark p-4">
          {/* Formulario */}
          <form id="startupForm" onSubmit={onSubmit}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                name="nombre"
                className="form-control form-control-lg"
                id="nombre"
              />
            </div>
            {/* Logotipo */}
            <div className="mb-3">
              <label htmlFor="logotipo" className="form-label">
                Logotipo
              </label>
              <input
                name="logotipo"
                className="form-control form-control-lg"
                id="logotipo"
              />
              <div className="form-text text-white-50">
                Debe de ser el link de la imagen
              </div>
            </div>
            {/* Slogan */}
            <div className="mb-3">
              <label htmlFor="slogan" className="form-label">
                Slogan
              </label>
              <input
                name="slogan"
                className="form-control form-control-lg"
                id="slogan"
              />
            </div>
            {/* Descripción */}
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Descripción
              </label>
              <textarea
                name="descripcion"
                className="form-control form-control-lg"
                id="descripcion"
                rows="3"
                style={{ minHeight: "270px" }}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
