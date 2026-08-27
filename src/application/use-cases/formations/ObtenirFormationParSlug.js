export class ObtenirFormationParSlug {
  constructor(formationRepository) {
    this.formationRepository = formationRepository
  }

  async execute(slug) {
    if (!slug) throw new Error("Le slug est requis")
    const formation = await this.formationRepository.findBySlug(slug)
    if (!formation) throw new Error(`Formation introuvable: ${slug}`)
    return formation
  }
}