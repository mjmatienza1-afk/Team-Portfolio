import React from 'react';
import './Projects.css';

const Projects = ({ data }) => {
  // Pull projects array from the passed data prop
  const projectList = data?.projects || [];

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">04. Innovations</span>
        <h2 className="section-title">Technical Projects</h2>
      </div>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-content">
              <header className="project-header">
                <div className="folder-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#27c93f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="project-links">
                  {/* GitHub Repository Link */}
                  {(project.link) && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="icon-link" title="View Repository">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  )}
                  {/* Optional Live Demo Link */}
                  {project.link2 && (
                    <a href={project.link2} target="_blank" rel="noreferrer" className="icon-link" title="Live Demo">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
              </header>

              <div className="project-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>
              </div>

              <footer className="project-card-footer">
                <ul className="project-tech-stack">
                  {project.tech?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="repo-access">
                  <div>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Source Code <span className="arrow">→</span>
                    </a>
                  </div>
                  <div>
                    <a href={project.link2} target="_blank" rel="noreferrer" >
                      Website <span className="arrow">→</span>
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;