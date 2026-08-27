import { IActualiteRepository } from '@domain/repositories/IActualiteRepository'
import { Actualite } from '@domain/entities/Actualite'

const modules = import.meta.glob('@content/actualites/**/*.json', { eager: true })

function mapToEntity(data) {
  return new Actualite({
    id: data.id,
    slug: data.slug,
    titre: data.titre,
    datePublication: data.datePublication,
    contenu: data.contenu,
    resume: data.resume,
    image: data.image,
    campusIds: data.campusIds || [],
  })
}

export class StaticActualiteRepository extends IActualiteRepository {
  constructor() {
    super()
    this._actualites = []

    // On parcourt chaque module chargé par Vite
    Object.values(modules).forEach((m) => {
      const content = m.default

      // Si le fichier contient un tableau d'actualités (ex: actualites.json global)
      if (Array.isArray(content)) {
        content.forEach((item) => {
          this._actualites.push(mapToEntity(item))
        })
      } 
      // Si le fichier contient un objet unique (ex: mon-article.json)
      else if (content && typeof content === 'object') {
        this._actualites.push(mapToEntity(content))
      }
    })
  }

  async findAll() {
    return this._actualites
  }

  async findBySlug(slug) {
    return this._actualites.find(a => a.slug === slug) || null
  }
}