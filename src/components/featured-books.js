import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroBanner = () => {
  const bookPageLinks = [
    {
      text: "Libro 1",
      url: "libri/book-one",
      image: "/th_differenze.jpeg",
      description: "Libro 1",
      amazonLink:
        "https://www.amazon.it/differenze-sesso-genere-orientamento/dp/8874668082/ref=sr_1_1?__mk_it_IT=ÅMÅŽÕÑ&crid=2TOEP8XY3KJV7&keywords=graglia+margherita&qid=1673814942&sprefix=graglia+margherita%2Caps%2C93&sr=8-1",
    },
    {
      text: "Libro 2",
      url: "libri/book-two",
      image: "/th_omofobia.jpeg",
      description: "Libro 2",
      amazonLink:
        "https://www.amazon.it/Omofobia-Strumenti-analisi-intervento-Margherita/dp/8874666454/ref=sr_1_2?__mk_it_IT=ÅMÅŽÕÑ&crid=2TOEP8XY3KJV7&keywords=graglia+margherita&qid=1673814942&sprefix=graglia+margherita%2Caps%2C93&sr=8-2",
    },
    {
      text: "Libro 3",
      url: "libri/book-three",
      image: "/th_psicoterapia.jpeg",
      description: "Libro 3",
      amazonLink:
        "https://www.amazon.it/Psicoterapia-omosessualità-Margherita-Graglia/dp/8874665695/ref=sr_1_3?__mk_it_IT=ÅMÅŽÕÑ&crid=2TOEP8XY3KJV7&keywords=graglia+margherita&qid=1673814942&sprefix=graglia+margherita%2Caps%2C93&sr=8-3",
    },
  ]
  return (
    <>
      <h1
        style={{
          marginTop: "50px",
        }}
      >
        Libri in vetrina
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
          flexWrap: "wrap",
        }}
      >
        {bookPageLinks.map(book => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a href={book.url} target="_blank" rel="noreferrer">
              <img src={book.image} style={{ height: "300px" }} />
            </a>
            <a href={book.amazonLink}>
              <img src="/amazon-button.png" style={{ height: "50px" }} />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default HeroBanner
