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
          Formazione
        </h2>
      </div>
      <div style={{ padding: 45, paddingBottom: 0 }}>
        <>
          <>
            <h3>Obiettivi</h3>
            <p>
              La formazione sulle tematiche inerenti l'identit&agrave; sessuale
              (sesso, genere e orientamento) &egrave; mirata a sviluppare
              competenze professionali per{" "}
              <strong>
                qualificare il rapporto con l'utenza e il personale LGBT
              </strong>{" "}
              e individuare <strong>buone prassi</strong> al fine di contrastare
              le discriminazioni e&nbsp;promuovere l'
              <strong>inclusione</strong>
              &nbsp;degli utenti e del personale non eterosessuale o con
              un'identit&agrave; di genere variante.&nbsp;
            </p>
          </>
          <>
            <h3>Contenuti</h3>
            <ul>
              <li>
                Alfabetizzazione su: sesso, identit&agrave; di genere e
                orientamento sessuale
              </li>
              <li>Intersessualit&agrave;</li>
              <li>
                Varianza di genere in et&agrave; evolutiva, incongruenza di
                genere, percorso di affermazione di genere
              </li>
              <li>Omogenitorialit&agrave;</li>
              <li>
                Contrasto alle discriminazione e promozione
                dell&rsquo;inclusione sociale
              </li>
              <li>Buone prassi nei vari contesti istituzionali</li>
            </ul>
          </>
          <>
            <h3>Destinatari</h3>

            <p>
              La formazione pu&ograve; essere rivolta agli&nbsp;operatori -
              <strong>
                {" "}
                nel pubblico, nel privato e nelle associazioni - dell'area della
                salute
              </strong>
              &nbsp;(psicologi, psicoterapeuti, medici, infermieri),&nbsp;
              <strong>dell'area sociale/amministrativa</strong>
              &nbsp;(assistenti sociali, dipendenti della Pubblica
              amministrazione, dipendenti delle varie istituzioni, ad esempio le
              Forze dell&rsquo;ordine, ecc) e dell&rsquo;
              <strong>area&nbsp;educativa</strong>
              &nbsp;(insegnanti ed educatori).
            </p>
          </>
          <>
            <h3>Metodologia</h3>

            <p>
              Contenuti e cronologia delle attivit&agrave; vengono definiti
              insieme alla committenza.
            </p>
            <p>
              La metodologia si basa sulla concertazione, sulla
              riflessivit&agrave; e sulla processualit&agrave;.&nbsp;
            </p>
            <p>
              L&rsquo;azione formativa si basa su scelte metodologiche
              improntate alle tecniche di didattica attiva e partecipata al fine
              di favorire una comprensione pi&ugrave; diretta dei temi
              presentati e un&rsquo;elaborazione pi&ugrave; approfondita e
              condivisa, organizzata intorno a momenti di lavoro di gruppo,
              discussione di casi e role playing. In particolare, la metodologia
              si basa sull&rsquo;&nbsp;
              <Link
                to={"/approccio"}
                style={{
                  fontSize: `var(--font-md)`,

                  textDecoration: `none`,
                  color: `var( --color-primary)`,
                  fontWeight: 700,
                }}
              >
                approccio maieutico
              </Link>
              &nbsp;che consente di attivare un coinvolgimento personale e un
              confronto collaborativo fra tutti i partecipanti.
            </p>
          </>
          <>
            <h3>Scansione temporale</h3>

            <p>
              Nello stabilire la cronologia delle attivit&agrave; si tiene conto
              dei bisogni dell&rsquo;organizzazione.&nbsp;
            </p>
            <p>
              L&rsquo;unit&agrave; formativa pu&ograve; svolgersi come singolo
              seminario, ciclo di incontri di informazione-sensibilizzazione,
              corso di formazione strutturato in pi&ugrave; incontri a cadenza
              settimanale o quindicinale e progetti formativi pluriannuali.
            </p>
          </>
          <>
            <h3>Competenze</h3>

            <p>
              Margherita Graglia ha maturato un&rsquo;
              <strong>esperienza trentennale</strong> nella progettazione,
              coordinamento e conduzione di corsi di formazione finalizzati alla
              promozione dell&rsquo;inclusione sociale delle persone LGBTQIA+
              all&rsquo;interno dei contesti istituzionali, privati e
              associativi.
            </p>
            <p>
              E&rsquo; possibile richiedere informazioni sui progetti di
              formazione e sui corsi attivati{" "}
              <Link
                to={"/contatti"}
                style={{
                  fontSize: `var(--font-md)`,
                  padding: `0 var(--space-4)`,
                  textDecoration: `none`,
                  color: `var( --color-primary)`,
                  fontWeight: 700,
                }}
              >
                CONTATTI
              </Link>
            </p>
          </>
        </>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Supervisione" />

export default Supervisione
