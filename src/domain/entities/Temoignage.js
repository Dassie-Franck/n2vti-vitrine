export class Temoignage {
  constructor({ id, auteur, formationSuivie, contenu, note = null, photo = null, anneePromotion = null, posteActuel = null }) {
    if (!auteur) throw new Error("Un témoignage doit avoir un auteur")
    if (!contenu) throw new Error("Un témoignage doit avoir un contenu")
    if (note !== null && (note < 1 || note > 5)) {
      throw new Error("La note doit être comprise entre 1 et 5")
    }

    this.id = id
    this.auteur = auteur
    this.formationSuivie = formationSuivie
    this.contenu = contenu
    this.note = note
    this.photo = photo
    this.anneePromotion = anneePromotion   // ex: "2012"
    this.posteActuel = posteActuel         // ex: "Vendeur en pharmacie"
  }
}