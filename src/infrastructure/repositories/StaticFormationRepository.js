import { IFormationRepository } from '@domain/repositories/IFormationRepository'
import { Duree } from '@domain/value-objects/Duree'
import { Tarif } from '@domain/value-objects/Tarif'
import { NiveauRequis } from '@domain/value-objects/NiveauRequis'

const modules = import.meta.glob('../../content/formations/*.json', { eager: true })

function mapToEntity(data, domaineParent) {
  return new Formation({
    id: data.id || data.slug,
    slug: data.slug,
    titre: data.titre,
    domaine: data.domaine || domaineParent, // Récupère le domaine de la catégorie parente
    campusIds: data.campusIds || data.campus || [],
    duree: data.duree ? new Duree(data.duree.valeur, data.duree.unite) : null,
    diplome: data.diplome || "Diplôme professionnel",
    niveauRequis: data.niveauRequis ? new NiveauRequis(data.niveauRequis) : null,
    tarif: data.tarif ? new Tarif(data.tarif.montant, data.tarif.devise, data.tarif.surDemande) : null,
    description: data.description,
    programme: data.programme || [],
    debouches: data.debouchés || data.debouches || [],
    image: data.image,
  })
}

export class StaticFormationRepository extends IFormationRepository {
  constructor() {
    super()
    this._formations = []

    // On parcourt chaque module JSON chargé
    for (const [chemin, m] of Object.entries(modules)) {
      const fileData = m.default

      // Si le fichier contient une structure avec des "categories"
      if (fileData && Array.isArray(fileData.categories)) {
        for (const cat of fileData.categories) {
          if (Array.isArray(cat.formations)) {
            const mappedFormations = cat.formations.map(f => mapToEntity(f, cat.id))
            this._formations.push(...mappedFormations)
          }
        }
      } 
      // Si le fichier contient directement un tableau de formations
      else if (fileData && Array.isArray(fileData.formations)) {
        const mappedFormations = fileData.formations.map(f => mapToEntity(f, f.domaine))
        this._formations.push(...mappedFormations)
      }
      // Si le fichier représente directement une seule formation
      else if (fileData && fileData.slug) {
        this._formations.push(mapToEntity(fileData, fileData.domaine))
      }
    }
  }

  async findAll() {
    return this._formations
  }

  async findBySlug(slug) {
    return this._formations.find(f => f.slug === slug) || null
  }

 async findByDomaine(domaine) {
    if (!domaine || domaine === 'tous') {
      return this._formations
    }
    const recherche = domaine.toLowerCase().trim()
    return this._formations.filter(f => f.domaine && f.domaine.toLowerCase().trim() === recherche)
  }

  async findByCampus(campusId) {
    return this._formations.filter(f => f.estDisponibleSurCampus(campusId))
  }
}

export class Formation {
  constructor({ id, slug, titre, domaine, campusIds, duree, diplome, niveauRequis, tarif, description, programme = [], debouches = [], image }) {
    if (!titre) throw new Error("Une formation doit avoir un titre")
    if (!slug) throw new Error("Une formation doit avoir un slug")

    this.id = id
    this.slug = slug
    this.titre = titre
    this.domaine = domaine
    this.campusIds = campusIds || []
    this.duree = duree
    this.diplome = diplome
    this.niveauRequis = niveauRequis
    this.tarif = tarif
    this.description = description   
    this.programme = programme       
    this.debouches = debouches
    this.image = image
  }

  estDisponibleSurCampus(campusId) {
    return this.campusIds.includes(campusId)
  }
}