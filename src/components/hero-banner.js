import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroBanner = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxHeight: "500px",
        overflow: "hidden",
      }}
    >
      <StaticImage //TODO: EVALUATE THIS
        src="../images/placeholder-background.png"
        loading="eager"
        quality={95}
        objectFit="cover"
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)`, width: " 100%" }}
      />
      <h1
        style={{
          position: "absolute",
        }}
      >
        MARGHERITA GRAGLIA
      </h1>
    </div>
  )
}

export default HeroBanner
