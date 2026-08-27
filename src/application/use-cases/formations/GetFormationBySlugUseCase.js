export class GetFormationBySlugUseCase {
  /**
   * @param {import('@domain/repositories/IFormationRepository').IFormationRepository} formationRepository 
   */
  constructor(formationRepository) {
    if (!formationRepository) {
      throw new Error("GetFormationBySlugUseCase requiert un repository de formations");
    }
    this.formationRepository = formationRepository;
  }

  /**
   * Exécute le cas d'utilisation pour récupérer une formation par son slug
   * @param {string} slug 
   * @returns {Promise<import('@domain/entities/Formation').Formation>}
   */
  async execute(slug) {
    if (!slug || typeof slug !== 'string') {
      throw new Error("Un slug valide est requis pour rechercher une formation");
    }

    const formation = await this.formationRepository.findBySlug(slug);
    
    if (!formation) {
      throw new Error(`Aucune formation ne correspond au slug : ${slug}`);
    }

    return formation;
  }
}