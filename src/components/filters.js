import * as React from "react"
import * as styles from "./index.module.css"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Filters = ({ filterItems, handleFilter }) => {
  console.log(filterItems)
  return (
    <>
      {filterItems.map(filter => {
        return filter.link ? (
          <a href={filter.link} target="_blank" rel="noreferrer">
            <h3>{filter.label}</h3>
          </a>
        ) : (
          <div onClick={() => handleFilter(filter.slug)}>
            <h3>{filter.label}</h3>
          </div>
        )
      })}
    </>
  )
}

export default Filters
