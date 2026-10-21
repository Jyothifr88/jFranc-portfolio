import { profile } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="eyebrow">Hi, I am {profile.name}</p>
        <h1 id="hero-title">{profile.headline}</h1>
        <p className="hero__subtitle">{profile.subtitle}</p>

        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a className="button button--ghost" href="#contact">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
