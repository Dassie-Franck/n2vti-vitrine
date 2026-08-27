export class GetActualitesUseCase {
  /**
   * @param {import('@domain/repositories/IActualiteRepository').IActualiteRepository} actualiteRepository 
   */
  constructor(actualiteRepository) {
    if (!actualiteRepository) {
      throw new Error("GetActualitesUseCase requiert un repository d'actualités");
    }
    this.actualiteRepository = actualiteRepository;
  }

  /**
   * Exécute le cas d'utilisation avec des options de filtrage
   * @param {Object} [options]
   * @param {string} [options.slug] - Pour récupérer une actualité spécifique
   * @param {boolean} [options.uniquementRecentes] - Pour filtrer uniquement les actualités récentes
   * @param {number} [options.limiteJours=30] - Nombre de jours pour définir la récence
   * @returns {Promise<import('@domain/entities/Actualite').Actualite[] | import('@domain/entities/Actualite').Actualite>}
   */
  async execute(options = {}) {
    const { slug, uniquementRecentes = false, limiteJours = 30 } = options;

    if (slug) {
      if (typeof slug !== 'string') {
        throw new Error("Le slug de l'actualité doit être une chaîne de caractères");
      }
      return await this.actualiteRepository.findBySlug(slug);
    }

    let actualites = await this.actualiteRepository.findAll();

    if (uniquementRecentes) {
      actualites = actualites.filter(actu => actu.estRecente(limiteJours));
    }

    return actualites;
  }
}