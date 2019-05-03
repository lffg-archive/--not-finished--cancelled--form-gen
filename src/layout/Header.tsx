import React from 'react'

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <section className="navbar__section">
          <a
            href="https://luizfelipe.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Home
          </a>

          {/* TODO: Use a SVG logo with a tooltip. */}
          <span className="navbar__site-brand">Gerador de Formulários</span>
        </section>
        <section className="navbar__section --section-right">
          <a
            title="Esse projeto é open-source. Contribuia através do GitHub."
            href="https://github.com/lffg/form-gen"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <span className="navbar__site-version">
            {process.env.VERSION || '3.x'}
          </span>
        </section>
      </nav>
    </header>
  )
}
