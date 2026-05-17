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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (project) {
      setCurrentIndex(0); // Empezar siempre en la primera
      document.body.style.overflow = 'hidden';

      // 1. Añadimos un estado artificial al historial del navegador al abrir la modal
      window.history.pushState({ modalOpen: true }, '');

      // 2. Escuchamos el botón o gesto de "Atrás" del dispositivo
      const handlePopState = () => {
        onClose(); // Si el usuario va hacia atrás, cerramos la modal
      };

      window.addEventListener('popstate', handlePopState);

      // Limpieza al desmontar o cerrar
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [project, onClose]);

  if (!project) return null;

  // Función para cerrar de forma segura limpiando el historial sobrante
  const handleSafeClose = () => {
    // Si el usuario cierra haciendo clic en la "✕" o fuera de la modal, 
    // quitamos el estado artificial del historial para no descolocar la navegación
    if (window.history.state?.modalOpen) {
      window.history.back();
    } else {
      onClose();
    }
  };

  // Construir galería (Imagen principal + adicionales)
  const gallery = project.imagenes ? [project.imagen, ...project.imagenes] : [project.imagen];

  // Funciones de navegación por ÍNDICE
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="modal-overlay" onClick={handleSafeClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Cambiado onClose por handleSafeClose */}
        <button className="close-button" onClick={handleSafeClose}>✕</button>
        
        <div className="modal-grid">
          <div className="modal-gallery">
            <div className="main-image-wrapper">
              {gallery.length > 1 && (
                <>
                  <button className="nav-arrow prev" onClick={prevImage} type="button">❮</button>
                  <button className="nav-arrow next" onClick={nextImage} type="button">❯</button>
                </                >
              )}
              <img 
                src={gallery[currentIndex]} 
                alt={`${project.titulo} ${currentIndex}`} 
                className="main-modal-img" 
                key={currentIndex} 
              />
            </div>
            
            {gallery.length > 1 && (
              <div className="thumbnail-row">
                {gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className={`thumb-container ${currentIndex === index ? 'active-thumb' : ''}`}
                    onClick={() => setCurrentIndex(index)} 
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;