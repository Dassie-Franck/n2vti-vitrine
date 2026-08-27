import { ITemoignageRepository } from '@domain/repositories/ITemoignageRepository';
import { Temoignage } from '@domain/entities/Temoignage';

// Importation des données de témoignages situées dans le dossier content/
import temoignagesData from '@content/temoignages/temoignages.json';

export class JsonTemoignageRepository extends ITemoignageRepository {
  async #loadTemoignages() {
    return temoignagesData.map(data => {
      return new Temoignage({
        id: data.id,
        auteur: data.auteur,
        formationSuivie: data.formationSuivie,
        contenu: data.contenu,
        note: data.note !== undefined ? data.note : null,
        photo: data.photo || null
      });
    });
  }

  async findAll() {
    const temoignages = await this.#loadTemoignages();
    return temoignages;
  }
}