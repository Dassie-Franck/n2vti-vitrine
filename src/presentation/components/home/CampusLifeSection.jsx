import { useState, useEffect } from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School'
import EventIcon from '@mui/icons-material/Event'
import SportsIcon from '@mui/icons-material/Sports'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import { container } from '../../../infrastructure/container'
import { keyframes } from '@mui/system'

// ========== ANIMATIONS KEYFRAMES ==========
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const slideInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(25, 118, 210, 0.4); }
  50% { box-shadow: 0 0 0 15px rgba(25, 118, 210, 0); }
`

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
`

const bounceIn = keyframes`
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const rotateIn = keyframes`
  from {
    opacity: 0;
    transform: rotate(-180deg) scale(0.5);
  }
  to {
    opacity: 1;
    transform: rotate(0) scale(1);
  }
`

// ========== COMPOSANT ==========
export default function CampusLifeSection() {
  const navigate = useNavigate()
  const [actualitesData, setActualitesData] = useState([])
  const [isVisible, setIsVisible] = useState(false)

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

    // Trigger animations after component mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
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

  const infrastructures = [
    {
      titre: "Laboratoire de Informatique",
      domaine: "Génie Informatique",
      image: "/assets/equipement_infra/n26.jpg"
    },
    {
      titre: "Laboratoire Beaute & Esthetique",
      domaine: "Beaute & Esthetique",
      image: "/assets/equipement_infra/n21.jpg"
    },
    {
      titre: "Laboratoire Paramedicale",
      domaine: "Paramedicale",
      image: "/assets/equipement_infra/infrastructure.jpg"
    },
    {
      titre: "Salle de Classe Moderne",
      domaine: "Salle de Classe",
      image: "/assets/equipement_infra/salle.jpg"
    }
  ]

  // Animation delays for staggered effects
  const getDelay = (index, base = 0.1) => `${base * (index + 1)}s`

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default', width: '100%', overflow: 'hidden' }}>
      {/* 1. Partie supérieure (Titre + Points forts + Grille 2x2 d'origine) */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
            gap: 5,
            animation: isVisible ? `${fadeInUp} 0.8s ease-out forwards` : 'none',
            opacity: 0,
          }}
        >
          {/* Colonne gauche : titre + points forts */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '41.6667%' }, 
              flexShrink: 0,
              animation: isVisible ? `${fadeInLeft} 0.7s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '0.1s',
            }}
          >
            <Typography
              variant="overline"
              display="block"
              sx={{ 
                color: 'primary.main', 
                fontWeight: 700, 
                letterSpacing: 2, 
                mb: 1,
                animation: isVisible ? `${slideLeft} 0.6s ease-out forwards` : 'none',
                opacity: 0,
              }}
            >
              NOS CAMPUS & ACTUALITÉS
            </Typography>
            <Typography
              variant="h4"
              sx={{ 
                fontWeight: 800, 
                color: 'text.primary', 
                mb: 3, 
                lineHeight: 1.3, 
                fontSize: { xs: '1.75rem', md: '2.125rem' },
                animation: isVisible ? `${fadeInUp} 0.7s ease-out forwards` : 'none',
                opacity: 0,
                animationDelay: '0.15s',
              }}
            >
              Un cadre d'immersion idéal pour conjuguer exigence académique et vie associative
            </Typography>

            <Stack spacing={3}>
              {features.map((feature, index) => {
                const Icon = feature.icon
                const iconBgColor = index % 2 === 0 ? 'primary.main' : 'secondary.main'
                return (
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="flex-start"
                    key={index}
                    sx={{
                      animation: isVisible ? `${fadeInRight} 0.6s ease-out forwards` : 'none',
                      opacity: 0,
                      animationDelay: getDelay(index, 0.2),
                    }}
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
                        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.15) rotate(8deg)',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                        },
                        animation: isVisible ? `${bounceIn} 0.8s ease-out forwards` : 'none',
                        animationDelay: getDelay(index, 0.3),
                      }}
                    >
                      <Icon sx={{ fontSize: 22 }} />
                    </Box>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: 'text.primary', 
                        pt: 0.7, 
                        fontWeight: 500,
                        transition: 'transform 0.3s ease, color 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(5px)',
                          color: 'primary.main',
                        }
                      }}
                    >
                      {feature.text}
                    </Typography>
                  </Stack>
                )
              })}
            </Stack>
          </Box>

          {/* Colonne droite : Grille 2x2 avec alternance Bleu/Rouge */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '58.3333%' }, 
              flexShrink: 0,
              animation: isVisible ? `${fadeInRight} 0.8s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '0.2s',
            }}
          >
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
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': { 
                      opacity: 0.92,
                      transform: 'scale(1.02)',
                      boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1)',
                    },
                    animation: isVisible ? `${zoomIn} 0.7s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: '0.3s',
                  }}
                  onClick={() => actualitesData[3] && navigate(`/actualites/rentree/${actualitesData[3].slug}`)}
                >
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1, 
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateX(5px)' },
                    }}
                  >
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
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        borderColor: '#fff', 
                        bgcolor: 'rgba(255,255,255,0.15)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                      },
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
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': { 
                      filter: 'brightness(1.15) saturate(1.2)',
                      transform: 'scale(1.03)',
                    },
                    animation: isVisible ? `${scaleIn} 0.7s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: '0.4s',
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
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': { 
                      filter: 'brightness(1.15) saturate(1.2)',
                      transform: 'scale(1.03)',
                    },
                    animation: isVisible ? `${scaleIn} 0.7s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: '0.5s',
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
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': { 
                      opacity: 0.92,
                      transform: 'scale(1.02)',
                      boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1)',
                    },
                    animation: isVisible ? `${zoomIn} 0.7s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: '0.6s',
                  }}
                  onClick={() => {
                    const target = actualitesData[2] || actualitesData[1]
                    if (target) navigate(`/actualites/rentree/${target.slug}`)
                  }}
                >
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 700, 
                      mb: 1, 
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'translateX(5px)' },
                    }}
                  >
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
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        borderColor: '#fff', 
                        bgcolor: 'rgba(255,255,255,0.15)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                      },
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
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': { 
                      transform: 'translateY(-8px) scale(1.01)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    animation: isVisible ? `${slideInBottom} 0.7s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: getDelay(index, 0.7),
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
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': { 
                        filter: 'brightness(1.1) saturate(1.15)',
                        transform: 'scale(1.05)',
                      },
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
                      justifyContent: 'space-between',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 'inset 0 0 30px rgba(255,255,255,0.05)',
                      }
                    }}
                  >
                    <Box>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          fontWeight: 700, 
                          mb: 1, 
                          fontSize: '1.1rem',
                          transition: 'transform 0.3s ease',
                          '&:hover': { transform: 'translateX(5px)' },
                        }}
                      >
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
                        transition: 'all 0.3s ease',
                        '&:hover': { 
                          borderColor: '#fff', 
                          bgcolor: 'rgba(255,255,255,0.15)',
                          transform: 'scale(1.05)',
                          boxShadow: '0 0 20px rgba(255,255,255,0.2)',
                        },
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
            sx={{ 
              color: 'primary.main', 
              fontWeight: 700, 
              letterSpacing: 2, 
              mb: 1,
              animation: isVisible ? `${slideLeft} 0.6s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '0.8s',
            }}
          >
            EXCELLENCE & TECHNOLOGIE
          </Typography>
          <Typography
            variant="h4"
            sx={{ 
              fontWeight: 800, 
              color: 'text.primary', 
              fontSize: { xs: '1.5rem', md: '2rem' },
              animation: isVisible ? `${fadeInUp} 0.7s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '0.9s',
            }}
          >
            Nos Laboratoires & Infrastructures de Pointe
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary', 
              mt: 1, 
              maxWidth: '700px', 
              mx: 'auto',
              animation: isVisible ? `${fadeInUp} 0.7s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '1s',
            }}
          >
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
            '&::-webkit-scrollbar-thumb': { 
              bgcolor: 'rgba(0, 0, 0, 0.2)', 
              borderRadius: '4px',
              transition: 'background-color 0.3s ease',
              '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.4)' },
            },
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
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                '&:hover': {
                  transform: 'translateY(-10px) scale(1.02)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                },
                animation: isVisible ? `${slideInBottom} 0.7s ease-out forwards` : 'none',
                opacity: 0,
                animationDelay: getDelay(index, 1.1),
              }}
            >
              {/* Image de l'infrastructure */}
              <Box
                sx={{
                  height: '200px',
                  backgroundImage: `url(${infra.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  '&:hover': { 
                    filter: 'brightness(1.1) saturate(1.1)',
                    transform: 'scale(1.05)',
                  },
                }}
              />
              {/* Description */}
              <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <Box>
                  <Typography
                    variant="caption"
                    sx={{ 
                      color: index % 2 === 0 ? 'primary.main' : 'secondary.main', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      letterSpacing: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        letterSpacing: 2,
                        color: index % 2 === 0 ? 'primary.dark' : 'secondary.dark',
                      },
                    }}
                  >
                    {infra.domaine}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 700, 
                      color: 'text.primary', 
                      mt: 0.5, 
                      mb: 1,
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      '&:hover': { 
                        transform: 'translateX(5px)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {infra.titre}
                  </Typography>
                </Box>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary', 
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease',
                    '&:hover': { color: 'text.primary' },
                  }}
                >
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