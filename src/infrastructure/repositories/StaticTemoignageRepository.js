import { ITemoignageRepository } from '@domain/repositories/ITemoignageRepository'
import { Temoignage } from '@domain/entities/Temoignage'
import temoignagesData from '@content/temoignages/temoignages.json'

export class StaticTemoignageRepository extends ITemoignageRepository {
  constructor() {
    super()
    this._temoignages = temoignagesData.map(t => new Temoignage(t))
  }

  async findAll() {
    return this._temoignages
  }
}