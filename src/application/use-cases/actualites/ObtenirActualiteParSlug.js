export class ObtenirActualiteParSlug {
  constructor(actualiteRepository) {
    this.actualiteRepository = actualiteRepository
  }

  async execute(slug) {
    if (!slug) throw new Error("Le slug est requis")
    const actualite = await this.actualiteRepository.findBySlug(slug)
    if (!actualite) throw new Error(`Actualité introuvable: ${slug}`)
    return actualite
  }
}