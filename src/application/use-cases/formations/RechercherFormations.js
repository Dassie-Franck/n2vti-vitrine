// Recherche combinée : texte libre + domaine + campus (utile pour la page catalogue)
export class RechercherFormations {
  constructor(formationRepository) {
    this.formationRepository = formationRepository
  }

  async execute({ texte = '', domaine = 'tous', campusId = 'tous' } = {}) {
    let formations = await this.formationRepository.findAll()

    if (domaine !== 'tous') {
      formations = formations.filter(f => f.domaine === domaine)
    }
    if (campusId !== 'tous') {
      formations = formations.filter(f => f.estDisponibleSurCampus(campusId))
    }
    if (texte.trim() !== '') {
      const t = texte.toLowerCase()
      formations = formations.filter(f =>
        f.titre.toLowerCase().includes(t) ||
        f.description.toLowerCase().includes(t)
      )
    }

    return formations
  }
}