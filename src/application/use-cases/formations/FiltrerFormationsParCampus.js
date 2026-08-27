export class FiltrerFormationsParCampus {
  constructor(formationRepository) {
    this.formationRepository = formationRepository
  }

  async execute(campusId) {
    if (!campusId || campusId === 'tous') {
      return await this.formationRepository.findAll()
    }
    return await this.formationRepository.findByCampus(campusId)
  }
}