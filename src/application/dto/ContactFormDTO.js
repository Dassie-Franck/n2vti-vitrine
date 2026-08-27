// DTO : structure de données validée entre presentation et application
export class ContactFormDTO {
  constructor({ nom, email, telephone, formationInteressee = null, campusChoisi = null, message }) {
    this.nom = nom
    this.email = email
    this.telephone = telephone
    this.formationInteressee = formationInteressee
    this.campusChoisi = campusChoisi
    this.message = message
  }

  valider() {
    const erreurs = []
    if (!this.nom || this.nom.trim().length < 2) erreurs.push("Le nom est requis (2 caractères min)")
    if (!this.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) erreurs.push("Email invalide")
    if (!this.telephone || this.telephone.trim().length < 8) erreurs.push("Téléphone invalide")
    if (!this.message || this.message.trim().length < 5) erreurs.push("Le message est trop court")
    return erreurs
  }
}