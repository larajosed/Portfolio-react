import React, { useState, useRef, useEffect } from 'react';
import '../css/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  useEffect(() => {
  if (statusMessage.text) {
    const timer = setTimeout(() => {
      setStatusMessage({ type: '', text: '' });
    }, 4000); 

    return () => clearTimeout(timer); 
  }
}, [statusMessage.text]);

  const sendEmail = (e: any) => {
  e.preventDefault();

  // Esta validación elimina el error de TypeScript
  if (!form.current) return; 

  setIsSending(true);

  const SERVICE_ID = 'service_93tjss7';
  const TEMPLATE_ID = 'template_1smyk5b';
  const PUBLIC_KEY = '2wvQ2i9cb7ZDa-dRo';

  // Ahora TS sabe que form.current NO es null
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then(() => {
        setStatusMessage({ type: 'success', text: '¡Mensaje enviado!' });
        form.current?.reset(); // El signo ? es opcional pero recomendado
    }, (error) => {
        setStatusMessage({ type: 'error', text: 'Error al enviar.' });
    })
    .finally(() => setIsSending(false));
};

  return (
    <section className="unified-section" id="contacto">
      <div className="central-header">
        <div className="top-decoration"></div>
        <h2 className="serif-title">Contáctame</h2>
        <div className="separator-line"></div>
        <p className="common-subtitle">
          ¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades y colaboraciones.
        </p>
      </div>

      <div className="contact-grid">
        <div className="info-column">
          <div className="contact-block">
            <span className="small-label">Email</span>
            <p className="data-text">larajosed@gmail.com</p>
          </div>

          <div className="contact-block">
            <span className="small-label">Teléfono</span>
            <p className="data-text">+34 693 537 526</p>
          </div>

          <div className="contact-block">
            <span className="small-label">Ubicación</span>
            <p className="data-text">Madrid, España</p>
          </div>

          <div className="availability-badge">
            <span className="green-dot"></span>
            Disponible para proyectos
          </div>
        </div>

        {/* El atributo 'ref' y 'onSubmit' son clave para que funcione */}
        <form ref={form} onSubmit={sendEmail} className="unified-form">
          <div className="input-row">
            <input 
              type="text" 
              name="user_name" 
              placeholder="Nombre completo" 
              className="common-input" 
              required 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Email" 
              className="common-input" 
              required 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Asunto" 
            className="common-input" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Mensaje" 
            className="common-input" 
            required
          ></textarea>
          
          <button 
            type="submit" 
            className="primary-black-button" 
            disabled={isSending}
          >
            {isSending ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {/* Feedback para el usuario */}
          {statusMessage.text && (
            <div className={`status-alert ${statusMessage.type}`}>
              {statusMessage.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;