import * as React from "react"
import * as styles from "./index.module.css"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BookListItem = ({ year, text, image, aboutLink }) => {
  console.log(year, text, image, aboutLink)
  return (
    <>
      <span className={styles.bookListItemYear}>{year}</span>
      <div className={styles.bookListItemContainer}>
        <img alt='' src={image} className={styles.bookListItemImage} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span className={styles.bookListItemText}>{text}</span>
          <a
            target="_blank" rel="noreferrer"
            href={aboutLink}
            className={styles.bookListItemAboutlink}
          >
            ABOUT
          </a>
        </div>
      </div>
    </>
  )
}

export default BookListItem
