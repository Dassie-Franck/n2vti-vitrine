export class ListerActualites {
  constructor(actualiteRepository) {
    this.actualiteRepository = actualiteRepository
  }

  async execute() {
    const actualites = await this.actualiteRepository.findAll()
    // Tri par date décroissante (les plus récentes en premier)
    return actualites.sort((a, b) => b.datePublication - a.datePublication)
  }
}