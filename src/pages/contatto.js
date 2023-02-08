import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Contatto = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>Contatto</h2>
    </div>
    <div style={{ padding: 20 }}>
      <p>
        Sede Via Montefiorino 12, 42123 Reggio Emilia Email
        graglia.margherita@gmail.com Social Linkedin Facebook Twitter Instagram
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contatto" />

export default Contatto
