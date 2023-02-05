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
    },
    {
      text: "Libro 2",
      url: "libri/book-two",
      image: "/th_omofobia.jpeg",
      description: "Libro 2",
    },
    {
      text: "Libro 3",
      url: "libri/book-three",
      image: "/th_psicoterapia.jpeg",
      description: "Libro 3",
    },
  ]
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
        {bookPageLinks.map(book => (
          <a href={book.url} target="_blank" rel="noreferrer">
            <img src={book.image} style={{ height: "300px" }} />
          </a>
        ))}
      </div>
    </>
  )
}

export default HeroBanner
