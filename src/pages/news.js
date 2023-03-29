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
        "Tracciare i confini del rispetto. Le violenze psicologiche di genere",
      entity: "Consiglio della provincia autonoma di Trento",
      location: "Trento",
      data: "4 marzo",
      images: ["/news_2a.jpg", "/news_2b.jpg"],
    },
    {
      title: "Intervista Telegiornale regionale",
      entity: "Rai",
      location: "Trento",
      data: "4 marzo",
      video: "/video3.mp4",
    },
    {
      title: "Intervista gr1 “Pupi Avati sull’omosessualità di Lucio Dalla”",
      entity: "Radio1",
      location: "Trento",
      data: "2 marzo",
      audio: "/audio1.mpeg",
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
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {news.map(newItem => (
          <div
            style={{
              padding: 20,
              borderLeft: "1px solid var(--color-primary)",
              borderBottom: "1px solid var(--color-primary)",
              flex: "50%",
            }}
          >
            <h2>Evento: {newItem.title}</h2>
            <h3>{newItem.entity && `Ente: ${newItem.entity}`}</h3>
            <h3>Dove: {newItem.location}</h3>
            <h3>Quando: {newItem.data}</h3>
            <ul style={{ display: "flex", flexDirection: "column" }}>
              {newItem.images?.map(url => (
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
              {newItem.audio && (
                <li
                  style={{
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <audio src={newItem.audio} controls />
                </li>
              )}
              {newItem.video && (
                <div
                  style={{
                    padding: 20,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <video controls style={{ width: 400 }}>
                    <source src={"/video3.mp4"} type="video/mp4" />
                  </video>
                </div>
              )}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="News" />

export default News
