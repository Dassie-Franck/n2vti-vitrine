import { useState, useEffect, useCallback } from 'react';
import { container } from '@infrastructure/container';

export function useCatalog() {
  const [formations, setFormations] = useState([]);
  const [campusList, setCampusList] = useState([]);
  const [actualites, setActualites] = useState([]);
  const [temoignages, setTemoignages] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger l'ensemble des données initiales (idéal pour la page d'accueil ou le catalogue)
  const loadAllData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        formationsData,
        campusData,
        actualitesData,
        temoignagesData
      ] = await Promise.all([
        container.getFormationsUseCase.execute(),
        container.getCampusUseCase.execute(),
        container.getActualitesUseCase.execute(),
        container.getTemoignagesUseCase.execute()
      ]);

      setFormations(formationsData);
      setCampusList(campusData);
      setActualites(actualitesData);
      setTemoignages(temoignagesData);
    } catch (err) {
      setError(err.message || "Erreur lors du chargement des données.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  // Fonction spécifique pour soumettre le formulaire de contact / pré-inscription
  const submitContactForm = async (formData) => {
    try {
      setLoading(true);
      const result = await container.submitContactUseCase.execute(formData);
      return result;
    } catch (err) {
      throw new Error(err.message || "Échec de l'envoi du formulaire.");
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour récupérer une formation unique par son slug (pour les pages de détails)
  const getFormationBySlug = async (slug) => {
    try {
      return await container.getFormationBySlugUseCase.execute(slug);
    } catch (err) {
      throw new Error(err.message || `Impossible de récupérer la formation : ${slug}`);
    }
  };

  return {
    formations,
    campusList,
    actualites,
    temoignages,
    loading,
    error,
    refreshData: loadAllData,
    submitContactForm,
    getFormationBySlug
  };
}