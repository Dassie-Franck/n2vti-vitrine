export class Formation {
  constructor({ id, slug, titre, domaine, campusIds, duree, diplome, niveauRequis, tarif, description, programme = [], debouches = [], image }) {
    if (!titre) throw new Error("Une formation doit avoir un titre")
    if (!slug) throw new Error("Une formation doit avoir un slug")
    if (!campusIds || campusIds.length === 0) throw new Error("Une formation doit être rattachée à au moins un campus")

    this.id = id
    this.slug = slug
    this.titre = titre
    this.domaine = domaine
    this.campusIds = campusIds
    this.duree = duree
    this.diplome = diplome
    this.niveauRequis = niveauRequis
    this.tarif = tarif
    this.description = description   // sert de contenu pour l'onglet "Cursus"
    this.programme = programme       // tableau de modules/matières pour l'onglet "Programme"
    this.debouches = debouches
    this.image = image
  }

  estDisponibleSurCampus(campusId) {
    return this.campusIds.includes(campusId)
  }
}