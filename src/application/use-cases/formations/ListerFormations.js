export class ListerFormations {
  constructor(formationRepository) {
    this.formationRepository = formationRepository
  }

  async execute() {
    return await this.formationRepository.findAll()
  }
}