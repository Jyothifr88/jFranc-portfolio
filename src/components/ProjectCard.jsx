import Icon from './Icon'

export default function ProjectCard({ project }) {
  const { title, category, summary, tech, link } = project

  return (
    <article className="card project-card">
      <p className="badge">{category}</p>
      <h3>{title}</h3>
      <p className="project-card__summary">{summary}</p>

      <ul className="tag-list" aria-label={`Technologies used in ${title}`}>
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* Set `link` in src/data/portfolio.js to show a project link. */}
      {link && (
        <a
          className="text-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View project
          <Icon name="external" className="icon icon--sm" />
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      )}
    </article>
  )
}
