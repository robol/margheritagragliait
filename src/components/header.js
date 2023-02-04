import * as styles from "./index.module.css"

import React, { useState } from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
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
    <>
      {toggleMobileMenu && (
        <ul
          style={{
            position: "absolute",
            width: "80vw",
            backgroundColor: "white",
            zIndex: 10000,
            marginLeft: 0,
            color: `var( --color-primary)`,
            marginTop: 65,
            left: "50%",
            transform: "translate(-50%, 0)",
            textAlign: "center",
          }}
        >
          {navigationLinks?.map((link, i) => (
            <li>
              <Link
                style={{
                  textDecoration: `none`,
                }}
                key={link.url}
                to={link.url}
              >
                {link.text.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <header className={styles.headerContainer}>
        <div className={styles.desktopOnly}>
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
          <div className={styles.sectionsContainer}>
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
        </div>
        <div className={styles.mobileOnly}>
          <div onClick={() => setToggleMobileMenu(!toggleMobileMenu)}>
            <StaticImage
              src="../images/hamburger.png"
              loading="eager"
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ width: 30 }}
            />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
