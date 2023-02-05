import * as React from "react"
import * as styles from "./index.module.css"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BookListItem = ({ year, text, image, aboutLink }) => {
  console.log(year, text, image, aboutLink)
  return (
    <div className={styles.bookListItemContainer}>
      <span>{year}</span>
      <span>{text}</span>
      <img src={image} />
      <a target="_blank" href={aboutLink}>
        ABOUT
      </a>
    </div>
  )
}

export default BookListItem
