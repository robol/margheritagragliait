import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Psicoterapia = () => (
  <Layout>
    <h1>Hi from the Psicoterapia page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Psicoterapia" />

export default Psicoterapia
