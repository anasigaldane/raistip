export default function handler(req, res) {

  const { id } = req.query;

  const data = {
    success: true,
    actualites: [
      {
        id: "157",
        date: "2025-11-14",
        titre: "Avis aux candidats des listes d'attente : Tableau des places vacantes, par ISPITS et par options, session septembre 2025",
        description: "Tableau des places vacantes pour les candidats des listes d'attente, classé par ISPITS et par options.",
        lien: "https://ispits.sante.gov.ma/Documents/Concoursdacces-licence-septembre2025/orale/RF/Avis%20LA%20et%20places%20vacantes.PDF",
        tabl: false
      },
      {
        id: "156",
        date: "2025-10-23",
        titre: "Proclamation des résultats du test d'aptitude du concours d'accès aux ISPITS, cycle de la licence, session septembre 2025",
        description: "Résultats du test d'aptitude pour le concours d'accès aux ISPITS, cycle licence, session septembre 2025.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=159",
        tabl: true,
        tableData: [
          { "name": "AGADIR", "link": "/docs/AGADIR TA.pdf" },
          { "name": "ALHOCEIMA", "link": "/docs/ALHOCEIMA TA.pdf" },
          { "name": "B ENI MELLAL", "link": "/docs/BENIMELLAL TA.pdf" },
          { "name": "CASABLANCA", "link": "/docs/CASABLANCA TA.pdf" },
          { "name": "DAKHLA", "link": "/docs/DAKHLA TA.pdf" },
          { "name": "ERRACHIDIA", "link": "/docs/ERRACHIDIA TA.pdf" },
          { "name": "​ESSAOUIRA", "link": "/docs/ESSAOUIRA TA.pdf" },
          { "name": "​FES", "link": "/docs/FES TA.pdf" },
          { "name": "GUELMIM", "link": "/docs/GUELMIM TA.pdf" },
          { "name": "KENITRA", "link": "/docs/KENITRA TA.pdf" },
          { "name": "KHENIFRA", "link": "/docs/KHENIFRA TA.pdf" },
          { "name": "LAAYOUNE", "link": "/docs/LAAYOUNE TA.pdf" },
          { "name": "MARRAKECH", "link": "/docs/MARRAKECH TA.pdf" },
          { "name": "MEKNES", "link": "/docs/MEKNES TA.pdf" },
          { "name": "NADOR", "link": "/docs/NADOR TA.pdf" },
          { "name": "OUJDA", "link": "/docs/OUJDA TA.pdf" },
          { "name": "RABAT", "link": "/docs/RABAT TA.pdf" },
          { "name": "SAFI", "link": "/docs/SAFI TA.pdf" },
          { "name": "SETTAT", "link": "/docs/SETTAT TA.pdf" },
          { "name": "TANGER", "link": "/docs/TANGER TA.pdf" },
          { "name": "TAZA", "link": "/docs/TAZA TA.pdf" },
          { "name": "TETOUAN", "link": "/docs/TETOUAN TA.pdf" },
          { "name": "TIZNIT​", "link": "/docs/TIZNIT TA.pdf" },
          { "name": "OUARZAZATE", "link": "/docs/OUARZAZATE TA.pdf" },
          { "name": "​ZAG​ORA", "link": "/docs/ZAGORA TA.pdf" }
        ]
      },
      {
        id: "155",
        date: "2025-10-06",
        titre: "Planning du déroulement du test d'aptitude des candidats admis à l'épreuve écrite du concours d'accès aux ISPITS, cycle licence, session septembre 2025",
        description: "Calendrier détaillé du déroulement du test d'aptitude pour les candidats admis.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=158",
        tabl: true,
        tableData: [
          { "name": "Agadir", "link": "/docs/agadir.pdf" },
          { "name": "Fès", "link": "/docs/fes.pdf" }
        ]
      },
      {
        id: "154",
        date: "2025-10-04",
        titre: "Proclamation des résultats de l'épreuve écrite du concours d'accès aux ISPITS, cycle de la licence, session 2025",
        description: "Résultats de l'épreuve écrite pour les candidats du cycle licence, session 2025.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=157",
        tabl: true,
        tableData: [
          { "name": "Agadir", "link": "/docs/agadir.pdf" },
          { "name": "Fès", "link": "/docs/fes.pdf" }
        ]
      },
      {
        id: "153",
        date: "2025-09-18",
        titre: "Listes définitives des candidats présélectionnés par ville d'examen pour passer l'épreuve écrite du concours d'accès aux ISPITS, cycle de la licence, session septembre 2025",
        description: "Les listes définitives des candidats présélectionnés par ville d'examen.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=156",
        tabl: true,
        tableData: [
          { "name": "Agadir", "link": "/docs/agadir.pdf" },
          { "name": "Fès", "link": "/docs/fes.pdf" }
        ]
      },
      {
        id: "152",
        date: "2025-09-02",
        titre: "Listes des candidats présélectionnés par ville d'examen pour passer l'épreuve écrite du concours d'accès aux ISPITS, cycle de la licence, session septembre 2025",
        description: "Listes initiales des candidats présélectionnés par ville d'examen.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=155",
        tabl: true,
        tableData: [
          { "name": "Agadir", "link": "/docs/agadir.pdf" },
          { "name": "Fès", "link": "/docs/fes.pdf" }
        ]
      },
      {
        id: "151",
        date: "2025-07-22",
        titre: "مباراة ولوج المعاهد العليا للمهن التمريضية وتقنيات الصحة 2025/2026",
        description: "AVIS officiel concernant le concours d'accès aux ISPITS pour l'année 2025/2026.",
        lien: "https://drh.sante.gov.ma/Documents/2025/%D8%A5%D8%B9%D9%84%D8%A7%D9%86%20%D9%85%D8%A8%D8%A7%D8%B1%D8%A7%D8%A9%20%D9%88%D9%84%D9%88%D8%AC%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%87%D8%AF%20%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%20%D9%84%D9%84%D9%85%D9%87%D9%86%20%D8%A7%D9%84%D8%AA%D9%85%D8%B1%D9%8A%D8%B6%D9%8A%D8%A9%20%D9%88_250722_165842.pdf",
        tabl: false
      },
      {
        id: "150",
        date: "2025-02-06",
        titre: "Avis aux candidats des listes d'attente du concours d'accès aux ISPITS, cycle du master, session de novembre 2024",
        description: "Informations pour les candidats en liste d'attente du cycle master, session novembre 2024.",
        lien: "https://ispits.sante.gov.ma/Documents/MASTER2024/avis%20liste%20atten%20master.pdf",
        tabl: false
      },
      {
        id: "149",
        date: "2025-01-17",
        titre: "Résultats définitifs du concours d'accès aux ISPITS, cycle du master, session du 17 novembre 2024",
        description: "Résultats finaux du concours pour le cycle master, session du 17 novembre 2024.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=152",
        tabl: true,
        tableData: [
          { "name": "Agadir", "link": "/docs/agadir.pdf" },
          { "name": "Fès", "link": "/docs/fes.pdf" }
        ]
      },
      {
        id: "148",
        date: "2024-12-19",
        titre: "Répartition des candidats convoqués pour passer l'épreuve orale du concours d'accès aux ISPITS, cycle du master, session de 17 novembre 2024",
        description: "Détails sur la répartition des candidats pour l'épreuve orale du concours master.",
        lien: "https://ispits.sante.gov.ma/Documents/MASTER2024/R%C3%A9partition%20des%20candidats%20convoqu%C3%A9s%20Oral.pdf",
        tabl: true,
        tableData: [
          { "name": "Agadir", "link": "/docs/agadir.pdf" },
          { "name": "Fès", "link": "/docs/fes.pdf" }
        ]
      }
    ]
  };

  if (!id) {
    return res.status(400).json({
      success: false,
      message: "ID manquant"
    });
  }

  const actualite = data.actualites.find(item => item.id === id);

  if (!actualite) {
    return res.status(404).json({
      success: false,
      message: "Actualité introuvable"
    });
  }

  res.status(200).json({
    success: true,
    data: actualite
  });
}
