import * as React from "react"

import Layout from "../../components/layout"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const BookOne = () => (
  <Layout>
    <h1>Hi from the BookOne page</h1>
    <StaticImage
      src="../../images/th_differenze.jpeg"
      loading="eager"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </Layout>
)

export const Head = () => <Seo title="BookOne" />

export default BookOne
