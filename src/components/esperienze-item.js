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
            <p dangerouslySetInnerHTML={{ __html: year }}></p>
          </span>
        )}
        {entity && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Instituto:&nbsp;</strong>
            <p dangerouslySetInnerHTML={{ __html: entity }}></p>
          </span>
        )}
        {role && (
          <span className={styles.esperienzeItemInfo}>
            <strong>Ruolo:&nbsp;</strong>{" "}
            <p dangerouslySetInnerHTML={{ __html: role }}></p>
          </span>
        )}
        {description && (
          <>
            <br />
            <p
              className={styles.esperienzeItemInfo}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </>
        )}
      </div>
    </>
  )
}

export default EsperienzeItem
