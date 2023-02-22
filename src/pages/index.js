import * as React from "react"
import * as styles from "../components/index.module.css"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import FeaturedBooks from "../components/featured-books"
import HeroBanner from "../components/hero-banner"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <HeroBanner />
      <div className={styles.intro}>
        <h2>Psicoterapeuta, formatrice e saggista</h2>
        <div className={styles.introInfo}>
          <p>
            Margherita Graglia è psicoterapeuta, formatrice e saggista. Affianca
            all'attività clinica, come psicoterapeuta e sessuologa clinica,
            quella di formatrice e consulente sui temi dell'identità sessuale
            (sesso, genere e orientamento) in vari ambiti: sanitari, pubbliche
            amministrazioni, educativi, privati e associativi.
          </p>
        </div>
        <br />
      </div>
      <FeaturedBooks />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
