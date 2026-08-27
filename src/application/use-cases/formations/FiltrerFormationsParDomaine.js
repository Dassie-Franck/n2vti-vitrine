export class FiltrerFormationsParDomaine {
  constructor(formationRepository) {
    this.formationRepository = formationRepository
  }

  async execute(domaine) {
    if (!domaine || domaine === 'tous') {
      return await this.formationRepository.findAll()
    }
    return await this.formationRepository.findByDomaine(domaine)
  }
}