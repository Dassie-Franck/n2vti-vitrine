export class Tarif {
  constructor(montant = null, devise = 'FCFA', surDemande = false) {
    this.montant = montant
    this.devise = devise
    this.surDemande = surDemande || montant === null
  }

  toString() {
    if (this.surDemande) return 'Nous consulter'
    return `${this.montant.toLocaleString('fr-FR')} ${this.devise}`
  }
}