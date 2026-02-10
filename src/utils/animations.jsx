export const initHeroAnimations = () => {
  const h1 = document.querySelector('.hero-text h1');
  const diamonds = document.querySelectorAll('.diamond');
  const svgLines = document.querySelectorAll('.bg-lines-container');

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    
    const xRel = (clientX / window.innerWidth - 0.5);
    const yRel = (clientY / window.innerHeight - 0.5);
    if (h1) {
      // Rotamos en ejes opuestos para crear la ilusión de profundidad
      const rotX = yRel * -18; // Inclinación arriba/abajo
      const rotY = xRel * 18;  // Inclinación izquierda/derecha
      
      // translateZ(40px) "saca" el texto de la pantalla hacia el usuario
      h1.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(40px)`;
    }

    // 2. PARALAJE EN DIAMANTES (Siguen al ratón)
    diamonds.forEach((d, i) => {
      // Cada diamante se mueve a una velocidad distinta para dar profundidad
      const speed = (i + 1) * 20;
      d.style.transform = `translate(${xRel * speed}px, ${yRel * speed}px) rotate(45deg)`;
    });

    // 3. MOVIMIENTO EN LAS LÍNEAS (Efecto opuesto/suave)
    svgLines.forEach((svg) => {
      svg.style.transform = `translate(${xRel * -15}px, ${yRel * -15}px)`;
    });
  };

  // Escuchamos el movimiento del ratón
  window.addEventListener('mousemove', handleMouseMove);
  
  // Función de limpieza para el useEffect
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
};