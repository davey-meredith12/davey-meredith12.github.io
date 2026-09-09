import { gameProjects, otherProjects } from "../data/projects";
import SectionHeader from "./SectionHeader";

function GameProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.name} />
        ) : (
          <div className="project-image-placeholder" />
        )}
      </div>
      <div className="project-content">
        <h4>{project.name}</h4>
        <ul className="pill-list">
          {project.tech.map((t) => (
            <li key={t} className="pill pill-sm">
              {t}
            </li>
          ))}
        </ul>
        <p className="project-description">{project.description}</p>
        {project.links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <span>{link.label}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
            </svg>
          </a>
        ))}
      </div>
    </article>
  );
}

function MinimalProjectCard({ project }) {
  return (
    <article className="project-card minimal">
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.name} />
        </div>
      )}
      <div className="project-content">
        <h4>{project.name}</h4>
        {project.tech.length > 0 && (
          <ul className="pill-list">
            {project.tech.map((t) => (
              <li key={t} className="pill pill-sm">
                {t}
              </li>
            ))}
          </ul>
        )}
        <p className="project-description">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            <span>Code</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <path d="M15 3h6v6" />
              <path d="M10 14L21 3" />
            </svg>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader number="03" title="Projects" />

        <h3 className="subsection-title">Software Projects</h3>
        <div className="projects-grid coding-projects">
          {otherProjects.map((project) => (
            <MinimalProjectCard key={project.name} project={project} />
          ))}
        </div>

        <h3 className="subsection-title subsection-title-spaced">
          Game Engineering
        </h3>
        <div className="projects-grid">
          {gameProjects.map((project) => (
            <GameProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
