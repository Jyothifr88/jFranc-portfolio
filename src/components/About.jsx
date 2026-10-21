import { aboutParagraphs, awards, certifications, education } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading eyebrow="About" title="About Me" id="about-title" />

        <div className="about-grid">
          <div className="about-grid__text">
            {aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <aside className="card" aria-label="Education, certifications, and awards">
            <h3>Certifications</h3>
            <ul className="plain-list">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <span>{cert.name}</span>
                  <span className="muted">{cert.date}</span>
                </li>
              ))}
            </ul>

            <h3>Education</h3>
            <ul className="plain-list">
              {education.map((item) => (
                <li key={item.credential}>
                  <span>{item.credential}</span>
                  <span className="muted">
                    {item.institution} | {item.period}
                  </span>
                  <span className="muted">{item.detail}</span>
                </li>
              ))}
            </ul>

            <h3>Awards</h3>
            <ul className="plain-list">
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
