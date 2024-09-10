import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BookFour = () => (
  <Layout>
    <div style={{ display: "flex", margin: "40px" }}>
      <div
        style={{
          width: "35%",
          height: "100%",
          padding: "3%",
          backgroundColor: "#eff1e9",
        }}
      >
        <img alt=''
          src="/th_incongruenza.webp"
          style={{ width: "500px" }}
        />
      </div>
      <div style={{ width: "70%", height: "100%", marginLeft: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "35px" }}>
          <h1 style={{ margin: 0 }}>L'INCONGRUENZA DI GENERE IN ADOLESCENZA</h1>
          <h2
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-lg)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Pratiche cliniche ed educative
          </h2>
          <h3
            style={{
              color: "#8a9a5b",
              fontSize: "var(--font-md)",
              fontWeight: 400,
              margin: 0,
            }}
          >
            Carocci Faber editore 2024
          </h3>
        </div>
        <p>
          In un panorama contemporaneo eterogeneo e dinamico, comprendere le sfumature delle identità di genere è di fondamentale importanza per gli adulti che si relazionano con gli adolescenti.
          <br />
          <br />
          Attraverso i dati delle ricerche più recenti e i contributi di autorevoli esperti, il libro fornisce un’analisi approfondita dell’incongruenza di genere. Inoltre, offre <strong>strumenti pratici per gli interventi educativi, per la presa in carico psicologica</strong> e per la promozione dell’inclusione istituzionale e sociale.
          <br />
          <br />
		  Rivolto a psicologi, operatori sanitari, educatori, insegnanti e genitori, come pure a chiunque sia interessato all’argomento, <strong>il testo accosta, in modo originale, prospettive cliniche e pedagogiche a un approccio multidisciplinare</strong>, presentando una visione integrata degli aspetti significativi che gli adolescenti con incongruenza di genere e gender variant affrontano nel percorso di riconoscimento e affermazione della propria identità.
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            style={{ textTransform: "uppercase", fontSize: "var(--font-sm)" }}
          >
            Titolo disponibile per la aquisizione su:{" "}
          </h3>
          <div style={{ display: "flex" }}>
            <a
              href={                "https://www.amazon.it/Lincongruenza-genere-adolescenza-Margherita-Graglia/dp/8874669968/ref=sr_1_1?dib=eyJ2IjoiMSJ9.oAwbcWtDxzcFng13lIB-m7-A1neiTFY75qpkq0EXbYZ0mapeUc3fW8VWR7Lfi59RXjOKUsEydwV2-9vc75acHg.GfzszsW6hiiFS-C2e3FEgK9vIQH7DE5dBEewqymgC78&dib_tag=se&keywords=graglia+margherita&qid=1725642954&sr=8-1"
              }
              target="_blank" rel="noreferrer"
            >
              <img alt='' width={'100%'} height={'50px'} src="/amazon-button.webp" style={{ height: "50px" }} />
            </a>
            <a
              href={
                "https://www.ibs.it/incongruenza-di-genere-in-adolescenza-libro-margherita-graglia/e/9788874669967"
              }
              target="_blank" rel="noreferrer"
            >
              <img alt=''
                src="/fibs-logo.png"
                style={{ height: "50px", marginLeft: "30px" }}
              />
            </a>
            <a
              href={
                "https://www.carocci.it/prodotto/lincongruenza-di-genere-in-adolescenza"
              }
              target="_blank" rel="noreferrer"
            >
              <img alt=''
                src="/carocci-logo.png"
                style={{ height: "50px", marginLeft: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <h2
      style={{
        backgroundColor: "#8a9a5b",
        color: "white",
        margin: 0,
        padding: "20px",
      }}
    >
      INDICE
    </h2>{" "}
    <p
      style={{
        display: "flex",
        padding: "0 35px",
        flexDirection: "column",
        borderTop: "1px solid black",
      }}
    >
      <br />
      <h3>
        Introduzione <br />
      </h3>
	  <h3>
        Parte prima<br />
		Aspetti teorici<br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        1. Dal passato al presente<br /> <br />
        2. La costruzione dell’identità in adolescenza <br /> <br />
        3. Il percorso di affermazione di genere. di <em>Davide Dettore</em> e <em>Francesca Mazzoli</em> <br /> <br />
        4. Il genere. Strumento di conoscenza e campo di conflitto sociale. di <em>Chiara Bertone</em> <br /> <br />
        5. Transnegatività <br /> <br />
	  <h3>
        Parte seconda<br />
		Aspetti applicativi<br />
      </h3>
      <div style={{ marginLeft: "15px" }}>
        6. Contesti di sviluppo<br /> <br />
        7. Incongruenza di genere e neurodiversità. di <em>Angela Caldarera</em> <br /> <br />
        8. Promuovere l’inclusione istituzionale <br /> <br />
        9. La co-costruzione del genere nei contesti educativi 0-6 anni. di <em>Alessandra Braglia</em> e <em>Elena Maccaferri</em> <br /> <br />
        10. Controversie e conflitti etici nell’incongruenza di genere: una disamina bioetica. di <em>Elena Nave</em> e <em>Matteo Cresti</em> <br /> <br />
        <strong>Conclusioni</strong>
        <strong>Bibliografia</strong>
        <strong>Materiali on line</strong>
		<div style={{ marginLeft: "15px" }}>
        11. La presa in carico psicologica di <em>Chiara Baietto</em><br /> <br />
        12. Corpo a corpo. L’identità di genere del terapeuta. di <em>Julien Montecchi</em> <br /> <br />
      </div>
    </p>
  </Layout>
)

export const Head = () => <Seo title="BookThree" />

export default BookFour
