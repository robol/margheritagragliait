import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const News = () => {
  const news = [
    {
      title: "Valorizzare le differenze a scuola: percorsi e strumenti",
      entity: "",
      location: "Brescia",
      data: "7 marzo",
      images: ["/news_1.jpg"],
    },
    {
      title:
        "Tracciare i confini del rispetto. Le violenze psicologiche di generei",
      entity: "Consiglio della provincia autonoma di Trento",
      location: "Trento",
      data: "4 marzo",
      images: ["/news_2a.jpg", "/news_2b.jpg"],
    },
  ]
  const toggleFullScreen = e => {
    console.log(e)
    e.target.requestFullscreen()
  }
  return (
    <Layout>
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>News</h2>
      </div>
      <div style={{ display: "flex" }}>
        {news.map(newItem => (
          <div
            style={{
              padding: 20,
              borderLeft: "1px solid var(--color-primary)",
              borderBottom: "1px solid var(--color-primary)",
            }}
          >
            <h2>Evento: {newItem.title}</h2>
            <h3>{newItem.entity && `Instituto: ${newItem.entity}`}</h3>
            <h3>Dove: {newItem.location}</h3>
            <h3>Quando: {newItem.data}</h3>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              {newItem.images.map(url => (
                <li>
                  <img
                    style={{
                      width: 400,
                      cursor: "pointer",
                      border: "1px solid black",
                    }}
                    src={url}
                    onClick={e => toggleFullScreen(e)}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="News" />

export default News
