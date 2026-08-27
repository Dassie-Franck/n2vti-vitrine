export class GetFormationsUseCase {
  /**
   * @param {import('@domain/repositories/IFormationRepository').IFormationRepository} formationRepository 
   */
  constructor(formationRepository) {
    if (!formationRepository) {
      throw new Error("GetFormationsUseCase requiert un repository de formations");
    }
    this.formationRepository = formationRepository;
  }

  /**
   * Exécute le cas d'utilisation avec des filtres optionnels (par domaine ou par campus)
   * @param {Object} [filters]
   * @param {string} [filters.domaine]
   * @param {string} [filters.campusId]
   * @returns {Promise<import('@domain/entities/Formation').Formation[]>}
   */
  async execute(filters = {}) {
    let formations;

    // Application des filtres métier si présents
    if (filters.domaine) {
      formations = await this.formationRepository.findByDomaine(filters.domaine);
    } else if (filters.campusId) {
      formations = await this.formationRepository.findByCampus(filters.campusId);
    } else {
      formations = await this.formationRepository.findAll();
    }

    return formations;
  }
}