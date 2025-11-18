import * as React from "react"
import * as styles from "./index.module.css"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  const navigationLinks = [
    {
      text: "Pubblicazioni",
      url: "/articoli",
      badge: false,
      description: "Libri di Margherita Graglia",
    },
    {
      text: "Psicoterapia",
      url: "/psicoterapia",
      badge: false,
      description: "Psicoterapia di Margherita Graglia",
    },
    {
      text: "Formazione",
      url: "/formazione",
      badge: false,
      description: "Formazione di Margherita Graglia",
    },
  ]

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "500px",
        overflow: "hidden",
        backgroundColor: "var(--color-primary)",
        padding: "var(--space-5)",
        marginTop: "var(--space-6)",
      }}
    >
      <div className="h1" style={{ color: "white" }}>Margherita Graglia</div>
      <h2 className={styles.infoTitle} style={{ color: "white" }}>
        Psicoterapeuta – Formatrice – Saggista
      </h2>
      <div
        className={styles.desktopOnly}
        style={{
          display: `flex`,
          justifyContent: `space-between`,
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
              color: `var( --color-text-white)`,
              fontWeight: 700,
            }}
          >
            {link.text.toUpperCase()}
          </Link>
        ))}
      </div>
      <a
        href="https://it.linkedin.com/in/margherita-graglia-b1589415"
        target="_blank"
      >
        <div
          style={{
            display: "flex",
            width: 150,
            alignItems: "center",
            padding: 10,
            margin: 10,
            border: "2px solid white",
          }}
        >
          <StaticImage
            src="../../static/linkedin50.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <text
            style={{
              lineHeight: 1,
              fontWeight: 800,
              fontSize: 14,
              width: "100%",
              color: "white",
            }}
          >
            Follow me on linkedin
          </text>
        </div>
      </a>
      <a
        style={{ color: "white", marginTop: 20, textAlign: "center" }}
        href="https://www.linkedin.com/in/emiliarg/"
        target="_blank"
      >
        Made with ♡ by Emilia Rodriguez Gimenez
      </a>
      <a
        style={{
          color: "white",
          marginTop: 20,
          textAlign: "center",
          fontSize: 10,
        }}
        target="_blank"
        href="https://icons8.com"
      >
        Icons by Icons8
      </a>
    </div>
  )
}

export default Footer
