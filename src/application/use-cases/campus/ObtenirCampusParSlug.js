export class ObtenirCampusParSlug {
  constructor(campusRepository) {
    this.campusRepository = campusRepository
  }

  async execute(slug) {
    if (!slug) throw new Error("Le slug est requis")
    const campus = await this.campusRepository.findBySlug(slug)
    if (!campus) throw new Error(`Campus introuvable: ${slug}`)
    return campus
  }
}