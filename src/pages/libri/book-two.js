import * as React from "react"

import Layout from "../../components/layout"
import { Link } from "gatsby"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const BookTwo = () => (
  <Layout>
    <h1>Hi from the BookTwo page</h1>
    <StaticImage
      src="../../images/th_omofobia.jpeg"
      loading="eager"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </Layout>
)

export const Head = () => <Seo title="BookTwo" />

export default BookTwo
