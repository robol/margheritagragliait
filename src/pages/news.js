import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const News = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>News</h2>
    </div>
    <div style={{ padding: 20 }}>
      <p>News</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="News" />

export default News
