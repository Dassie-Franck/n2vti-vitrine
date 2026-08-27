import { ICampusRepository } from '@domain/repositories/ICampusRepository';
import { Campus } from '@domain/entities/Campus';
import { Contact } from '@domain/value-objects/Contact';

// Importation de vos données de campus situées dans le dossier content/
import campusData from '@content/campus/campus.json';

export class JsonCampusRepository extends ICampusRepository {
  async #loadCampus() {
    return campusData.map(data => {
      // Instanciation du Value Object Contact propre au Campus
      const contactObj = new Contact({
        telephone: data.contact.telephone,
        email: data.contact.email,
        adresse: data.contact.adresse,
        whatsapp: data.contact.whatsapp
      });

      return new Campus({
        id: data.id,
        slug: data.slug,
        nom: data.nom,
        ville: data.ville,
        contact: contactObj,
        coordonnees: data.coordonnees || null,
        image: data.image || null
      });
    });
  }

  async findAll() {
    const campusList = await this.#loadCampus();
    return campusList;
  }

  async findBySlug(slug) {
    const campusList = await this.#loadCampus();
    const campus = campusList.find(c => c.slug === slug);
    if (!campus) {
      throw new Error(`Campus introuvable pour le slug : ${slug}`);
    }
    return campus;
  }
}