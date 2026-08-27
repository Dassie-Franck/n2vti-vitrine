export class GetCampusUseCase {
  /**
   * @param {import('@domain/repositories/ICampusRepository').ICampusRepository} campusRepository 
   */
  constructor(campusRepository) {
    if (!campusRepository) {
      throw new Error("GetCampusUseCase requiert un repository de campus");
    }
    this.campusRepository = campusRepository;
  }

  /**
   * Exécute le cas d'utilisation pour récupérer tous les campus ou un campus par son slug
   * @param {string} [slug] - Optionnel : pour récupérer un campus spécifique
   * @returns {Promise<import('@domain/entities/Campus').Campus[] | import('@domain/entities/Campus').Campus>}
   */
  async execute(slug = null) {
    if (slug) {
      if (typeof slug !== 'string') {
        throw new Error("Le slug du campus doit être une chaîne de caractères");
      }
      return await this.campusRepository.findBySlug(slug);
    }

    return await this.campusRepository.findAll();
  }
}