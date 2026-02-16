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
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=160"
      },
      {
        id: "156",
        date: "2025-10-23",
        titre: "Proclamation des résultats du test d'aptitude du concours d'accès aux ISPITS, cycle de la licence, session septembre 2025",
        description: "Résultats du test d'aptitude pour le concours d'accès aux ISPITS, cycle licence, session septembre 2025.",
        lien: "https://ispits.sante.gov.ma/Pages/DetailActualites.aspx?IDActu=159"
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
