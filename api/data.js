export default function handler(req, res) {

  const { id } = req.query;

  const fakeDB = {
    157: {
      title: "Avis aux candidats",
      description: "Consultez le tableau des places vacantes...",
      date: "14/11/2025"
    },
    158: {
      title: "Nouvelle annonce",
      description: "Information importante pour les étudiants",
      date: "20/11/2025"
    }
  };

  res.status(200).json(fakeDB[id] || {
    title: "Actualité introuvable",
    description: "Aucune donnée trouvée",
    date: ""
  });
}
