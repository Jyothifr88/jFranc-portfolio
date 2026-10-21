import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import Icon from './Icon'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          {profile.name}
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__nav${menuOpen ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
