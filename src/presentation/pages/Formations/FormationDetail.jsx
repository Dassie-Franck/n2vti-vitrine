import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Tes vrais imports
import gestionData from '../../../content/formations/gestion.json';
import paramedicalData from '../../../content/formations/paramedical.json';
import bienEtreData from '../../../content/formations/bien-etre.json';
import informatiqueData from '../../../content/formations/informatique.json';

// Regroupement des données pour la recherche
const categoriesMap = [
  { id: gestionData.categorie, nom: gestionData.libelleCategorie, formations: gestionData.formations },
  { id: paramedicalData.categorie, nom: paramedicalData.libelleCategorie, formations: paramedicalData.formations },
  { id: bienEtreData.categorie, nom: bienEtreData.libelleCategorie, formations: bienEtreData.formations },
  { id: informatiqueData.categorie, nom: informatiqueData.libelleCategorie, formations: informatiqueData.formations },
];

// Fonction de recherche par slug à travers toutes les catégories
function getFormationBySlug(slug) {
  for (const cat of categoriesMap) {
    const formationTrouvee = cat.formations.find(f => f.slug === slug);
    if (formationTrouvee) {
      return {
        ...formationTrouvee,
        categorieNom: cat.nom,
        categorieId: cat.id
      };
    }
  }
  return null;
}

export default function FormationDetail() {
  const { slug } = useParams();
  const formation = getFormationBySlug(slug);

  // Si la formation n'est pas trouvée
  if (!formation) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Formation introuvable</h2>
        <p>Désolé, la formation que vous recherchez n'existe pas.</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'underline' }}>
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="formation-detail-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '30px 20px', fontFamily: 'sans-serif' }}>
      
      {/* Fil d'Ariane */}
      <nav style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Accueil</Link> &gt; 
        <span> {formation.categorieNom}</span> &gt; 
        <strong> {formation.titre}</strong>
      </nav>

      {/* En-tête */}
      <header style={{ marginBottom: '30px' }}>
        <span style={{ backgroundColor: '#e2e8f0', color: '#333', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>
          {formation.categorieNom}
        </span>
        
        <h1 style={{ fontSize: '2.5rem', margin: '15px 0 10px 0', color: '#1a202c' }}>{formation.titre}</h1>
        
        {formation.image && (
          <img 
            src={formation.image} 
            alt={formation.titre} 
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '12px', margin: '20px 0', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
        )}
        
        <p style={{ fontSize: '1.2rem', color: '#4a5568', lineHeight: '1.6' }}>{formation.description}</p>
      </header>

      {/* Bloc d'informations clés (Grille) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', background: '#f8fafc', padding: '20px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '30px' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#718096', display: 'block' }}>DIPLÔME PRÉPARÉ</span>
          <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>{formation.diplome}</strong>
        </div>
        <div>
          <span style={{ fontSize: '12px', color: '#718096', display: 'block' }}>NIVEAU REQUIS</span>
          <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>{formation.niveauRequis}</strong>
        </div>
        <div>
          <span style={{ fontSize: '12px', color: '#718096', display: 'block' }}>CURSUS</span>
          <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>{formation.cursus}</strong>
        </div>
        <div>
          <span style={{ fontSize: '12px', color: '#718096', display: 'block' }}>TARIF</span>
          <strong style={{ fontSize: '1.1rem', color: '#2d3748' }}>
            {formation.tarif?.surDemande ? "Sur demande" : `${formation.tarif?.montant?.toLocaleString()} ${formation.tarif?.devise || ''}`}
          </strong>
        </div>
      </div>

      {/* Compétences visées */}
      {formation.competences && formation.competences.length > 0 && (
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>Compétences visées</h2>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px', paddingLeft: '20px', color: '#4a5568' }}>
            {formation.competences.map((comp, index) => (
              <li key={index} style={{ marginBottom: '6px' }}>{comp}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Programme de la formation */}
      {formation.programme && formation.programme.length > 0 && (
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>Programme de formation</h2>
          <ul style={{ columns: '2', columnGap: '30px', paddingLeft: '20px', color: '#4a5568' }}>
            {formation.programme.map((prog, index) => (
              <li key={index} style={{ marginBottom: '8px', breakInside: 'avoid' }}>{prog}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Débouchés professionnels */}
      {formation.debouches && formation.debouches.length > 0 && (
        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>Débouchés professionnels</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
            {formation.debouches.map((debouche, index) => (
              <span key={index} style={{ backgroundColor: '#ebf8ff', color: '#3182ce', padding: '6px 12px', borderRadius: '6px', fontSize: '14px', fontWeight: '500' }}>
                {debouche}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Secteurs d'emploi */}
      {formation.secteursEmploi && formation.secteursEmploi.length > 0 && (
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#2d3748', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px' }}>Secteurs d'emploi</h2>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            {formation.secteursEmploi.join(', ')}
          </p>
        </section>
      )}

      {/* Bouton d'action / Inscription */}
      <div style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f0f4f8', borderRadius: '12px', textAlign: 'center' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#2d3748' }}>Intéressé par cette formation ?</h3>
        <p style={{ color: '#718096', marginBottom: '20px' }}>Contactez le {formation.contact || "service des admissions"} pour déposer votre dossier.</p>
        <button 
          style={{ padding: '14px 28px', backgroundColor: '#3182ce', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
          onClick={() => alert(`Demande d'admission pour la formation : ${formation.titre}`)}
        >
          Déposer un dossier de candidature
        </button>
      </div>

    </div>
  );
}