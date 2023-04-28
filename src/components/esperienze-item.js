import * as React from "react"
import * as styles from "./index.module.css"

const EsperienzeItem = ({ title, year, entity, role, description }) => {
  return (
    <>
      <div className={styles.esperienzeItem}>
        <h3
          className={styles.esperienzeItemTitle}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        {year && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Anno:&nbsp;</strong>
            <span dangerouslySetInnerHTML={{ __html: year }}></span>
          </span>
        )}
        {entity && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Ente:&nbsp;</strong>
            <span dangerouslySetInnerHTML={{ __html: entity }}></span>
          </span>
        )}
        {role && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Ruolo:&nbsp;</strong>{" "}
            <span dangerouslySetInnerHTML={{ __html: role }}></span>
          </span>
        )}
        {description && (
          <>
            <br />
            <span
              className={styles.esperienzeItemInfo}
              dangerouslySetInnerHTML={{ __html: description }}
            ></span>
          </>
        )}
      </div>
    </>
  )
}

export default EsperienzeItem
