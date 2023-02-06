import * as React from "react"
import * as styles from "./index.module.css"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const EsperienzeItem = ({ title, year, entity, role }) => {
  return (
    <>
      <div className={styles.esperienzeItem}>
        <h3 className={styles.esperienzeItemTitle}>{title} </h3>
        {year && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Anno:&nbsp;</strong> {year}
          </span>
        )}
        {entity && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Instituto:&nbsp;</strong>
            {entity}
          </span>
        )}
        {role && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Ruolo:&nbsp;</strong> {role}
          </span>
        )}
      </div>
    </>
  )
}

export default EsperienzeItem
