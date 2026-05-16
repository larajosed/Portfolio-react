import React, { useState } from 'react';
import '../css/Projects.css';
import ProjectModal from '../components/ProjectModal';
import ecommerce from '../assets/plataformas-ecommerce.jpg';
import peluqueo from '../assets/Inicio.png';
import carrito from '../assets/peluqueo/carrito.png'
import carritoVacio from '../assets/peluqueo/carritoVacio.png'
import datosPago from '../assets/peluqueo/datosPago.png'
import formulario from '../assets/peluqueo/formulario.png'
import pelucas from '../assets/peluqueo/pelucas1.png'
import hero from '../assets/larapremium/hero.png'
import contacto from '../assets/larapremium/contacto.png'
import elige from '../assets/larapremium/elige.png'
import servicios from '../assets/larapremium/servicios.png'
import sobreMi from '../assets/larapremium/sobreMi.png'

interface Project {
  id: number;
  titulo: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
  imagenes?: string[];
  linkProyecto: string;
  linkCodigo: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const proyectos: Project[] = [
    {
      id: 1,
      titulo: 'Lara Premium Fitness — Landing Page Profesional de Entrenamiento Online',
      descripcion: 'Lara Premium Fitness Landing page moderna y responsive diseñada para un servicio de entrenamiento personal 100% online. Cuenta con secciones dinámicas para la visualización de servicios, planes de suscripción interactivos con llamadas a la acción directas a WhatsApp, testimonios/sobre mí, y canales de contacto integrados. Diseñada bajo un enfoque limpio y profesional enfocado en la conversión y la experiencia de usuario.',
      tecnologias: ['React', 'HTML5', 'CSS3', 'Vercel', 'WhatsApp API'],
      imagen: hero,
      imagenes: [elige, servicios, sobreMi, contacto],
      linkProyecto: 'https://lara-premium-fitness-site.vercel.app/',
      linkCodigo: '#'
    },
    {
      id: 2,
      titulo: 'Peluqueo que te veo',
      descripcion: 'Desarrollo y maquetación de interfaz de usuario responsive utilizando React. Configuración y personalización del backend de gestión de contenido y catalogo utilizando WordPress con WooCommerce. Diseñe toda la aplicación, creando prototipos funcionales desde cero utilizando Figma. Gestión del entorno de desarrollo mediante contenedores (Docker). Integracion de una pasarela de pago (Stripe) para procesar transacciones.',
      tecnologias: ['React', 'TypeScript', 'Woocommerce', 'Wordpress', 'Figma'],
      imagen: peluqueo,
      imagenes: [carrito, formulario, pelucas, carritoVacio, datosPago],
      linkProyecto: 'https://peluqueoqueteveo.es/',
      linkCodigo: '#'
    }
  ];

  return (
    <section className="unified-section" id="proyectos">
      {/* Encabezado coherente con Experiencia */}
      <div className="central-header">
        <h2 className="serif-title">Proyectos</h2>
        <div className="separator-line"></div>
      </div>

      <div className="projects-grid">
        {proyectos.map((proy) => (
          <article key={proy.id} className="project-card">
            <div className="project-image-container">
              <img src={proy.imagen} alt={proy.titulo} className="project-image" />
            </div>
            
            <div className="project-info">
              <h3 className="project-title-text">{proy.titulo}</h3>
              <p className="project-description-text">{proy.descripcion}</p>
              
              <div className="project-tech-tags">
                {proy.tecnologias.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {/* Ahora este botón abre la modal */}
                <button 
                  className="link-button" 
                  onClick={() => setSelectedProject(proy)}
                >
                  Ver proyecto
                </button>
                {/* <a href={proy.linkCodigo} className="link-button" target="_blank" rel="noopener noreferrer">
                   Código
                </a>*/}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Componente Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;