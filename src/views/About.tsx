import React, { useState } from 'react';
import '../css/About.css';

const SobreMi = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & Api' },
    { id: 'database', label: 'Data Storage' },
    { id: 'testing', label: 'Testing & QA' },
    { id: 'devops', label: 'Dev & Tools' },
    { id: 'agile', label: 'Methodologies & Design' }
  ];

  const stack: Record<string, string[]> = {
    frontend: ['React', 'Angular', 'JavaScript', 'TypeScript', 'D3', 'Recharts', 'Bootstrap'],
    backend: ['Spring Boot', 'Java', 'WordPress', 'WooCommerce'],
    database: ['MySQL'],
    testing: ['Jest', 'JUnit', 'Mockito', 'TDD (Test Driven Development)'],
    devops: ['Git', 'Docker', 'Postman', 'VS Code', 'GitHub Copilot'],
    agile: ['Scrum', 'Jira', 'Figma']
  };

  return (
    <section className="about-section" id="sobre-mi">
      <div className="about-header">
        <h2 className="funnel-display-300">Sobre mi</h2>
        <div className="header-line"></div>
      </div>

      <div className="about-container">
        
        <div className="about-text-full">
          <p>
            Mi camino en el desarrollo de software se define por una curiosidad constante y la resolución de problemas reales. 
            No solo escribo código; <strong>construyo productos que impulsan negocios.</strong>
          </p>
          <p>
            He tenido la oportunidad de digitalizar ecosistemas comerciales completos con <strong>React</strong> con <strong>WordPress y WooCommerce</strong> y pagos seguros mediante <strong>Stripe</strong>. 
           También diseño soluciones <strong>SaaS multi-tenant </strong> 
             desde cero con <strong>Spring Boot</strong>. Realizo todo el ciclo de vida del producto: desde el diseño de 
            prototipos funcionales en Figma hasta el despliegue y mantenimiento de sistemas robustos.
          </p>
          <p>
           Aplico <strong>TDD (Jest/JUnit)</strong> para garantizar software fiable, 
            utilizo <strong>IA</strong> para acelerar ciclos de entrega y diseño. Aplico estrategias de <strong>internacionalización (i18n) pensando en un mercado global.</strong>.
          </p>
        </div>

        <div className="about-stack-horizontal">
          <div className="stack-selector">
            <span className="stack-label">Technical Stack</span>
            <div className="tabs">
              {categories.map((cat) => (
                <button 
                  key={cat.id}
                  className={activeTab === cat.id ? 'active' : ''} 
                  onClick={() => setActiveTab(cat.id)}
                >
                  <span className="icon">
                    {activeTab === cat.id ? 'ⓧ' : '○'}
                  </span>
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="stack-grid">
            {stack[activeTab].map((tech) => (
              <div key={`${activeTab}-${tech}`} className="tech-item fade-in-tech">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;