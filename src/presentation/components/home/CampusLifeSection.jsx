import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School'
import EventIcon from '@mui/icons-material/Event'
import SportsIcon from '@mui/icons-material/Sports'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { container } from '../../../infrastructure/container'

export default function CampusLifeSection() {
  const navigate = useNavigate()
  const [actualitesData, setActualitesData] = useState([])

  useEffect(() => {
    async function fetchActualites() {
      try {
        const data = await container.actualites.listerActualites.execute()
        if (data && data.length > 0) {
          setActualitesData(data)
        }
      } catch (error) {
        console.error("Erreur lors du chargement des actualités :", error)
      }
    }
    fetchActualites()
  }, [])

  const features = [
    {
      icon: SchoolIcon,
      text: "Des formations pluridisciplinaires où l'étudiant allie théorie et pratique, mais aussi savoir-faire et savoir-être",
    },
    {
      icon: EventIcon,
      text: "Des cérémonies de remise de diplômes mémorables, célébrant la réussite et l'excellence de nos étudiants N2VTI",
    },
    {
      icon: SportsIcon,
      text: "Des clubs dynamiques et des plateaux médias professionnels (Studio H3 Radio) pour l'expression et l'immersion des étudiants",
    },
    {
      icon: MusicNoteIcon,
      text: "Des résidences sécurisées et équipées, ainsi qu'un encadrement de qualité favorisant l'épanouissement global",
    },
  ]

  // Liste des laboratoires et infrastructures pour la section défilante du bas
  const infrastructures = [
    {
      titre: "Laboratoire de Informatique",
      domaine: "Génie Informatique",
      image: "../../../../public/assets/equipement_infra/n26.jpg"
    },
    {
      titre: "Laboratoire Beaute & Esthetique",
      domaine: "Beaute & Esthetique",
      image: "../../../../public/assets/equipement_infra/n21.jpg"
    },
    {
      titre: "Laboratoire Paramedicale",
      domaine: "Paramedicale",
      image: "../../../../public/assets/equipement_infra/infrastructure.jpg"
    },
    {
      titre: "Salle de Classe Moderne",
      domaine: "Salle de Classe",
      image: "../../../../public/assets/equipement_infra/salle.jpg"
    }
  ]

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default', width: '100%' }}>
      {/* 1. Partie supérieure (Titre + Points forts + Grille 2x2 d'origine) */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            gap: 5,
          }}
        >
          {/* Colonne gauche : titre + points forts */}
          <Box sx={{ width: { xs: '100%', md: '41.6667%' }, flexShrink: 0 }}>
            <Typography
              variant="overline"
              display="block"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 1 }}
            >
              NOS CAMPUS & ACTUALITÉS
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: 'text.primary', mb: 3, lineHeight: 1.3, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
            >
              Un cadre d'immersion idéal pour conjuguer exigence académique et vie associative
            </Typography>

            <Stack spacing={3}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                // Alternance des puces icônes entre le Bleu et le Rouge
                const iconBgColor = index % 2 === 0 ? 'primary.main' : 'secondary.main'
                return (
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    key={index}
                  >
                    <Box
                      sx={{
                        bgcolor: iconBgColor,
                        color: '#fff',
                        borderRadius: '50%',
                        width: 44,
                        height: 44,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 22 }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.primary', pt: 0.7, fontWeight: 500 }}>
                      {feature.text}
                    </Typography>
                  </Stack>
                )
              })}
            </Stack>
          </Box>

          {/* Colonne droite : Grille 2x2 avec alternance Bleu/Rouge */}
          <Box sx={{ width: { xs: '100%', md: '58.3333%' }, flexShrink: 0 }}>
            {actualitesData.length === 0 ? (
              <Typography color="text.secondary" align="center" sx={{ py: 6 }}>
                Chargement des actualités...
              </Typography>
            ) : (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gridTemplateRows: { xs: 'auto', md: '290px 290px' },
                  borderRadius: 0,
                  overflow: 'hidden',
                  gap: 0,
                }}
              >
                {/* Cellule 1 : Texte en BLEU (primary.main) */}
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#fff',
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 0.92 },
                  }}
                  onClick={() => actualitesData[3] && navigate(`/actualites/rentree/${actualitesData[3].slug}`)}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                    {actualitesData[3]?.titre || 'ACTUALITÉ RÉCENTE'}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mb: 2, fontSize: { xs: '0.85rem', md: '0.9rem' }, lineHeight: 1.5 }}>
                    {actualitesData[3]?.resume || ''}
                  </Typography>
                  <Button
                    size="medium"
                    variant="outlined"
                    sx={{
                      color: '#fff',
                      borderColor: '#fff',
                      alignSelf: 'flex-start',
                      fontWeight: 700,
                      '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    EN SAVOIR +
                  </Button>
                </Box>

                {/* Cellule 2 : Image */}
                <Box
                  sx={{
                    minHeight: { xs: '280px', md: 'auto' },
                    backgroundImage: `url(${actualitesData[3]?.image || ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition: 'filter 0.4s',
                    '&:hover': { filter: 'brightness(1.1)' },
                  }}
                  onClick={() => {
                    const target = actualitesData[3]
                    if (target) navigate(`/actualites/rentree/${target.slug}`)
                  }}
                />

                {/* Cellule 3 : Image */}
                <Box
                  sx={{
                    minHeight: { xs: '280px', md: 'auto' },
                    backgroundImage: `url(${actualitesData[2]?.image || ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    cursor: 'pointer',
                    transition: 'filter 0.4s',
                    '&:hover': { filter: 'brightness(1.1)' },
                  }}
                  onClick={() => {
                    const target = actualitesData[2] || actualitesData[1]
                    if (target) navigate(`/actualites/rentree/${target.slug}`)
                  }}
                />

                {/* Cellule 4 : Texte en ROUGE (secondary.main) */}
                <Box
                  sx={{
                    bgcolor: 'secondary.main',
                    color: '#fff',
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 0.92 },
                  }}
                  onClick={() => {
                    const target = actualitesData[2] || actualitesData[1]
                    if (target) navigate(`/actualites/rentree/${target.slug}`)
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, fontSize: { xs: '1rem', md: '1.15rem' } }}>
                    {actualitesData[2]?.titre || 'ÉVÉNEMENT DU CAMPUS'}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9, mb: 2, fontSize: { xs: '0.85rem', md: '0.9rem' }, lineHeight: 1.5 }}>
                    {actualitesData[2]?.resume || ''}
                  </Typography>
                  <Button
                    size="medium"
                    variant="outlined"
                    sx={{
                      color: '#fff',
                      borderColor: '#fff',
                      alignSelf: 'flex-start',
                      fontWeight: 700,
                      '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                    }}
                  >
                    EN SAVOIR +
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>

      {/* 2. Section du bas : 2 cartes du bas avec alternance Bleu / Rouge */}
      <Box sx={{ mt: 6, px: { xs: 3, md: 6 }, width: '100%' }}>
        <Grid container spacing={4} alignItems="stretch">
          {actualitesData.slice(0, 2).map((item, index) => {
            const cardBg = index % 2 === 0 ? 'primary.main' : 'secondary.main'
            return (
              <Grid item xs={12} md={6} key={item.id || index} sx={{ display: 'flex' }}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'translateY(-4px)' },
                  }}
                  onClick={() => navigate(`/actualites/fete/${item.slug}`)}
                >
                  <Box
                    sx={{
                      height: { xs: '260px', md: '250px' },
                      flexShrink: 0,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'filter 0.4s',
                      '&:hover': { filter: 'brightness(1.1)' },
                    }}
                  />
                  <Box 
                    sx={{ 
                      bgcolor: cardBg, 
                      color: '#fff', 
                      p: { xs: 3, md: 4 },
                      flex: 1, 
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
                        {(item.titre || '').toUpperCase()}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          opacity: 0.9, 
                          fontSize: '0.9rem', 
                          lineHeight: 1.5,
                          mb: 3
                        }}
                      >
                        {item.resume}
                      </Typography>
                    </Box>
                    
                    <Button
                      size="medium"
                      variant="outlined"
                      sx={{
                        color: '#fff',
                        borderColor: '#fff',
                        fontWeight: 700,
                        alignSelf: 'flex-start',
                        '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                      }}
                    >
                      EN SAVOIR +
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Box>

      {/* 3. SECTION : Liste / Carrousel défilant des laboratoires & infrastructures */}
      <Box sx={{ mt: 10, width: '100%' }}>
        <Box sx={{ px: { xs: 3, md: 6 }, mb: 4, textAlign: 'center' }}>
          <Typography
            variant="overline"
            display="block"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 1 }}
          >
            EXCELLENCE & TECHNOLOGIE
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: 'text.primary', fontSize: { xs: '1.5rem', md: '2rem' } }}
          >
            Nos Laboratoires & Infrastructures de Pointe
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1, maxWidth: '700px', mx: 'auto' }}>
            Découvrez nos équipements modernes conçus pour offrir aux étudiants un cadre d'apprentissage pratique et hautement qualitatif.
          </Typography>
        </Box>

        {/* Conteneur défilant horizontal (effet ruban) */}
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 3,
            px: { xs: 3, md: 6 },
            py: 2,
            scrollbarWidth: 'thin',
            '&::-webkit-scrollbar': { height: '8px' },
            '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0, 0, 0, 0.2)', borderRadius: '4px' },
          }}
        >
          {infrastructures.map((infra, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: '280px', md: '340px' },
                maxWidth: { xs: '280px', md: '340px' },
                bgcolor: 'background.paper',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.12)',
                },
              }}
            >
              {/* Image de l'infrastructure */}
              <Box
                sx={{
                  height: '200px',
                  backgroundImage: `url(${infra.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* Description */}
              <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ color: index % 2 === 0 ? 'primary.main' : 'secondary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}
                  >
                    {infra.domaine}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mt: 0.5, mb: 1 }}>
                    {infra.titre}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                  Équipement de dernière génération pour l'accompagnement pédagogique et les travaux pratiques.
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}