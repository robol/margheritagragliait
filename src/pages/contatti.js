import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

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
    <div
      style={{
        display: "flex",
      }}
    >
      <StaticImage //TODO: EVALUATE THIS
        src="../images/placeholder-background.png"
        loading="eager"
        quality={95}
        objectFit="cover"
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ width: "50%" }}
      />
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <StaticImage
            src="../images/contatti-in.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <a
            href="https://www.linkedin.com/in/margherita-graglia-b1589415/"
            target="__blank"
          >
            Linkedin
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <StaticImage
            src="../images/contatti-fb.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <a
            href="https://www.facebook.com/margherita.graglia.70"
            target="__blank"
          >
            Facebook
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <StaticImage
            src="../images/contatti-tw.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginRight: 7 }}
          />
          <a href="https://twitter.com/mgraglia" target="__blank">
            Twitter
          </a>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <StaticImage
            src="../images/contatti-ig.png"
            loading="eager"
            formats={["auto", "webp", "avif"]}
            alt="https://www.instagram.com/graglia_margherita/"
            style={{ marginRight: 7 }}
          />
          <a href="" target="__blank">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contatti" />

export default Contatti
