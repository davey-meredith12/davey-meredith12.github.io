import { experience } from "../data/experience";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <SectionHeader number="02" title="Experience" />
        <div className="timeline">
          {experience.map((job) => (
            <div key={`${job.role}-${job.org}`} className="timeline-item">
              <div className="timeline-header">
                <h3>{job.role}</h3>
                <span className="timeline-period">{job.period}</span>
              </div>
              <p className="timeline-org">{job.org}</p>
              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
