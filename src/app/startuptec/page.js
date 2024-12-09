'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftCircleIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const router = useRouter()

  return (
    <div className="row p-0 h-100">
      <div className="col-4 py-4 px-5 bg-primary">
        <div className="row h-100 rounded-3 bg-secondary p-4">
          <div className="col p-0">
            <div className="d-flex flex-row">
              <ArrowLeftCircleIcon className="me-3 hand-cursor" style={{width:"40px"}} onClick={() => router.push("/")}/>
              <h1>Adobe</h1>
            </div>
            <div className="d-flex flex-row align-items-stretch">
              <p className="ps-2 pt-4 fs-4">Las startups aquí listadas representan el talento e innovación de nuestra comunidad escolar. Explora sus perfiles, conoce sus objetivos y encuentra oportunidades para colaborar o apoyar sus iniciativas. Recuerda que cada proyecto está en una etapa única de desarrollo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8 py-4 px-5 bg-secondary">
        <div className="row h-100 rounded-3 bg-primary p-4">
          {/* Formulario */}
          <form>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input className="form-control form-control-lg" id="nombre" />
            </div>
            {/* Logotipo */}
            <div className="mb-3">
              <label htmlFor="logotipo" className="form-label">
                Logotipo
              </label>
              <input className="form-control form-control-lg" id="logotipo" />
              <div className="form-text">Debe de ser el link de la imagen</div>
            </div>
            {/* Slogan */}
            <div className="mb-3">
              <label htmlFor="slogan" className="form-label">
                Slogan
              </label>
              <input className="form-control form-control-lg" id="slogan" />
            </div>
            {/* Descripción */}
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                Example textarea
              </label>
              <textarea
                className="form-control form-control-lg"
                id="descripcion"
                rows="3"
                style={{ minHeight: "240px" }}
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
