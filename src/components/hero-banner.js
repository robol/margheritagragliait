import * as React from "react"
import * as styles from "../components/index.module.css"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroBanner = () => {
  return (
    <div className={styles.heroBanner}>
      {/*       <StaticImage //TODO: EVALUATE THIS
        src="../images/placeholder-background.jpg"
        loading="eager"
        quality={95}
        objectFit="cover"
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)`, width: " 100%" }}
      /> */}
      <div className={styles.typewriter} style={{}}>
        <h1>MARGHERITA GRAGLIA</h1>
      </div>
    </div>
  )
}

export default HeroBanner
