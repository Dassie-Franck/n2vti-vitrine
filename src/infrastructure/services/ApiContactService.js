export class ApiContactService {
  constructor(endpointUrl = '/api/contact') {
    this.endpointUrl = endpointUrl;
  }

  async send(formData) {
    try {
      // Simulation ou appel réel fetch vers votre backend (ex: XAMPP / Laravel)
      /*
      const response = await fetch(this.endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du message au serveur.");
      }

      return await response.json();
      */

      // Simulation pour le développement (Mock)
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: "Votre message a bien été transmis avec succès. Nous vous recontacterons très rapidement."
          });
        }, 1000);
      });

    } catch (error) {
      throw new Error(`Échec du service de contact : ${error.message}`);
    }
  }
}