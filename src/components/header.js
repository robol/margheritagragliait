import * as styles from "./index.module.css"

import React, { useState } from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false)
  const [toggleBio, setToggleBio] = useState(false)
  const [toggleFormazione, setToggleFormazione] = useState(false)
  /*   const navigationLinks = [
    {
      text: "Biografia",
      url: "/biografia",
      badge: false,
      description: "Biografia di Margherita Graglia",
    },
    {
      text: "Libri",
      url: "/libri",
      badge: false,
      description: "Libri di Margherita Graglia",
    },
    {
      text: "Psiocoterapia",
      url: "/psicoterapia",
      badge: false,
      description: "Psicoterapia di Margherita Graglia",
    },
    {
      text: "ESPERIENZE PROFESSIONALI",
      url: "/esperienze-professionali",
      badge: false,
      description: "ESPERIENZE PROFESSIONALI di Margherita Graglia",
    },
    {
      text: "CONFERENZE E CONVEGNI",
      url: "/conferenze",
      badge: false,
      description: "CONFERENZE E CONVEGNI di Margherita Graglia",
    },
    {
      text: "CAPITOLI E ARTICOLI",
      url: "/capitoli",
      badge: false,
      description: "CAPITOLI E ARTICOLI di Margherita Graglia",
    },
    {
      text: "VIDEOS",
      url: "/media",
      badge: false,
      description: "VIDEOS di Margherita Graglia",
    },
    {
      text: "CONTATTO",
      url: "/contatto",
      badge: false,
      description: "CONTATTO di Margherita Graglia",
    },
    {
      text: "NEWS",
      url: "/news",
      badge: false,
      description: "NEWS di Margherita Graglia",
    },
  ] */
  const navigationLinks = [
    {
      text: "Biografia",
      url: "/biografia",
      badge: false,
      description: "Biografia di Margherita Graglia",
      subsections: [
        { text: "ESPERIENZE PROFESSIONALI", url: "/esperienze-professionali" },
        { text: "CONFERENZE E CONVEGNI", url: "/conferenze" },
      ],
      toggleDropdown: () => setToggleBio(!toggleBio),
      showKey: toggleBio,
    },
    {
      text: "Libri",
      url: "/libri",
      badge: false,
      description: "Libri di Margherita Graglia",
      subsections: null,
    },
    {
      text: "articoli",
      url: "/articoli",
      badge: false,
      description: "articoli di Margherita Graglia",
      subsections: null,
    },
    {
      text: "Psiocoterapia",
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
      subsections: [{ text: "Approccio mayeutico", url: "/approcio" }],
      toggleDropdown: () => setToggleFormazione(!toggleFormazione),
      showKey: toggleFormazione,
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
        <div className={styles.desktopOnlyHeader}>
          <Link
            to="/"
            style={{
              fontSize: `var(--font-lg)`,
              textDecoration: `none`,
              color: `var( --color-text-white)`,
              fontWeight: 400,
            }}
          >
            {siteTitle.toUpperCase()}
          </Link>
          <div className={styles.sectionsContainer}>
            {navigationLinks.map((link, i) => (
              <>
                {link.subsections ? (
                  <div style={{ position: "relative" }}>
                    <button
                      onClick={() => link.toggleDropdown()}
                      style={{
                        fontSize: `var(--font-md)`,
                        padding: `0 var(--space-4)`,
                        textDecoration: `none`,
                        color: `var( --color-text-white)`,
                        fontWeight: 700,
                        border: "none",
                        backgroundColor: "inherit",
                      }}
                    >
                      {link.text.toUpperCase()}
                    </button>
                    {link.subsections && link.showKey && (
                      <ul
                        style={{
                          backgroundColor: "white",
                          position: "absolute",
                          top: "40px",
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
