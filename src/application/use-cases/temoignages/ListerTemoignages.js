export class ListerTemoignages {
  constructor(temoignageRepository) {
    this.temoignageRepository = temoignageRepository
  }

  async execute() {
    return await this.temoignageRepository.findAll()
  }
}