export class Campus {
  constructor({ id, slug, nom, ville, contact, coordonnees = null, image = null, galerie = null }) {
    if (!nom) throw new Error("Un campus doit avoir un nom")
    if (!slug) throw new Error("Un campus doit avoir un slug")
    if (!contact) throw new Error("Un campus doit avoir un contact")

    this.id = id
    this.slug = slug
    this.nom = nom
    this.ville = ville
    this.contact = contact
    this.coordonnees = coordonnees
    this.image = image
    this.galerie = galerie   // { blocTexteHaut, blocImageHaut, blocImageBas, blocTexteBas }
  }
}