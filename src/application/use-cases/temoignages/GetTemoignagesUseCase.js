export class GetTemoignagesUseCase {
  /**
   * @param {import('@domain/repositories/ITemoignageRepository').ITemoignageRepository} temoignageRepository 
   */
  constructor(temoignageRepository) {
    if (!temoignageRepository) {
      throw new Error("GetTemoignagesUseCase requiert un repository de témoignages");
    }
    this.temoignageRepository = temoignageRepository;
  }

  /**
   * Exécute le cas d'utilisation pour récupérer tous les témoignages
   * @returns {Promise<import('@domain/entities/Temoignage').Temoignage[]>}
   */
  async execute() {
    return await this.temoignageRepository.findAll();
  }
}