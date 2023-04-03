import * as styles from "./index.module.css"

import React, { useState } from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const [toggleBio, setToggleBio] = useState(false)
  const [toggleFormazione, setToggleFormazione] = useState(false)

  const navigationLinks = [
    {
      text: "Home",
      url: "/",
      badge: false,
      description: "Home di Margherita Graglia",
      subsections: null,
    },
    {
      text: "Biografia",
      url: "/biografia",
      badge: false,
      description: "Biografia di Margherita Graglia",
      subsections: [
        { text: "ESPERIENZE PROFESSIONALI", url: "/esperienze-professionali" },
        { text: "CONFERENZE E CONVEGNI", url: "/conferenze-convegni" },
      ],
      toggleDropdown: () => setToggleBio(!toggleBio),
      showKey: toggleBio,
    },
    {
      text: "Pubblicazioni",
      url: "/articoli",
      badge: false,
      description: "articoli di Margherita Graglia",
      subsections: null,
    },
    {
      text: "Psicoterapia",
      url: "/psicoterapia",
      badge: false,
      description: "Psicoterapia di Margherita Graglia",
      subsections: null,
    },
    {
      text: "Supervisione e consulenza",
      url: "/supervisione-consulenza",
      badge: false,
      description: "Supervisione e consulenza di Margherita Graglia",
      subsections: null,
    },
    {
      text: "Formazione",
      url: "/formazione",
      badge: false,
      description: "Formazione di Margherita Graglia",
      subsections: [
        /*         { text: "Proposte formative", url: "/proposte-formative" },
         */ { text: "Approccio maieutico", url: "/approccio" },
      ],
      toggleDropdown: () => setToggleFormazione(!toggleFormazione),
      showKey: toggleFormazione,
    },
    {
      text: "Video",
      url: "/video",
      badge: false,
      description: "Video di Margherita Graglia",
      subsections: null,
    },
    {
      text: "News",
      url: "/news",
      badge: false,
      description: "News di Margherita Graglia",
      subsections: null,
    },
    {
      text: "contatti",
      url: "/contatti",
      badge: false,
      description: "contatti di Margherita Graglia",
      subsections: null,
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
          {navigationLinks?.map((section, i) => (
            <>
              <li>
                <Link
                  style={{
                    textDecoration: `none`,
                  }}
                  key={section.url}
                  to={section.url}
                >
                  {section.text.toUpperCase()}
                </Link>
                {section.subsections?.length && (
                  <button
                    style={{ border: "none" }}
                    onClick={() => section.toggleDropdown()}
                  >
                    {section.showKey ? "▲" : "▼"}
                  </button>
                )}
              </li>
              {section.showKey &&
                section.subsections?.map(subsection => (
                  <li
                    style={{
                      textDecoration: `none`,
                      backgroundColor: "var(--color-primary)",
                      color: "var(--color-text-white) !important;",
                    }}
                  >
                    <Link
                      style={{
                        textDecoration: `none`,
                        color: "var(--color-text-white)",
                      }}
                      key={subsection.url}
                      to={subsection.url}
                    >
                      {subsection.text.toUpperCase()}
                    </Link>
                  </li>
                ))}
            </>
          ))}
        </ul>
      )}
      <header className={styles.headerContainer}>
        <div className={styles.desktopOnlyHeader}>
          <Link
            to="/"
            style={{
              fontSize: "20px",
              textDecoration: `none`,
              color: `var( --color-text-white)`,
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            {siteTitle.toUpperCase()}
          </Link>
          <div className={styles.sectionsContainer}>
            {navigationLinks.map((link, i) => (
              <>
                {link.subsections ? (
                  <div
                    onMouseEnter={() => link.toggleDropdown()}
                    onMouseLeave={() => link.toggleDropdown()}
                    className={styles.headerItems}
                  >
                    <Link
                      key={link.url}
                      to={link.url}
                      style={{
                        fontSize: `var(--font-md)`,
                        textDecoration: `none`,
                        color: `var( --color-text-white)`,
                        fontWeight: 700,
                      }}
                    >
                      {link.text.toUpperCase()}
                    </Link>
                    {link.subsections && link.showKey && (
                      <ul
                        style={{
                          backgroundColor: "white",
                          position: "absolute",
                          top: "40px",
                          left: "-25px",
                          zIndex: 2,
                          padding: "20px",
                        }}
                      >
                        {link.subsections.map(item => (
                          <li className={styles.dropdownItem}>
                            <Link
                              key={item.url}
                              to={item.url}
                              style={{
                                fontSize: `var(--font-md)`,
                                textDecoration: `none`,
                                color: `var( --color-primary)`,
                                fontWeight: 700,
                              }}
                            >
                              {item.text.toUpperCase()}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.url}
                    to={link.url}
                    style={{
                      fontSize: `var(--font-md)`,
                      padding: `0 var(--space-4)`,
                      textDecoration: `none`,
                      color: `var( --color-text-white)`,
                      fontWeight: 700,
                    }}
                  >
                    {link.text.toUpperCase()}
                  </Link>
                )}
              </>
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
