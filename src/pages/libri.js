import * as React from "react"
import * as styles from "../components/index.module.css"

import BookListItem from "../components/book-list-item"
import Filters from "../components/filters"
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
  const yearLabels = [
    { label: "1997", slug: "1997", link: null },
    { label: "2000", slug: "2000", link: null },
    { label: "2003", slug: "2003", link: null },
    { label: "2006", slug: "2006", link: null },
    { label: "2009", slug: "2009", link: null },
    { label: "2012", slug: "2012", link: null },
    { label: "2015", slug: "2015", link: null },
    { label: "2018", slug: "2018", link: null },
    { label: "2022", slug: "2022", link: null },
  ]
  const typeOfPub = [
    { label: "Libro", slug: "book", link: "" },
    { label: "Articolo", slug: "article", link: "" },
    { label: "Interview", slug: "interview", link: "" },
    { label: "Video", slug: "video", link: "" },
  ]
  const recentPub = [
    {
      label: "Lorem Ipsum has been the industry's standard dummy",
      slug: "",
      link: "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
    {
      label: "Lorem Ipsum has been the industry's standard dummy",
      slug: "",
      link: "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
    {
      label: "Lorem Ipsum has been the industry's standard dummy",
      slug: "",
      link: "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
    {
      label: "Lorem Ipsum has been the industry's standard dummy",
      slug: "",
      link: "https://ricerca.repubblica.it/repubblica/archivio/repubblica/2018/05/21/la-legge-sullomofobia-e-lesperienza-di-reggio-emiliaBologna03.html",
    },
  ]
  const handleFilter = slug => console.log(slug)
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          {books.map(el => (
            <BookListItem
              year={el.year}
              text={el.text}
              image={el.image}
              aboutLink={el.aboutLink}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Filters handleFilter={handleFilter} filterItems={yearLabels} />
          <Filters handleFilter={handleFilter} filterItems={typeOfPub} />
          <Filters handleFilter={handleFilter} filterItems={recentPub} />
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Libri" />

export default Libri
