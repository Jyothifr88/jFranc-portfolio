import { profile } from '../data/portfolio'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

// Contact links come from the `profile` object in src/data/portfolio.js.
export default function Contact() {
  const contactItems = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: 'mail',
    },
    {
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: profile.linkedin,
      icon: 'briefcase',
    },
  ]

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeading
          eyebrow="Get in touch"
          title="Contact"
          id="contact-title"
          intro="Open to discussing full-stack, AI, data, and analytics initiatives."
        />

        <ul className="contact-list">
          {contactItems.map((item) => (
            <li key={item.label}>
              <a
                className="card contact-card"
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              >
                <Icon name={item.icon} className="icon" />
                <span className="contact-card__label">{item.label}</span>
                <span className="contact-card__value">{item.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
