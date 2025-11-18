import * as React from "react"

const HeroBanner = () => {
  const bookPageLinks = [
    {
      text: "Libro 4",
      url: "/libri/book-four",
      image: "/th_incongruenza_sm.webp",
      description: "Libro 4",
      amazonLink:
        "https://www.amazon.it/Lincongruenza-genere-adolescenza-Margherita-Graglia/dp/8874669968/ref=sr_1_1?dib=eyJ2IjoiMSJ9.oAwbcWtDxzcFng13lIB-m7-A1neiTFY75qpkq0EXbYZ0mapeUc3fW8VWR7Lfi59RXjOKUsEydwV2-9vc75acHg.GfzszsW6hiiFS-C2e3FEgK9vIQH7DE5dBEewqymgC78&dib_tag=se&keywords=graglia+margherita&qid=1725642954&sr=8-1",
    },
    {
      text: "Libro 1",
      url: "/libri/book-one",
      image: "/th_differenze_sm.webp",
      description: "Libro 1",
      amazonLink:
        "https://www.amazon.it/differenze-sesso-genere-orientamento/dp/8874668082/ref=sr_1_1?__mk_it_IT=ÅMÅŽÕÑ&crid=2TOEP8XY3KJV7&keywords=graglia+margherita&qid=1673814942&sprefix=graglia+margherita%2Caps%2C93&sr=8-1",
    },
    {
      text: "Libro 2",
      url: "/libri/book-two",
      image: "/th_omofobia_sm.webp",
      description: "Libro 2",
      amazonLink:
        "https://www.amazon.it/Omofobia-Strumenti-analisi-intervento-Margherita/dp/8874666454/ref=sr_1_2?__mk_it_IT=ÅMÅŽÕÑ&crid=2TOEP8XY3KJV7&keywords=graglia+margherita&qid=1673814942&sprefix=graglia+margherita%2Caps%2C93&sr=8-2",
    },
    {
      text: "Libro 3",
      url: "/libri/book-three",
      image: "/th_psicoterapia_sm.webp",
      description: "Libro 3",
      amazonLink:
        "https://www.amazon.it/Psicoterapia-omosessualità-Margherita-Graglia/dp/8874665695/ref=sr_1_3?__mk_it_IT=ÅMÅŽÕÑ&crid=2TOEP8XY3KJV7&keywords=graglia+margherita&qid=1673814942&sprefix=graglia+margherita%2Caps%2C93&sr=8-3",
    },
  ]
  return (
    <>
      <div className="h1"
        style={{
          marginTop: "50px",
        }}
        key="featured-books-title"
      >
        LIBRI IN VETRINA
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "50px",
          flexWrap: "wrap",
          textAlignLast: "center",
        }}
        key="featured-books-container"
      >
        {bookPageLinks.map(book => (
          <div style={{ display: "flex", flexDirection: "column" }} key={"featured-book-" + book.url}>
            <a href={book.url} target="_blank" rel="noreferrer">
              <img alt=''
               width={'100%'} height={'300px'} 
                src={book.image}
                style={{ height: "300px", border: "1px solid black" }}
              />
            </a>
            <a href={book.amazonLink} target="_blank" rel="noreferrer">
              <img alt='' width={'100%'} height={'50px'} src="/amazon-button.webp" style={{ height: "50px" }} />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default HeroBanner
