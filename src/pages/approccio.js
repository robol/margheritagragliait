import * as React from "react"
import * as style from "../components/index.module.css"

import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import { useState } from "react"

const Approccio = () => {
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
          Approccio maieutico
        </h2>
      </div>
      <div className={style.paddingWrapper}>
        <p>
          L&rsquo;approccio maieutico crea le condizioni per l&rsquo;incontro ed
          &egrave; centrato sull&rsquo;<strong>ascolto</strong> e sull&rsquo;
          <strong>interazione</strong>. Il suo principale strumento &egrave; la
          domanda che instaura una dimensione paritetica e dialogica.
        </p>
        <p>
          Il termine &ldquo;maieutica&rdquo; origina dal greco antico
          &mu;&alpha;&iota;&epsilon;&upsilon;&tau;&iota;&kappa;ό&sigmaf;:
          l&rsquo;arte della levatrice, di socratica memoria. L&rsquo;ostetrica
          non &egrave; artefice di una creazione, ma &egrave; colei che aiuta la
          madre a dare alla luce il suo neonato.&nbsp;
        </p>
        <p>
          La tecnica maieutica permette, attraverso l&rsquo;ausilio delle
          domande, di &ldquo;partorire&rdquo;, di mettere a fuoco nuove
          conoscenze, partendo da s&eacute; e non da punti di vista prestabiliti
          e imposti.{" "}
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
              {" "}
              In quest&rsquo;ottica, chi facilita gli incontri di formazione
              &ndash; cos&igrave; come lo psicoterapeuta nel setting clinico -
              &egrave; come una levatrice della conoscenza che aiuta,
              avvalendosi delle potenzialit&agrave; di ognuno, a riflettere
              sulle conoscenze possedute e sui modi di pensare. Da un lato offre
              l&rsquo;opportunit&agrave; di decostruire le concezioni assunte
              come scontate e dall&rsquo;altro permette di accedere a nuove
              visioni creative grazie al confronto reciproco, potendo fluire in
              una conoscenza in costante divenire.&nbsp;
            </p>
            <p>
              Secondo la <strong>prospettiva costruttivista</strong> non esiste
              una conoscenza del mondo indipendente dall&rsquo;osservatore, ma
              esistono varie &ldquo;versioni del mondo&rdquo; a seconda dei
              vertici osservativi da cui si guarda la realt&agrave; (Von
              Foerster,1987). Ognuno di noi infatti attribuisce significati a
              s&eacute;, agli altri e al mondo. L&rsquo;unicit&agrave; di ognuno
              viene messa in relazione con la necessit&agrave; umana di creare
              connessioni e legami e di costruire una reciprocit&agrave; di
              significati intersoggettivi.&nbsp;
            </p>
            <p>
              Il metodo maieutico, utilizzato durante gli interventi di
              inclusione, come nel caso della formazione, consente di far
              emergere la variet&agrave; dei punti di vista, dando
              l&rsquo;opportunit&agrave; di vedere da altre angolazioni e di
              prendere consapevolezza della propria responsabilit&agrave; come
              &lsquo;
              <strong>costruttore di mondi&rsquo;</strong>. In
              quest&rsquo;ottica, il cambiamento di opinioni e atteggiamenti
              pu&ograve; avvenire in quanto i partecipanti sono coinvolti
              personalmente in un processo di acquisizione ed elaborazione
              individuale insieme ad altri. La formazione assume cos&igrave; le
              caratteristiche di un laboratorio, le cui peculiarit&agrave; sono
              costituite dall&rsquo;esplorazione, dall&rsquo;espressione e dal
              confronto paritario. In sostanza, una collaborazione tra soggetti
              portatori di punti di vista differenti. Il lavoro di gruppo
              risulta inoltre particolarmente efficace in quanto promuove lo
              sviluppo della motivazione, della condivisione delle emozioni,
              dell&rsquo;empatia e facilita l&rsquo;elaborazione cognitiva. I
              risultati delle ricerche sul sistema dei neuroni specchio
              confermano l&rsquo;importanza dell&rsquo;interazione sociale per
              l&rsquo;apprendimento (Rizzolati et al., 2019): mentre osserviamo
              gli altri si attivano infatti le stesse aree cerebrali.
            </p>
            <p>
              Un simile approccio evidenzia la responsabilit&agrave; e
              delicatezza del <strong>ruolo del facilitatore</strong>, che
              appunto favorisce gli scambi, l&rsquo;emersione dei significati, e
              che mette in connessione i vari contributi, cogliendo le basi
              dialogiche delle interazioni senza essere in alcun modo
              prescrittivo. Si tratta di una modalit&agrave; incentrata sui
              partecipanti e non sui contenuti da trasmettere, fondata su un
              apprendimento dinamico, in cui il facilitatore utilizza la sua
              cassetta degli attrezzi con flessibilit&agrave;, adattandola ai
              processi emergenti. Sebbene la formazione preveda una struttura di
              base, il facilitatore deve essere disposto a rivederla in itinere
              a seconda dei bisogni emergenti. Non si tratta infatti di
              applicare un protocollo in maniera asettica e standardizzata, ma
              di fluire all&rsquo;interno di un{" "}
              <strong>processo in divenire</strong> che ha bisogno di essere
              adattato all&rsquo;unicit&agrave; di quella precisa situazione
              gruppale e istituzionale.
            </p>
            <p>
              Il raggiungimento degli obiettivi inclusivi prefissati implica
              necessariamente la costruzione di una nuova, pi&ugrave; ampia e
              articolata mappa di significati, di mondi possibili e di strumenti
              per poterli rendere abitabili da tutte, tutti e tutt*. Una
              formazione che mette in moto dei processi che &egrave; auspicabile
              continuino anche oltre le attivit&agrave; specifiche
              dell&rsquo;iniziativa formativa. Lavorando in una comunit&agrave;
              di apprendimento, i partecipanti possono infatti sviluppare{" "}
              <strong>nuove consapevolezze e competenze</strong> e diventare
              autonomi nel portare avanti gli obiettivi dell&rsquo;inclusione.
              La tappa finale della formazione &egrave; pertanto mirata a
              rendere operative e permanenti le nuove acquisizioni.
            </p>
          </>
        )}
        <h3 style={{ paddingBottom: "15px", borderBottom: "1px solid black" }}>
          L&rsquo;approccio maieutico in pratica
        </h3>
        <p>
          L&rsquo;approccio maieutico fin qui delineato trae spunto dalla mia
          pratica di psicoterapeuta e di formatrice. A livello istituzionale
          questo metodo &egrave; stato sperimentato e messo a punto in vari
          ambiti :
        </p>
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
              A partire dalla fine degli anni &rsquo;90 nei contesti scolastici
              di secondo grado con i corsi &ldquo;Educare al rispetto.
              Educazione socio-affettiva sui temi dell'identit&agrave;
              sessuale&rdquo;, autorizzati inizialmente dai Provveditorati agli
              studi provinciali e in seguito dal MIUR ai sensi della Direttiva
              n. 90 del 1&deg; Dicembre 2003 e in vari altri corsi formativi
              rivolti a operatori psico-socio-sanitari, educativi, delle Forze
              dell&rsquo;ordine e delle Pubbliche amministrazioni.
              <br /> In particolare, L&rsquo;approccio maieutico trova la sua
              versione pi&ugrave; completa, articolata e sistematica nelle
              azioni del{" "}
              <em>
                Tavolo interistituzionale per il contrasto
                all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione
                delle persone LGBT
              </em>{" "}
              del Comune di Reggio Emilia. Per quanto concerne il Tavolo
              l&rsquo;approccio maieutico &egrave; stato utilizzato sia nella
              fase di costituzione sia in quella pi&ugrave; propriamente
              formativa.
            </p>
            <p>
              Testo tratto da <strong>Graglia M.</strong> (2020). &ldquo;
              <strong>
                Fare formazione sui temi LGBT nelle istituzioni pubbliche
              </strong>
              : il caso del{" "}
              <em>
                Tavolo interistituzionale per il contrasto
                all&rsquo;omotransnegativit&agrave; e per l&rsquo;inclusione
                delle persone LGBT
              </em>{" "}
              del Comune di Reggio Emilia&rdquo;, in{" "}
              <em>
                Genere e R-esistenze in movimento. Soggettivit&agrave;, azioni,
                prospettive
              </em>
              , a cura di Coppola M.M., Don&agrave; A., Poggio B., Tuselli A.,
              pp. 141-153, Universit&agrave; degli studi di Trento. ISBN:
              978-88-8443-894-2.{" "}
              <button
                onClick={() =>
                  window.open(
                    "/2_convegno-CSG-trento-2020-Graglia.pdf",
                    "_blank",
                    "fullscreen=yes"
                  )
                }
              >
                LINK
              </button>
            </p>
          </>
        )}
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="Approccio" />

export default Approccio
