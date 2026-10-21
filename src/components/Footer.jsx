import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="footer__links">
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href="#top">Back to top</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
