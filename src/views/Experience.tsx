import React from "react";
import "../css/Experience.css";

const Experience = () => {
  return (
    <section className="trayectoria-section" id="experiencia">
      <div className="section-header-centered">
        <h2 className="serif-title">Experiencia</h2>
        <div className="title-underline"></div>
      </div>

      <div className="bento-grid-portfolio">
        <div className="bento-card-main">
          <div className="card-header-flex">
            <span className="job-date">01/2026 — 01/2026</span>
            {/* Etiqueta de actual <span className="job-badge"></span> */}
          </div>
          <h3 className="job-title">
            Desarrollador Web (Contrato Fijo Discontinuo).
          </h3>
          <p className="job-company">Grupo Aspasia</p>

          <p className="job-description">
            Realice mantenimiento de la herramienta corporativa y desarrolle
            nuevas funcionalidades. Haciendo una optimización de lógica de
            cálculo para costes, actualización (XML Fundae 2026), actualización
            de plantillas XLSX, creacion de entorno de desarrollo y pruebas.
          </p>
          <div className="job-tags">
            <span>PHP</span>
            <span>PhpMyAdmin</span>
            <span>WinSCP</span>
            <span>XML</span>
          </div>
        </div>

        <div className="bento-card-main">
          <div className="card-header-flex">
            <span className="job-date">03/2025 — 05/2025</span>
          </div>
          <h3 className="job-title">Full Stack Developer.</h3>
          <p className="job-company">SNGULAR</p>

          <p className="job-description">
            Contribuí al desarrollo full stack de una aplicación. Realicé
            mejoras y evolutivos en funcionalidades existentes, y también
            construí nuevos componentes desde cero. En el frontend, trabajé con
            Angular (Typescript), Angular Material, Bootstrap, y la librería
            Highcharts para la creación de gráficos y paneles. Para el backend,
            utilicé Spring Boot (Java) y bases de datos SQL. Apliqué Test-Driven
            Development (TDD) en mis tareas, haciendo test unitarios con Jest en
            front y con JUnit y Mockito en back. Control de versiones con Git.
            Gestión de tareas con Trello aplicando metodología ágiles (Scrum).
          </p>
          <div className="job-tags">
            <span>Angular</span>
            <span>Angular Material</span>
            <span>Bootstrap</span>
            <span>SpringBoot</span>
            <span>JUnit</span>
            <span>Git</span>
            <span>Trello</span>
          </div>
        </div>

        <div className="bento-card-main">
          <div className="card-header-flex">
            <span className="job-date">08/2024 — 10/2024</span>
          </div>
          <h3 className="job-title">
            Desarrollador Web (Contrato Fijo Discontinuo).
          </h3>
          <p className="job-company">Grupo Aspasia</p>

          <p className="job-description">
            Montaje de un nuevo entorno de preproducción (Despliegue en apache y
            nueva instancia MySQL). Implementación de políticas de seguridad en
            el sistema de autenticación Caducidad obligatoria de contraseña cada
            90 días. Notificación automática a usuarios para forzar el cambio de
            contraseña. Validación de complejidad: mínimo de mayúsculas,
            minúsculas, números y caracteres especiales.
          </p>
          <div className="job-tags">
            <span>PHP</span>
            <span>PhpMyAdmin</span>
            <span>MySQL</span>
            <span>Apache</span>
          </div>
        </div>

        <div className="bento-card-main">
          <div className="card-header-flex">
            <span className="job-date">02/2024 — 04/2024</span>
          </div>
          <h3 className="job-title">
            Desarrollador Web (Contrato Fijo Discontinuo).
          </h3>
          <p className="job-company">Grupo Aspasia</p>

          <p className="job-description">
            Evolutivos sobre herramienta desarrollada en PHP y JQuery
            (Javascript) Ampliación del modelo de datos incorporando el campo
            “Fijo Discontinuo” en la ficha del trabajador. Modificación de
            lógica backend en PHP para soportar el nuevo atributo. Adaptación
            del generador de XML conforme a las especificaciones técnicas
            oficiales de FUNDAE Validación, testing y verificación de integridad
            del XML antes de su envío a plataforma oficial.
          </p>
          <div className="job-tags">
            <span>PHP</span>
            <span>PhpMyAdmin</span>
            <span>JQueryL</span>
            <span>XML</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
