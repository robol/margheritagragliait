import * as React from "react"
import * as styles from "../components/index.module.css"

import EsperienzeItem from "../components/esperienze-item"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const Esperienze = () => (
  <Layout>
    <div
      style={{
        backgroundColor: "var(--color-primary)",
        padding: "30px 0",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "var(--color-text-white)", margin: 0 }}>
        ESPERIENZE PROFESSIONALI (sintesi)
      </h2>
    </div>
    <div className={styles.esperienzeContainer}>
      {/*       <div className={styles.esperienzeItem}>
        <h3 className={styles.esperienzeItemTitle}>
          Master GeDIE (Gestione delle Diversità: Inclusione ed Equità)
        </h3>
        <span className={styles.esperienzeItemInfo}>
          <strong>Anno:&nbsp;</strong> 2020
        </span>
        <span className={styles.esperienzeItemInfo}>
          <strong>Instituto:&nbsp;</strong>Universit&agrave; di Trento
        </span>
        <span className={styles.esperienzeItemInfo}>
          <strong>Ruolo:&nbsp;</strong> Docente
        </span>
      </div> */}
      <EsperienzeItem
        title={`Master GeDIE (Gestione delle Diversità: Inclusione ed Equità)`}
        year={`Dal 2020`}
        entity={`Università di Trento`}
        role={`Docente`}
      />
      <EsperienzeItem
        title={`Psicoterapia dello sviluppo e dell'adolescenza`}
        year={`Presente`}
        entity={`Scuola di Specializzazione, riconosciuta dal
        MIUR, in "Psicoterapia dello sviluppo e dell'adolescenza"
        nelle sedi di Reggio Emilia, Brescia e Trento.`}
        role={`Docente`}
      />
      <EsperienzeItem
        title={`Esperta sui temi dell’identità transgender`}
        year={`2021-2022`}
        entity={`Progetto europeo Supporting Wellbeing and Integration of Transgender victims in Care environments with Holistic approach dall’Ausl di Reggio Emilia`}
        role={`Docente`}
      />
      <p>
        Dal 2020 &egrave; docente per il master GeDIE&nbsp;&nbsp;(Gestione delle
        Diversit&agrave;: Inclusione ed Equit&agrave;) dell&rsquo;
        <strong>Universit&agrave; di Trento</strong>.
      </p>
      <p>
        E&rsquo; docente della Scuola di Specializzazione, riconosciuta dal
        MIUR, in &quot;Psicoterapia dello sviluppo e dell&apos;adolescenza&quot;
        nelle sedi di Reggio Emilia, Brescia e Trento.&nbsp;
      </p>
      <p>
        Nel biennio 2021-2022 &egrave; stata incaricata come esperta sui temi
        dell&rsquo;identit&agrave; transgender per il progetto europeo{" "}
        <em>
          Supporting Wellbeing and Integration of Transgender victims in Care
          environments with Holistic approach&nbsp;
        </em>
        dall&rsquo;<strong>Ausl di Reggio Emilia</strong>.&nbsp;
      </p>

      <p>
        Nel 2022 &egrave; stata progettista e docente per il corso di formazione
        &quot;Il supporto psicologico rivolto agli adolescenti e ai giovani
        adulti con varianza di genere&rdquo; organizzato dall&rsquo;
        <strong>Ausl di Ferrara</strong>; progettista e formatrice per il corso
        &ldquo;Le identit&agrave; sessuali. Potenziare le conoscenze del gruppo
        di lavoro relativamente alle identit&agrave; sessuali e alla varianza di
        genere in et&agrave; adolescenziale&rdquo;, organizzato dall&rsquo;
        <strong>Ausl di Piacenza</strong>.
      </p>

      <p>
        Nel 2022 &egrave; stata docente per il seminario di credito
        &ldquo;Identit&agrave; di genere, orientamenti sessuali e professioni
        psicologiche: buone pratiche per la promozione del benessere&rdquo;
        presso l&rsquo;Universit&agrave; degli studi di Trento, Dipartimento di
        psicologia e scienze cognitive, sede di Rovereto.
      </p>

      <p>
        Nel 2022 &egrave; stata progettista e formatrice del corso
        &ldquo;Detenzione e persone transgender&rdquo; rivolto agli operatori
        penitenziari, organizzato dal Comune di Reggio Emilia in collaborazione
        con gli Istituti Penali di Reggio Emilia C.C.C.R.
      </p>

      <p>
        Nel 2022 &egrave; stata progettista e docente per il corso di formazione
        &ldquo;Sessualit&agrave; e disturbi psichiatrici&rdquo; rivolto agli
        operatori della cooperativa Ovile di Reggio Emilia.
      </p>

      <p>
        Nel 2022&nbsp;&nbsp;&egrave; stata docente per il seminario
        &ldquo;Salute mentale: una prospettiva di genere&rdquo; organizzato
        dalla Cooperativa Madre Teresa di Reggio Emilia.
      </p>

      <p>
        Nel 2022 &egrave; stata docente&nbsp;&nbsp;del seminario &ldquo;Il buio
        oltre l&rsquo;arcobaleno. Maltrattamenti intrafamiliari sui minori
        LGBTQIA*. Difficolt&agrave; genitoriali e interventi di aiuto a famiglie
        e minorenni&rdquo;, CISMAI (Coordinamento italiano dei servizi contro il
        maltrattamento e l&rsquo;abuso all&rsquo;infanzia).
      </p>

      <p>
        Nel 2022 &egrave; stata progettista e docente del corso di formazione
        &ldquo;Identit&agrave; e stereotipi di genere nella scuola
        dell&apos;infanzia: fare la differenza insieme&rdquo; rivolto alle/ai
        educatrici/ori dei nidi del Comune di Settimo Torinese.
      </p>

      <p>
        Nel 2022 &egrave; stata progettista, coordinatrice e docente del corso
        di formazione della durata di 48 ore &ldquo;Incongruenze di genere. Il
        supporto al percorso di affermazione di genere&rdquo; organizzato per il
        Centro Italiano di Sessuologia<strong>&nbsp;</strong>di Bologna.
      </p>

      <p>
        Nel 2022 &egrave; stata docente per il seminario &ldquo;Identit&agrave;
        di genere al di l&agrave; del binarismo: tra teoria e prassi&rdquo;
        organizzato dal Ruolo terapeutico di Trento.
      </p>
      <p>
        Nel 2022 &egrave; stata docente per la sessione formativa su
        &ldquo;Omofobia interiorizzata&rdquo; all&rsquo;interno del corso
        &ldquo;LGBTI+ Leadership Enhancement Program&rdquo; organizzato da EDGE
        Excellence &amp; Diversity by GLBT Executives.
      </p>

      <p>
        Dal 2021 &egrave; progettista e formatrice per il percorso:
        &ldquo;Differenze di genere e identit&agrave;. Come bambine/i e adulti
        co-costruiscono il genere&rdquo; rivolto alle/ai educatrici/ori dei nidi
        e alle/gli insegnati della scuola dell&rsquo;infanzia presso
        l&rsquo;Istituzione scuole e nidi d&rsquo;infanzia del Comune di Reggio
        Emilia.
      </p>

      <p>
        Nel triennio 2020-2022 &egrave; stata progettista e formatrice del
        percorso formativo &ldquo;Le identit&agrave; sessuali nei servizi
        sanitari: conoscere per prendere in carico&rdquo;, rivolto agli
        operatori dell&rsquo;<strong>Ausl di Rimini</strong>.
      </p>

      <p>
        Nel 2020 &egrave; stata docente per il &ldquo;Piano di Formazione
        Continua dedicata ai Promotori di Salute che operano negli Istituti
        Penitenziari della Regione Emilia Romagna&rdquo; organizzato dalla{" "}
        <strong>Regione Emilia Romagna.</strong>
      </p>
      <p>
        <strong>&nbsp;</strong>
      </p>
      <p>
        Nel biennio 2020-2021 &egrave; stata progettista e&nbsp;formatrice per
        il corso &ldquo;Orientamento sessuale e identit&agrave; di genere.
        L&rsquo;inclusione nelle pubbliche amministrazioni&rdquo; rivolti al
        personale dei vari servizi del Comune di Settimo Torinese.
      </p>

      <p>
        Nel 2018 &egrave; stata docente per il corso di formazione sulla
        sessualit&agrave; organizzato dall&rsquo;
        <strong>AUSL di Carbonia</strong>.&nbsp;
      </p>

      <p>
        Nel 2017 &egrave; stata docente per il seminario di aggiornamento
        professionale &ldquo;Prevenire e combattere odio e
        discriminazioni&rdquo;, Questura di Genova.
      </p>

      <p>
        Nel 2016 &egrave; stata Docente del corso &ldquo;Prevenzione e contrasto
        delle discriminazioni basate sull&rsquo;orientamento sessuale nei
        contesti lavorativi&rdquo;,&nbsp;&nbsp;AUSL di Modena.
      </p>

      <p>
        Nel 2016 &egrave; stata docente per il corso di formazione
        &ldquo;L&rsquo;identit&agrave; sessuale in et&agrave; evolutiva&rdquo;
        rivolto ai pediatri e medici di medicina generale, organizzato
        dall&rsquo;Azienda sanitaria di Foggia.
      </p>
      <p>
        Dal 2014 al 2016 ha partecipato, come coordinatrice del team formativo e
        come docente, alla &quot;Strategia Nazionale LGBT per la prevenzione e
        il contrasto delle discriminazioni basate sull&apos;orientamento
        sessuale e sull&apos;identit&agrave; di genere&quot; dell&apos;
        <strong>
          UNAR (Ufficio Nazionale Antidiscriminazioni Razziali presso il
          Dipartimento Pari Opportunit&agrave; della Presidenza del Consiglio
          dei Ministri
        </strong>
        ). In tale progetto sono state formate le figure apicali delle Forze
        dell&rsquo;ordine, delle Pubbliche amministrazioni e i dirigenti
        scolastici regionali.
      </p>
      <p>
        Nel 2014 &egrave; stata docente per il progetto &ldquo;W
        l&rsquo;amore&rdquo; (percorsi e materiali per l&rsquo;educazione
        affettiva e sessuale; XV Programma per la prevenzione e lotta
        all&rsquo;AIDS) promosso dal{" "}
        <strong>Servizio Sanitario Regionale Emilia Romagna.</strong>
      </p>
      <p>
        <strong>&nbsp;</strong>
      </p>
      <p>
        Nel 2014 &egrave; stata docente per il seminario &ldquo;Genere,
        stereotipi di genere e violenza sulle donne: azioni educative
        nell&rsquo;infanzia&rdquo; rivolto alle educatrici e alle operatrici dei
        nidi e della scuola dell&rsquo;infanzia del Comune di Modena.
      </p>
      <p>
        Dal 2010 &egrave; didatta e consigliere del CIS (Centro Italiano di
        Sessuologia).
      </p>
      <p>
        Dalla fine degli anni &apos;90 ha organizzato e condotto in varie sedi
        italiane i seguenti corsi di formazione:{" "}
        <em>
          &quot;La presa in carico degli utenti con varianza di genere e
          orientamento sessuale&quot;
        </em>{" "}
        rivolto agli operatori psico-socio-sanitari delle aziende sanitarie;{" "}
        <em>
          &quot;L&apos;identit&agrave; sessuale in et&agrave; evolutiva&quot;
        </em>{" "}
        rivolto ai pediatri e medici di base;{" "}
        <em>&quot;Educare al rispetto&quot;</em> rivolto agli insegnanti per
        contrastare il bullismo omofobico;{" "}
        <em>
          &quot;Le Nuove Famiglie: la scuola, le famiglie, gli insegnanti&quot;
        </em>{" "}
        rivolto agli educatori della scuola primaria per promuovere
        l&apos;integrazione dei bambini che crescono in famiglie omogenitoriali;{" "}
        <em>
          &quot;Stereotipi di genere e contrasto alla violenza sulle donne&quot;
        </em>{" "}
        rivolto agli educatori della scuola primaria;{" "}
        <em>
          &quot;I contesti lavorativi: come creare luoghi di lavoro
          inclusivi&quot;
        </em>{" "}
        rivolto ai dipendenti delle Pubbliche amministrazioni e delle aziende
        private.
      </p>

      <p>
        Ha partecipato a vari <strong>progetti europei</strong> sui temi
        dell&apos;inclusione e delle differenze di orientamento sessuale e di
        identit&agrave; di genere, ad esempio nel 2021 a <em>SWITCH</em>{" "}
        <strong>(</strong>
        <em>
          Supporting Wellbeing and Integration of Transgender victims in Care
          environments with Holistic approach
        </em>
        );<strong>&nbsp;</strong>nel 2014 a <em>JCVG</em> (
        <em>Youth can end gender violence</em>); nel 2010 ad <em>AHEAD</em> (
        <em>Against Homophobia European local Administration Devices</em>); nel
        2006 a <em>Schoolmates&nbsp;</em>(
        <em>
          Train the trainers to address and prevent violence against homosexual
          adolescents in school
        </em>
        ); nel 2002 a <em>Triangle</em> (
        <em>
          Transfer of information to combat discrimination against gays and
          lesbians in Europe
        </em>
        ); nel 2000 a <em>Be Equal Be Different</em> sull&apos;applicazione
        dell&apos;art. 13 del Trattato di Amsterdam.&nbsp;
      </p>
      <p>
        Ha collaborato con il{" "}
        <strong>servizio LGBT del comune di Torino</strong> per la formazione
        dei dipendenti pubblici nel biennio 2007/2008 e in quello del 2014/2016.
      </p>
      <p>
        &Egrave; stata consigliere dell&rsquo;International Boarding di GALE
        (Global Alliance on LGBT Education) dal 2006 al 2010.
      </p>
      <p>
        Ha partecipato nel 2007 al progetto di ricerca intervento finanziato
        dall&apos;Istituto Superiore di Sanit&agrave;:{" "}
        <em>
          Progettazione e sperimentazione di percorsi formativi innovativi per
          operatori psico-socio-sanitari
        </em>
        , sperimentando percorsi formativi in varie AUSL sui temi
        dell&apos;orientamento sessuale.
      </p>

      <p>
        Ha fatto parte nel 2005 dell&apos;&egrave;quipe di{" "}
        <em>
          <a href="https://www.arcigay.it/wp-content/uploads/modidi_opuscolo.pdf">
            Modi Di. Ricerca nazionale sulla salute di lesbiche, gay e
            bisessuali
          </a>
        </em>
        (progetto finanziato dall&apos;Istituto Superiore di Sanit&agrave;
        all&apos;interno del V Programma nazionale di ricerca sull&apos;AIDS).
      </p>

      <p>
        Nel 2003 &egrave; stata Consulente tecnico del{" "}
        <strong>Ministero Pari Opportunit&agrave;</strong> per il gruppo di
        studio{" "}
        <em>Sessualit&agrave;, discriminazioni e integrazione sociale</em>.
      </p>

      <p>
        A partire dalla fine degli anni &apos;90 ha organizzato e condotto i
        corsi di formazione rivolti agli insegnanti dal titolo{" "}
        <em>
          Educazione socio-affettiva sui temi dell&apos;identit&agrave; sessuale
        </em>
        , autorizzati dal MIUR ai sensi della Direttiva n. 90 del 1&deg;
        Dicembre 2003.
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Esperienze PROFESSIONALI" />

export default Esperienze
