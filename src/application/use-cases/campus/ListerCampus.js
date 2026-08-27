export class ListerCampus {
  constructor(campusRepository) {
    this.campusRepository = campusRepository
  }

  async execute() {
    return await this.campusRepository.findAll()
  }
}