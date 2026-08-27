export class NiveauRequis {
  constructor(niveau) {
    if (!niveau || typeof niveau !== 'string' || niveau.trim() === '') {
      throw new Error(`Niveau requis invalide: ${niveau}`);
    }
    this.niveau = niveau.trim();
  }

  toString() {
    return this.niveau;
  }
}