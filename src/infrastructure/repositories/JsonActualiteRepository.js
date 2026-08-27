import { IActualiteRepository } from '@domain/repositories/IActualiteRepository';
import { Actualite } from '@domain/entities/Actualite';

// Importation des données d'actualités situées dans le dossier content/
import actualitesData from '@content/actualites/actualites.json';

export class JsonActualiteRepository extends IActualiteRepository {
  async #loadActualites() {
    return actualitesData.map(data => {
      return new Actualite({
        id: data.id,
        slug: data.slug,
        titre: data.titre,
        datePublication: data.datePublication,
        contenu: data.contenu,
        resume: data.resume,
        image: data.image || null,
        campusIds: data.campusIds || []
      });
    });
  }

  async findAll() {
    const actualites = await this.#loadActualites();
    // Tri par date de publication décroissante (plus récent au plus ancien)
    return actualites.sort((a, b) => b.datePublication - a.datePublication);
  }

  async findBySlug(slug) {
    const actualites = await this.#loadActualites();
    const actualite = actualites.find(a => a.slug === slug);
    if (!actualite) {
      throw new Error(`Actualité introuvable pour le slug : ${slug}`);
    }
    return actualite;
  }
}