import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const navigationLinks = [
    {
      text: "Biografia",
      url: "biografia",
      badge: false,
      description: "Biografia di Margherita Graglia",
    },
    {
      text: "Libri",
      url: "libri",
      badge: false,
      description: "Libri di Margherita Graglia",
    },
    {
      text: "Psiocoterapia",
      url: "psicoterapia",
      badge: false,
      description: "Psicoterapia di Margherita Graglia",
    },
  ]

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        backgroundColor: `var(--color-primary)`,
        color: `var( --color-text)`,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `var(--font-lg)`,
          textDecoration: `none`,
          color: `var( --color-text)`,
          fontWeight: 400,
        }}
      >
        {siteTitle.toUpperCase()}
      </Link>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        {navigationLinks.map((link, i) => (
          <Link
            key={link.url}
            to={link.url}
            style={{
              fontSize: `var(--font-md)`,
              padding: `0 var(--space-4)`,
              textDecoration: `none`,
              color: `var( --color-text)`,
              fontWeight: 700,
            }}
          >
            {link.text.toUpperCase()}
          </Link>
        ))}
      </div>
      {/*     <StaticImage //TODO: EVALUATE THIS
      src="../images/icon-m.png"
      loading="eager"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    /> */}
    </header>
  )
}

export default Header
