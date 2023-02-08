import * as React from "react"
import * as styles from "../components/index.module.css"

import { GatsbyImage, getImage } from "gatsby-plugin-image"

import FeaturedBooks from "../components/featured-books"
import HeroBanner from "../components/hero-banner"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <HeroBanner />
      <div className={styles.intro}>
        <h2>Psicoterapeuta, formatrice e saggista</h2>
        <div className={styles.introInfo}>
          <p>
            Laureata in Psicologia clinica all&apos;Universit&agrave; di Torino.
            Specializzata in psicoterapia ad indirizzo costruttivista. Svolge
            l&apos;attivit&agrave; di psicoterapeuta e sessuologa clinica a
            Reggio Emilia.
          </p>

          <p>
            Iscritta all&apos;albo degli psicologi della Regione Emilia Romagna
            n. 2910 sez. A e all&apos;albo dei sessuologi della FISS
            (Federazione Italiana Sessuologia Scientifica) e del CIS (Centro
            Italiano di Sessuologia) per cui svolge l&rsquo;attivit&agrave; di
            didatta e consigliere.&nbsp;
          </p>

          <p>
            Affianca all&apos;attivit&agrave; clinica quella di&nbsp;
            <a
              target="_blank"
              href="http://www.margheritagraglia.it/psicoterapia.html"
            >
              formatrice e consulente
            </a>
            &nbsp;presso universit&agrave;, aziende USL, enti pubblici,
            istituzioni, Forze dell&rsquo;ordine, scuole di specialit&agrave;,
            scuole di ogni ordine e grado, aziende private e associazioni sui
            temi dell&apos;identit&agrave; sessuale (sesso, genere e
            orientamento), sul contrasto alle discriminazioni e sulla promozione
            dell&apos;inclusione sociale delle persone LGBT.&nbsp;
          </p>
          <p>
            Come esperta dei temi dell&rsquo;identit&agrave; sessuale e della
            promozione dell&rsquo;inclusione sociale &egrave; stata audita nel
            2020 in
            <strong>
              Commissione Giustizia della Camera dei Deputati&nbsp;
            </strong>
            a Roma (LINK alla sezione video; Video n1) in merito alle proposte
            di legge contro le discriminazioni basate sull&rsquo;identit&agrave;
            di genere e sull&rsquo;orientamento sessuale con una relazione dal
            titolo:
            <em>
              Le discriminazioni basate sull&rsquo;identit&agrave; di genere e
              sull&rsquo;orientamento sessuale. La prospettiva psico-sociale
            </em>
            . &nbsp;(LINK 1 PDF).&nbsp;
          </p>
          <p>
            Nel 2019 ha partecipato al Convegno &ldquo;Per la dignit&agrave;
            delle persone. Contro la violenza omotransfobica&rdquo;, presso
            la&nbsp;
            <a
              href="https://www.radioradicale.it/scheda/593379/per-la-dignita-delle-persone-contro-la-violenza-omotransfobica?i=4076662"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>Camera dei deputati</strong>&nbsp;
            </a>
            &nbsp; di Roma&nbsp;
          </p>

          <p>
            Nel 2020 ha partecipato al convegno di presentazione del progetto
            della Commissione diritti umani del Consiglio Nazionale Forense
            &ldquo;L&rsquo;inclusione e la non discriminazione per motivi di
            orientamento sessuale, identit&agrave; di genere,
            &ldquo;razza&rdquo; ed origine etnica nella societ&agrave; e
            nell&rsquo;avvocatura&rdquo;,
            <strong>Consiglio Nazionale Forense</strong>, Roma. LINK SEZIONE
            VIDEO 2 al minuto 1.52.08
          </p>

          <p>
            &Egrave; coordinatrice, dal 2015, del &quot;Tavolo
            interistituzionale per il contrasto
            all&apos;omotransnegativit&agrave; e per l&apos;inclusione delle
            persone LGBT&quot; del&nbsp;
            <a
              href="https://www.comune.re.it/argomenti/pari-opportunita/tavoli-interistituzionali/tavolo-interistituzionale-per-il-contrasto-all2019omotransnegativita-e-per-l2019inclusione-delle-persone-lgbt"
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>Comune di Reggio Emilia</strong>
            </a>
          </p>
          <p>
            E&apos; autrice per le edizioni Carocci di{" "}
            <em>Le differenze di sesso, genere e orientamento</em> (2019)
            (CAMBIARE COPERTINA, PDF 0),{" "}
            <em>Omofobia. Strumenti di analisi e di intervento</em> (2012),{" "}
            <em>Psicoterapia e omosessualit&agrave;</em> (2009) e di altre
            pubblicazioni scientifiche.
          </p>
          <p>
            E&rsquo; Componente della Commissione antidiscriminazione della
            societ&agrave; scientifica SIGIS (Societ&agrave; Italiana Genere,
            Identit&agrave; e Salute), Firenze.
          </p>
        </div>
        <br />
      </div>
      <FeaturedBooks />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
