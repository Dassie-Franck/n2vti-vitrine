export class Duree {
  constructor(valeur, unite = 'mois') {
    const unitesValides = ['jours', 'semaines', 'mois', 'ans']
    if (!unitesValides.includes(unite)) {
      throw new Error(`Unité de durée invalide: ${unite}`)
    }
    if (typeof valeur !== 'number' || valeur <= 0) {
      throw new Error("La durée doit être un nombre positif")
    }

    this.valeur = valeur
    this.unite = unite
  }

  toString() {
    return `${this.valeur} ${this.unite}`
  }
}