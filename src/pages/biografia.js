import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Biografia = () => (
  <Layout>
    <h1>Hi from the biografia page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Biografia" />

export default Biografia
