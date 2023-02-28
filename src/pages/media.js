import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Media = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>Media</h2>
    </div>
    <ul>
      <li>
        <h2>Commissione Giustizia della Camera dei Deputati</h2>
        <h3>
          Audizione in merito alle proposte di legge contro le discriminazioni
          basate sull’identità di genere e l’orientamento sessuale, Roma
          27/05/2020
        </h3>
        <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
          <video controls>
            <source src={"/video1.mp4"} type="video/mp4" />
          </video>
        </div>
      </li>
      <li>
        <h2>Camera dei deputati</h2>
        <h3>
          Convegno “Per la dignità delle persone. Contro la violenza
          omotransfobica”, Roma, 16/12/2019{" "}
        </h3>
        <a href="https://www.radioradicale.it/scheda/593379/per-la-dignita-delle-persone-contro-la-violenza-omotransfobica?i=4076662">
          LINK TO VIDEO
        </a>
      </li>
      <li>
        <h2>Consiglio Nazionale Forense</h2>
        <h3>
          Convegno di presentazione del progetto della Commissione diritti umani
          del CNF. “L’inclusione e la non discriminazione per motivi di
          orientamento sessuale, identità di genere, “razza” ed origine etnica
          nella società e nell’avvocatura”, Roma
        </h3>
        <a href="https://www.radioradicale.it/scheda/593379/per-la-dignita-delle-persone-contro-la-violenza-omotransfobica?i=4076662">
          MANCA VIDEO TODO:
        </a>
      </li>
      <li>
        <h2>Comune di Reggio Emilia</h2>
        <h3>
          “Che cos’è l’identità di genere? Prima pillola di conoscenza LGBT"
          (10/05/2020)
        </h3>
        <iframe
          width="710"
          height="400"
          src="https://www.youtube.com/embed/o7amnx89X-0"
          title="Margherita Graglia_Che cos’è l’identità di genere?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </li>
      <li>
        <h2>Comune di Reggio Emilia</h2>
        <h3>
          "Che cos’è l’orientamento sessuale? Seconda pillola di conoscenza
          LGBT" (16/06/2020)
        </h3>
        <iframe
          width="710"
          height="400"
          src="https://www.youtube.com/embed/1-5KyqLK4aM"
          title="Margherita Graglia_Che cos’è l’orientamento sessuale?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </li>
      <li>
        <h2>Comune di Reggio Emilia</h2>
        <h3>"Coltivare la speranza attraverso le domande"</h3>
        <iframe
          width="710"
          height="400"
          src="https://www.youtube.com/embed/MaOHDO7ARy0"
          title="Margherita Graglia_Coltivare la speranza attraverso le domande"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Media" />

export default Media
