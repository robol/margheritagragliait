import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Media = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>
        Media e articoli
      </h2>
    </div>
    <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
      <video controls>
        <source src={"/video1.mp4"} type="video/mp4" />
      </video>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Media" />

export default Media
