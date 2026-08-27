export class Actualite {
  constructor({ id, slug, titre, datePublication, contenu, resume, image = null, campusIds = [] }) {
    if (!titre) throw new Error("Une actualité doit avoir un titre")
    if (!slug) throw new Error("Une actualité doit avoir un slug")
    if (!datePublication) throw new Error("Une actualité doit avoir une date de publication")

    this.id = id
    this.slug = slug
    this.titre = titre
    this.datePublication = new Date(datePublication)
    this.contenu = contenu       // texte long (markdown ou html)
    this.resume = resume         // court résumé pour les cards
    this.image = image
    this.campusIds = campusIds   // actualité liée à un ou plusieurs campus (optionnel)
  }

  estRecente(joursLimite = 30) {
    const diffMs = Date.now() - this.datePublication.getTime()
    const diffJours = diffMs / (1000 * 60 * 60 * 24)
    return diffJours <= joursLimite
  }
}