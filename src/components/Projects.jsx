import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          eyebrow="Selected Work"
          title="Selected Projects"
          id="projects-title"
          intro="Representative examples of the types of solutions I deliver. These are summaries and do not represent public projects or confidential client details."
        />

        <div className="grid grid--3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
