import * as React from "react"
import * as styles from "../components/index.module.css"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const samplePageLinks = [
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

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>MARGHERITA GRAGLIA</h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
      </p>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
