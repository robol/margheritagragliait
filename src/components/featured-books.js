import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroBanner = () => {
  return (
    <>
      <h1>Featured Books</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        <a href={"libri/book-one"} target="_blank" rel="noreferrer">
          <StaticImage //TODO: EVALUATE THIS
            src={"../images/th_differenze.jpeg"}
            loading="eager"
            quality={95}
            height=" 300px"
            width="100%"
            objectFit="contain"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ height: "300px" }}
          />
        </a>
        <a href={"libri/book-two"} target="_blank" rel="noreferrer">
          <StaticImage //TODO: EVALUATE THIS
            src={"../images/th_omofobia.jpeg"}
            loading="eager"
            quality={95}
            height=" 300px"
            width="100%"
            objectFit="contain"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ height: "300px" }}
          />
        </a>
        <a href={"libri/book-three"} target="_blank" rel="noreferrer">
          <StaticImage //TODO: EVALUATE THIS
            src={"../images/th_psicoterapia.jpeg"}
            loading="eager"
            quality={95}
            height=" 300px"
            width="100%"
            objectFit="contain"
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ height: "300px" }}
          />
        </a>
      </div>
    </>
  )
}

export default HeroBanner
