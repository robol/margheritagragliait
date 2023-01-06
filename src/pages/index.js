import * as React from "react"
import * as styles from "../components/index.module.css"

import HeroBanner from "../components/hero-banner"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const bookPageLinks = [
  {
    text: "Libro 1",
    url: "libri/book-one",
    badge: false,
    description: "Libro 1",
  },
  {
    text: "Libro 2",
    url: "libri/book-two",
    badge: false,
    description: "Libro 2",
  },
  {
    text: "Libro 3",
    url: "libri/book-three",
    badge: false,
    description: "Libro 3",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <HeroBanner />
      <p className={styles.intro}>
        <b>Example books:</b>{" "}
        {bookPageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={link.url} target="_blank">
              {link.text}
            </a>
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
