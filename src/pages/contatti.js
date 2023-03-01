import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Contatti = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>Contatti</h2>
    </div>
    <div style={{ padding: 20 }}>
      <p>
        <strong>
          <em>Sede</em>
        </strong>
      </p>
      <p>Via Montefiorino 12, 42123 Reggio Emilia</p>
      <p>
        <strong>
          <em>Email</em>
        </strong>
      </p>
      <p>
        <a target="_blank" href="mailto:graglia.margherita@gmail.com">
          graglia.margherita@gmail.com
        </a>
      </p>
      <p>
        <strong>
          <em>Social</em>
        </strong>
      </p>
      <p>Linkedin</p>
      <p>Facebook</p>
      <p>Twitter</p>
      <p>Instagram</p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contatti" />

export default Contatti
