import * as React from "react"
import * as styles from "../components/index.module.css"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import FeaturedBooks from "../components/featured-books"
import HeroBanner from "../components/hero-banner"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const bookPageLinks = [
  {
    text: "Libro 1",
    url: "libri/book-one",
    image: "../images/th_differenze.png",
    description: "Libro 1",
  },
  {
    text: "Libro 2",
    url: "libri/book-two",
    image: "../images/th_omofobia.png",
    description: "Libro 2",
  },
  {
    text: "Libro 3",
    url: "libri/book-three",
    image: "../images/th_psicoterapia.png",
    description: "Libro 3",
  },
]

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <HeroBanner />
      <p className={styles.intro}>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
      </p>
      <FeaturedBooks />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
