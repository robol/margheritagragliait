import * as React from "react"
import * as styles from "../components/index.module.css"

import BookListItem from "../components/book-list-item"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Libri = () => {
  const books = [
    {
      year: 2018,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: `/th_differenze.jpeg`,
      aboutLink:
        "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
    {
      year: 2018,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: `/th_differenze.jpeg`,
      aboutLink:
        "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
    {
      year: 2018,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: `/th_differenze.jpeg`,
      aboutLink:
        "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
    {
      year: 2018,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: `/th_differenze.jpeg`,
      aboutLink:
        "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
  ]
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>LIBRI</h2>
      </div>
      <div className={styles.booksPageContainer}>
        {books.map(el => (
          <BookListItem
            year={el.year}
            text={el.text}
            image={el.image}
            aboutLink={el.aboutLink}
          />
        ))}
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Libri" />

export default Libri
