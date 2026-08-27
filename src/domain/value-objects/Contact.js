export class Contact {
  constructor({ telephone, email = null, adresse, whatsapp = null }) {
    if (!telephone) throw new Error("Un contact doit avoir un téléphone")
    if (!adresse) throw new Error("Un contact doit avoir une adresse")

    this.telephone = telephone
    this.email = email
    this.adresse = adresse
    this.whatsapp = whatsapp
  }
}