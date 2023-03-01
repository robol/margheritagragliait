import * as React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { useState } from "react"

const Psicoterapia = () => {
  const [readMore1, setReadMore1] = useState(false)
  const [readMore2, setReadMore2] = useState(false)
  const [readMore3, setReadMore3] = useState(false)
  const [readMore4, setReadMore4] = useState(false)
  const [readMore5, setReadMore5] = useState(false)
  const [readMore6, setReadMore6] = useState(false)
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
          PSICOTERAPIA
        </h2>
      </div>
      <div style={{ padding: 20 }}>
        <>
          <h3>Approccio terapeutico</h3>
          <p>
            <br />
            Il riferimento teorico&nbsp;del modello terapeutico &egrave; quello
            del&nbsp;costruttivismo che mette al centro l&rsquo;esperienza
            soggettiva, ossia come ogni persona &ldquo;costruisce&rdquo; la
            conoscenza di s&eacute;, degli altri e del mondo. Ogni individuo
            reagisce infatti agli eventi della vita in modo differente, in base
            al proprio sistema percettivo, cognitivo, emozionale e rispetto alle
            proprie esperienze intersoggettive.
          </p>
          <p>
            <br />
          </p>
          <p>
            L&rsquo;obiettivo della psicoterapia,...
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
                  {" "}
                  mettendo&nbsp;al centro l&rsquo;unicit&agrave; personale,
                  consiste nel promuovere un cambiamento nel modo in cui la
                  persona percepisce gli avvenimenti della propria vita e come
                  si rapporta ad essi.&nbsp;{" "}
                </p>
                <br />
                <p>
                  In quest&rsquo;ottica l&rsquo;intervento terapeutico &egrave;
                  un processo in cui il terapeuta e la persona che chiede aiuto
                  partecipano attivamente alla costruzione di nuovi significati,
                  nuove modalit&agrave; di espressione di s&eacute; e di
                  interazione con gli altri.
                </p>
              </>
            )}
          </p>
          <p>
            <br />
          </p>
        </>
        <>
          <h3>Ambiti di intervento</h3>
          <p>
            <br />
          </p>
          <p>
            La psicoterapia e la consulenza clinica si rivolgono a&nbsp;singoli
            o coppie&nbsp;nelle varie fasi del ciclo di vita.
          </p>
          <p>
            <br />
          </p>
          <p>
            Disagio psicologico ...
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
          </p>
          {readMore2 && (
            <>
              <p>
                Gli interventi sono mirati alla presa in carico, sia
                nell&rsquo;adulto sia nell&rsquo;adolescente, di molteplici
                situazioni di sofferenza psicologica che possono riguardare:
              </p>
              <p>
                <br />
              </p>
              <ul>
                <li>
                  <p>
                    problemi connessi all&rsquo;ansia, come ad esempio attacchi
                    di panico, paure connesse a specifici situazioni e luoghi;
                  </p>
                </li>
                <li>
                  <p>
                    problemi connessi al tono dell&rsquo;umore, come ad esempio
                    gli&nbsp;stati depressivi;
                  </p>
                </li>
                <li>
                  <p>problemi&nbsp;relazionali&nbsp;e interpersonali</p>
                </li>
              </ul>
            </>
          )}
          <p>
            Consulenza e terapia sessuologica&nbsp; ...
            {!readMore3 && (
              <button
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  border: "none",
                  backgroundColor: "inherit",
                }}
                onClick={() => setReadMore3(!readMore3)}
              >
                {"Scopri di più"}
              </button>
            )}
          </p>
          {readMore3 && (
            <>
              <p>
                La sessualit&agrave; rappresenta uno dei sistemi motivazionali
                interpersonali e si esprime in una&nbsp;pluralit&agrave; di
                modi. Libert&agrave;, espressivit&agrave;, comunicazione e
                relazionalit&agrave; sono i fondamenti principali per una
                sessualit&agrave; piacevole e appagante.
              </p>
              <p>
                <br />
              </p>
              <p>
                L&rsquo;intervento sessuologico &egrave; mirato alla gestione
                del disagio psicologico e relazionale nella sfera della
                sessualit&agrave; e alla risoluzione delle disfunzioni sessuali:
              </p>
              <p>
                <br />
              </p>
              <ul>
                <li>
                  <p>
                    difficolt&agrave; rispetto al&nbsp;desiderio
                    sessuale&nbsp;(assenza o diminuzione)
                  </p>
                </li>
                <li>
                  <p>
                    difficolt&agrave; durante l&rsquo;eccitamento
                    sessuale&nbsp;(difficolt&agrave; a raggiungere o mantenere
                    l&rsquo;erezione, difficolt&agrave; di eccitamento
                    femminile)
                  </p>
                </li>
                <li>
                  <p>
                    difficolt&agrave; rispetto
                    all&rsquo;orgasmo&nbsp;(eiaculazione precoce o ritardata,
                    anorgasmia, difficolt&agrave; a raggiungere l&rsquo;orgasmo
                    nelle donne)
                  </p>
                </li>
                <li>
                  <p>
                    dolore sessuale&nbsp;durante la penetrazione (dispareunia;
                    vaginismo, ossia l&rsquo;impossibilit&agrave; di ricevere la
                    penetrazione).
                  </p>
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                La tecnica sessuologica utilizzata prevede la terapia mansionale
                integrata e si avvale del supporto multidisciplinare attraverso
                la collaborazione con altri professionisti laddove si renda
                necessaria una consultazione medica o un supporto farmacologico.
              </p>
              <p>
                <br />
              </p>
              <p>
                La&nbsp;terapia mansionale integrata&nbsp;&egrave; un intervento
                di breve durata orientata a scopi mirati e specifici. Alla
                coppia vengono proposte alcune esperienze a casa (mansioni) tra
                una seduta e l&rsquo;altra con la finalit&agrave; di riflettere
                successivamente insieme per esplorare nuove modalit&agrave; di
                approccio alla sessualit&agrave;.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                Margherita Graglia &egrave; didatta e consigliera del CIS
                (Centro italiano di sessuologia) e iscritta alla FISS
                (Federazione italiana di sessuologia scientifica).&nbsp;
              </p>
            </>
          )}
          <p>
            Psicoterapia e consulenza per le persone LGBTQUIA+ ...
            {!readMore4 && (
              <button
                style={{
                  color: "green",
                  textTransform: "uppercase",
                  border: "none",
                  backgroundColor: "inherit",
                }}
                onClick={() => setReadMore4(!readMore4)}
              >
                {"Scopri di più"}
              </button>
            )}
          </p>
          {readMore4 && (
            <>
              <p>
                <br />
              </p>
              <img src="/img_1.jpeg" style={{ height: "450px" }} />
              <p>
                Il sesso, il genere e l&rsquo;orientamento sessuale sono
                dimensioni nucleari dell&rsquo;identit&agrave; umana e possono
                manifestarsi in una molteplicit&agrave; di forme.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                Gli interventi clinici sono mirati a supportare le persone con
                varianza di sesso, genere e orientamento nei loro percorsi di
                vita, esplorando e sostenendo l&rsquo;unicit&agrave; di ogni
                individuo.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                In questo ambito gli interventi psicologici possono
                riguardare&nbsp;l&rsquo;intersessualit&agrave;, le
                identit&agrave; transgender e gli orientamenti omosessuali,
                bisessuali e asessuali. Nello specifico sono indirizzati a
                fornire:
              </p>
              <p>
                <br />
              </p>
              <ul>
                <li>
                  <p>Consulenza psicologica alle&nbsp;persone intersex</p>
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                (esplorazione della propria identit&agrave;; coming out;
                integrazione della propria immagine corporea; supporto ai
                genitori)
              </p>
              <p>
                <br />
              </p>
              <ul>
                <li>
                  <p>
                    Consulenza psicologica alle&nbsp;persone transgender&nbsp;
                  </p>
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                (esplorazione dell&rsquo;identit&agrave; di genere nelle sue
                varianti &ndash; ad esempio quelle non binarie &ndash;
                nell&rsquo;et&agrave; adolescenziale e in quella adulta;
                supporto nelle varie fasi del percorso di affermazione di
                genere; redazione della certificazione per la rettificazione
                anagrafica; sostegno ai genitori e ai familiari; supporto nei
                vari contesti sociali, come ad esempio quello scolastico)
              </p>
              <p>
                <br />
              </p>
              <p>
                Margherita Graglia &egrave; componente della commissione
                antidiscriminazione della societ&agrave; scientifica SIGIS
                (Societ&agrave; italiana genere, identit&agrave; e salute)
              </p>
              <p>
                <br />
              </p>
              <ul>
                <li>
                  <p>
                    Consulenza psicologica rivolta alle&nbsp;persone&nbsp;gay,
                    lesbiche e bisessuali
                  </p>
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                (esplorazione dell&rsquo;orientamento sessuale; sostegno nel
                processo del coming out; consulenza di coppia; sostegno alle
                coppie non monogame; consulenza sessuologica; consulenza
                sull&rsquo;omogenitorialit&agrave;, sostegno durante il percorso
                di procreazione medicalmente assistita)
              </p>
              <p>
                <br />
              </p>
              <ul>
                <li>
                  <p>Percorso di gruppo per le persone LGBTQIA+</p>
                </li>
              </ul>
              <p>
                <br />
              </p>
              <p>
                Il gruppo di incontro&nbsp;&egrave; un percorso in gruppo mirato
                a conoscere ed esprimere i propri bisogni, desideri ed
                emozioni.&nbsp;
              </p>
              <p>
                <br />
              </p>
              <p>
                Il gruppo di incontro &egrave; rivolto a tutte le persone che
                vogliono esplorare il proprio orientamento sessuale e/o la
                propria identit&agrave; di genere e che vogliono condividere
                vissuti, esperienze e momenti di crescita.
              </p>
              <p>
                <br />
                L&rsquo;obiettivo principale &egrave; lo sviluppo e
                l&apos;affermazione della propria identit&agrave;,
                l&apos;espressione delle emozioni, del proprio punto di vista e
                una maggiore consapevolezza delle dinamiche interne ed
                interpersonali.
              </p>
            </>
          )}
        </>
        <>
          <h2>Supervisione e consulenza</h2>
          <p>
            <em>Supervisione clinica </em>
          </p>
          {!readMore5 && (
            <button
              style={{
                color: "green",
                textTransform: "uppercase",
                border: "none",
                backgroundColor: "inherit",
              }}
              onClick={() => setReadMore5(!readMore5)}
            >
              {"Scopri di più"}
            </button>
          )}
          {readMore5 && (
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
              {!readMore6 && (
                <button
                  style={{
                    color: "green",
                    textTransform: "uppercase",
                    border: "none",
                    backgroundColor: "inherit",
                  }}
                  onClick={() => setReadMore6(!readMore6)}
                >
                  {"Scopri di più"}
                </button>
              )}
              {readMore6 && (
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
        <>
          <h2>Formazione</h2>
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
              si basa sull&rsquo;approccio maieutico{" "}
              <Link
                to={"/approccio"}
                style={{
                  fontSize: `var(--font-md)`,
                  padding: `0 var(--space-4)`,
                  textDecoration: `none`,
                  color: `var( --color-text-white)`,
                  fontWeight: 700,
                }}
              >
                LINKSEZIONE Approccio
              </Link>{" "}
              che consente di attivare un coinvolgimento personale e un
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
                  color: `var( --color-text-white)`,
                  fontWeight: 700,
                }}
              >
                LINKSEZIONE CONTATTI
              </Link>
            </p>
          </>
        </>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Psicoterapia" />

export default Psicoterapia
