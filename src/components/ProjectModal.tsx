import React, { useEffect, useState } from 'react';
import '../css/ProjectModal.css';

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // 1. Ahora manejamos el ÍNDICE de la imagen activa
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentIndex(0); // Empezar siempre en la primera
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  if (!project) return null;

  // 2. Construir galería (Imagen principal + adicionales)
  const gallery = project.imagenes ? [project.imagen, ...project.imagenes] : [project.imagen];

  // 3. Funciones de navegación por ÍNDICE
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✕</button>
        
        <div className="modal-grid">
          <div className="modal-gallery">
            <div className="main-image-wrapper">
              {gallery.length > 1 && (
                <>
                  <button className="nav-arrow prev" onClick={prevImage} type="button">❮</button>
                  <button className="nav-arrow next" onClick={nextImage} type="button">❯</button>
                </>
              )}
              {/* Mostramos la imagen según el índice actual */}
              <img 
                src={gallery[currentIndex]} 
                alt={`${project.titulo} ${currentIndex}`} 
                className="main-modal-img" 
                key={currentIndex} // La key fuerza una pequeña animación de recarga si el CSS la tiene
              />
            </div>
            
            {gallery.length > 1 && (
              <div className="thumbnail-row">
                {gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className={`thumb-container ${currentIndex === index ? 'active-thumb' : ''}`}
                    onClick={() => setCurrentIndex(index)} // Cambia por índice
                  >
                    <img src={img} alt={`Vista ${index}`} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="modal-details">
            <h2 className="serif-title-modal">{project.titulo}</h2>
            <div className="separator-line-modal"></div>
            <p className="full-description">{project.descripcion}</p>
            
            <div className="modal-tech-stack">
              {project.tecnologias.map((tech) => (
                <span key={tech} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="modal-footer-actions">
              <a href={project.linkProyecto} target="_blank" rel="noreferrer" className="primary-black-button">Visitar Web</a>
             {/* <a href={project.linkCodigo} target="_blank" rel="noreferrer" className="secondary-outline-button">GitHub</a>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;