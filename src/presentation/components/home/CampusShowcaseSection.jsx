import { useEffect, useState } from 'react'
import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School'
import ScienceIcon from '@mui/icons-material/Science'
import GroupsIcon from '@mui/icons-material/Groups'
import SecurityIcon from '@mui/icons-material/Security'
import { container } from '@infrastructure/container'
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

const bounceIn = keyframes`
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
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

// ========== COMPOSANT ==========
const highlights = [
  { icon: SchoolIcon, texte: "Des formations pluridisciplinaires où l'apprenant allie théorie et pratique, savoir-faire et savoir-être" },
  { icon: ScienceIcon, texte: 'Des laboratoires et ateliers équipés, pour simuler les réalités du terrain professionnel' },
  { icon: GroupsIcon, texte: "Des clubs associatifs et des espaces de vie diversifiés pour l'épanouissement des apprenants" },
  { icon: SecurityIcon, texte: 'Des campus sécurisés et facilement accessibles à Yaoundé' },
]

// Composant pour faire défiler plusieurs images en fondu
function SlidingImageCard({ images = [], campusSlug, navigate }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <Box
      onClick={() => navigate(`/campus/${campusSlug}`)}
      sx={{
        height: '100%',
        minHeight: { xs: '280px', md: 'auto' },
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {images.map((imgObj, idx) => {
        const imageUrl = typeof imgObj === 'string' ? imgObj : imgObj?.image
        return (
          <Box
            key={idx}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        )
      })}
    </Box>
  )
}

function GalerieCard({ item, campusSlug, variant, navigate, animationDelay }) {
  const isTextCard = variant === 'text'

  if (isTextCard) {
    return (
      <Box
        onClick={() => navigate(`/campus/${campusSlug}`)}
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          p: { xs: 3, md: 4 },
          height: '100%',
          minHeight: { xs: '280px', md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': { 
            bgcolor: 'secondary.dark',
            transform: 'scale(1.02)',
            boxShadow: 'inset 0 0 30px rgba(255,255,255,0.1)',
          },
          animation: `${slideInBottom} 0.7s ease-out forwards`,
          opacity: 0,
          animationDelay: animationDelay || '0s',
        }}
      >
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 700, 
            mb: 1.5, 
            lineHeight: 1.3, 
            fontSize: { xs: '1.05rem', md: '1.25rem' },
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'translateX(5px)' },
          }}
        >
          {item.titre}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            opacity: 0.9, 
            mb: 3, 
            lineHeight: 1.5,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'translateX(3px)' },
          }}
        >
          {item.description}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{ 
            alignSelf: 'flex-start', 
            color: 'white', 
            borderColor: 'white', 
            fontWeight: 700,
            transition: 'all 0.3s ease',
            '&:hover': { 
              bgcolor: 'rgba(255,255,255,0.15)',
              transform: 'scale(1.05)',
              boxShadow: '0 0 20px rgba(255,255,255,0.2)',
            },
          }}
        >
          En savoir +
        </Button>
      </Box>
    )
  }

  const imageList = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image]

  return (
    <Box
      sx={{
        animation: `${scaleIn} 0.7s ease-out forwards`,
        opacity: 0,
        animationDelay: animationDelay || '0s',
        height: '100%',
      }}
    >
      <SlidingImageCard images={imageList} campusSlug={campusSlug} navigate={navigate} />
    </Box>
  )
}

export default function CampusShowcaseSection() {
  const navigate = useNavigate()
  const [campusList, setCampusList] = useState([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    container.campus.listerCampus.execute().then(setCampusList)

    // Trigger animations after component mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const campusVedette = campusList.find((c) => c.galerie?.length > 0) || campusList[0]
  const galerie = campusVedette?.galerie || []

  // Animation delays for staggered effects
  const getDelay = (index, base = 0.1) => `${base * (index + 1)}s`

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: { xs: 4, md: 6 }, 
            alignItems: 'center',
            animation: isVisible ? `${fadeInUp} 0.8s ease-out forwards` : 'none',
            opacity: 0,
          }}
        >
          
          {/* Colonne gauche : texte + points forts */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '42%' },
              animation: isVisible ? `${fadeInLeft} 0.7s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '0.1s',
            }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: 'text.secondary', 
                letterSpacing: 1.5,
                animation: isVisible ? `${slideLeft} 0.6s ease-out forwards` : 'none',
                opacity: 0,
                animationDelay: '0.15s',
              }}
            >
              NOS CAMPUS
            </Typography>
            <Typography 
              variant="h4" 
              sx={{ 
                color: 'warning.main', 
                fontWeight: 800, 
                my: 2, 
                lineHeight: 1.3, 
                fontSize: { xs: '1.75rem', md: '2.125rem' },
                animation: isVisible ? `${fadeInUp} 0.7s ease-out forwards` : 'none',
                opacity: 0,
                animationDelay: '0.2s',
              }}
            >
              Des espaces propices à l'apprentissage et à l'épanouissement
            </Typography>

            <Stack spacing={2.5} sx={{ mt: 3 }}>
              {highlights.map(({ icon: Icon, texte }, index) => (
                <Stack 
                  direction="row" 
                  spacing={2} 
                  alignItems="flex-start" 
                  key={index}
                  sx={{
                    animation: isVisible ? `${fadeInRight} 0.6s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: getDelay(index, 0.3),
                  }}
                >
                  <Avatar 
                    sx={{ 
                      bgcolor: 'secondary.dark', 
                      width: 40, 
                      height: 40, 
                      flexShrink: 0,
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': {
                        transform: 'scale(1.15) rotate(10deg)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                      },
                      animation: isVisible ? `${bounceIn} 0.8s ease-out forwards` : 'none',
                      animationDelay: getDelay(index, 0.4),
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      pt: 0.5,
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      '&:hover': { 
                        transform: 'translateX(5px)',
                        color: 'primary.main',
                      },
                    }}
                  >
                    {texte}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Colonne droite : Grille agrandie et sans bordures */}
          <Box 
            sx={{ 
              width: { xs: '100%', md: '58%' },
              animation: isVisible ? `${fadeInRight} 0.8s ease-out forwards` : 'none',
              opacity: 0,
              animationDelay: '0.2s',
            }}
          >
            {galerie.length >= 2 ? (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gridTemplateRows: { xs: 'auto', md: '290px 290px' },
                  gap: 0,
                  borderRadius: 0,
                  overflow: 'hidden',
                }}
              >
                <GalerieCard 
                  item={galerie[0]} 
                  campusSlug={campusVedette.slug} 
                  variant="text" 
                  navigate={navigate}
                  animationDelay="0.3s"
                />
                <GalerieCard 
                  item={galerie[0]} 
                  campusSlug={campusVedette.slug} 
                  variant="image" 
                  navigate={navigate}
                  animationDelay="0.4s"
                />
                <GalerieCard 
                  item={galerie[1]} 
                  campusSlug={campusVedette.slug} 
                  variant="image" 
                  navigate={navigate}
                  animationDelay="0.5s"
                />
                <GalerieCard 
                  item={galerie[1]} 
                  campusSlug={campusVedette.slug} 
                  variant="text" 
                  navigate={navigate}
                  animationDelay="0.6s"
                />
              </Box>
            ) : (
              <Typography 
                color="text.secondary" 
                align="center" 
                sx={{ 
                  py: 8,
                  animation: isVisible ? `${fadeInUp} 0.7s ease-out forwards` : 'none',
                  opacity: 0,
                  animationDelay: '0.3s',
                }}
              >
                Galerie du campus à venir.
              </Typography>
            )}
          </Box>

        </Box>
      </Container>
    </Box>
  )
}