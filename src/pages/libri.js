import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Libri = () => (
  <Layout>
    <h1>Hi from the Libri page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Libri" />

export default Libri
