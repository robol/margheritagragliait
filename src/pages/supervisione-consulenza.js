import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { useState } from "react"

const Supervisione = () => {
  const [readMore1, setReadMore1] = useState(false)
  const [readMore2, setReadMore2] = useState(false)

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>
          Supervisione e consulenza
        </h2>
      </div>
      <div style={{ padding: 20 }}>
        <>
          <h2>Supervisione e consulenza</h2>
          <p>
            <em>Supervisione clinica </em>
          </p>
          {!readMore1 && (
            <button
              style={{
                color: "green",
                textTransform: "uppercase",
                border: "none",
                backgroundColor: "inherit",
              }}
              onClick={() => setReadMore1(!readMore1)}
            >
              {"Scopri di più"}
            </button>
          )}
          {readMore1 && (
            <>
              <p>
                I&nbsp;<strong>professionisti della salute</strong>
                &nbsp;(psicologi, psichiatri, medici, assistenti sociali) che
                operano nel pubblico o nel privato e gli&nbsp;
                <strong>educatori</strong>&nbsp;possono effettuare percorsi o
                sedute singole di supervisione (in gruppo o individualmente) sui
                temi dell&rsquo;identit&agrave; sessuale:
              </p>
              <ul>
                <li>Intersessualit&agrave;</li>
                <li>
                  Varianza di genere nell&rsquo;et&agrave; evolutiva e adulta
                </li>
                <li>
                  Incongruenza di genere e percorso di affermazione di genere
                </li>
                <li>Orientamento sessuale</li>
                <li>Omogenitorialit&agrave;</li>
              </ul>
              <h3>Consulenza istituzionale </h3>{" "}
              {!readMore2 && (
                <button
                  style={{
                    color: "green",
                    textTransform: "uppercase",
                    border: "none",
                    backgroundColor: "inherit",
                  }}
                  onClick={() => setReadMore2(!readMore2)}
                >
                  {"Scopri di più"}
                </button>
              )}
              {readMore2 && (
                <>
                  <p>
                    Le <strong>istituzioni,</strong> le{" "}
                    <strong>amministrazioni pubbliche, </strong>le{" "}
                    <strong>aziende private</strong> e le{" "}
                    <strong>associazioni</strong> possono ricevere consulenza su
                    progetti di contrasto alle discriminazioni basate sul sesso,
                    genere e orientamento sessuale cos&igrave; come sulle azioni
                    da intraprendere per promuovere l&rsquo;inclusione sociale
                    degli utenti e del personale LGBTQIA+.&nbsp;
                  </p>
                  <p>
                    Le <strong>scuole</strong> possono ricevere indicazioni per
                    l&rsquo;adozione della carriera alias per gli studenti
                    transgender.&nbsp;
                  </p>
                  <p>
                    Le <strong>aziende private </strong>possono richiedere
                    informazioni e consulenza sul <em>diversity management</em>{" "}
                    volto a valorizzare le differenze nei contesti lavorativi e
                    a promuovere <em>l&rsquo;equity e l&rsquo;inclusion</em>.
                  </p>
                  <p>
                    Margherita Graglia ha maturato un&rsquo;esperienza
                    trentennale sui progetti di promozione dell&rsquo;inclusione
                    sociale delle persone LGBTQIA+ all&rsquo;interno dei
                    contesti istituzionali, privati e associativi.
                  </p>
                  <p>
                    E&rsquo; possibile richiedere informazioni{" "}
                    <Link
                      to={"/contatti"}
                      style={{
                        fontSize: `var(--font-md)`,
                        padding: `0 var(--space-4)`,
                        textDecoration: `none`,
                        color: `var( --color-text-white)`,
                        fontWeight: 700,
                      }}
                    >
                      LINKSEZIONE CONTATTI
                    </Link>
                  </p>
                </>
              )}
            </>
          )}
        </>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Supervisione" />

export default Supervisione
