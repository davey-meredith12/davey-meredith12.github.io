import { profile } from "../data/profile";
import SectionHeader from "./SectionHeader";

export default function About() {
  const { education } = profile;

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeader number="01" title="About Me" />

        <div className="about-grid">
          <div className="about-image">
            <div className="image-container">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} />
              ) : (
                <div className="image-placeholder">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
            </div>
          </div>

          <div className="about-content">
            <div className="education-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3>Education</h3>
              </div>
              <p className="graduation-date">{education.period}</p>
              <p className="degree-info">
                {education.school} — {education.degree}
                <br />
                {education.details.join(" · ")}
              </p>
              <p className="honors">{education.honors}</p>
            </div>

            <div className="about-text">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="coursework">
          <h3 className="subsection-title">Relevant Coursework</h3>
          <ul className="pill-list">
            {profile.coursework.map((course) => (
              <li key={course} className="pill">
                {course}
              </li>
            ))}
          </ul>
        </div>

        <div className="skills">
          {Object.entries(profile.skills).map(([category, skills]) => (
            <div key={category} className="skill-group">
              <h3 className="subsection-title">{category}</h3>
              <ul className="pill-list">
                {skills.map((skill) => (
                  <li key={skill} className="pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
