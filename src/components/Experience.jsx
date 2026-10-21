import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          id="experience-title"
        />

        <ol className="timeline">
          {experience.map((job) => (
            <li key={`${job.organization}-${job.period}-${job.role}`} className="timeline__item">
              <article className="card">
                <header className="timeline__header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="timeline__org">
                      {job.organization}
                      {job.project && <span className="timeline__project"> | {job.project}</span>}
                    </p>
                  </div>
                  <time className="timeline__period">{job.period}</time>
                </header>

                <ul className="bullet-list">
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
