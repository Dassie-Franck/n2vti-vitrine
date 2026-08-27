import { ICampusRepository } from '@domain/repositories/ICampusRepository'
import { Campus } from '@domain/entities/Campus'
import { Contact } from '@domain/value-objects/Contact'

// On utilise l'alias @content (assurez-vous qu'il est dans vite.config.js)
const modules = import.meta.glob('@content/campus/*.json', { eager: true })

function mapToEntity(data) {
  if (!data.contact) {
    throw new Error(`Champ "contact" manquant dans le campus: ${data.slug || data.id || 'inconnu'}`)
  }

  return new Campus({
    id: data.id,
    slug: data.slug,
    nom: data.nom,
    ville: data.ville,
    contact: new Contact(data.contact),
    coordonnees: data.coordonnees,
    image: data.image,
    galerie: data.galerie || [],
  })
}

export class StaticCampusRepository extends ICampusRepository {
  constructor() {
    super()
    this._campus = []

    // On parcourt chaque module chargé par Vite
    Object.values(modules).forEach((m) => {
      const content = m.default

      // Si le fichier contient un tableau de campus (ex: campus.json global)
      if (Array.isArray(content)) {
        content.forEach((item) => {
          this._campus.push(mapToEntity(item))
        })
      } 
      // Si le fichier contient un objet unique (ex: yaounde.json)
      else if (content && typeof content === 'object') {
        this._campus.push(mapToEntity(content))
      }
    })
  }

  async findAll() {
    return this._campus
  }

  async findBySlug(slug) {
    return this._campus.find(c => c.slug === slug) || null
  }
}