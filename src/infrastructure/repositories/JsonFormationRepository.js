import { IFormationRepository } from '@domain/repositories/IFormationRepository';
import { Formation } from '@domain/entities/Formation';
import { Duree } from '@domain/value-objects/Duree';
import { Tarif } from '@domain/value-objects/Tarif';
import { NiveauRequis } from '@domain/value-objects/NiveauRequis';

// Importation directe ou chargement de vos fichiers situés dans content/
// (Vous pouvez adapter l'import selon que vous stockez un gros JSON ou des fichiers individuels)
import formationsData from '@content/formations/formations.json';

export class JsonFormationRepository extends IFormationRepository {
  async #loadFormations() {
    // Transformation des données brutes du JSON en instances riches du Domaine (Entités + Value Objects)
    return formationsData.map(data => {
      return new Formation({
        id: data.id,
        slug: data.slug,
        titre: data.titre,
        domaine: data.domaine,
        campusIds: data.campusIds,
        duree: new Duree(data.duree.valeur, data.duree.unite),
        diplome: data.diplome,
        niveauRequis: new NiveauRequis(data.niveauRequis),
        tarif: new Tarif(data.tarif?.montant, data.tarif?.devise, data.tarif?.surDemande),
        description: data.description,
        debouches: data.debouches || [],
        image: data.image
      });
    });
  }

  async findAll() {
    const formations = await this.#loadFormations();
    return formations;
  }

  async findBySlug(slug) {
    const formations = await this.#loadFormations();
    const formation = formations.find(f => f.slug === slug);
    if (!formation) {
      throw new Error(`Formation introuvable pour le slug : ${slug}`);
    }
    return formation;
  }

  async findByDomaine(domaine) {
    const formations = await this.#loadFormations();
    return formations.filter(f => f.domaine.toLowerCase() === domaine.toLowerCase());
  }

  async findByCampus(campusId) {
    const formations = await this.#loadFormations();
    return formations.filter(f => f.estDisponibleSurCampus(campusId));
  }
}