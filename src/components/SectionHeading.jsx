// Shared heading block used by every content section.
export default function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <header className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
