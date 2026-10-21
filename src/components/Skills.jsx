import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          eyebrow="Expertise"
          title="Technical Skills"
          id="skills-title"
          intro="Core technologies and practices across full-stack, data, AI, cloud, and delivery work."
        />

        <div className="grid grid--3">
          {skillGroups.map((group) => (
            <article key={group.title} className="card">
              <h3>{group.title}</h3>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
