import { Box, Container, Typography, Grid, Stack } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { pourquoiChoisir } from '@content/home/pourquoiChoisir'
import { keyframes } from '@mui/system'
import { useState, useEffect } from 'react'

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

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
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

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
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

// ========== COMPOSANT ==========
export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  // Helper pour les délais en cascade
  const getDelay = (index, base = 0.1) => `${base * (index + 1)}s`

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {/* Tagline aux couleurs de la charte */}
        <Typography
          variant="overline"
          sx={{ 
            color: 'secondary.main',
            fontWeight: 700, 
            letterSpacing: 1.5, 
            display: 'block', 
            textAlign: 'center',
            animation: isVisible ? `${slideLeft} 0.6s ease-out forwards` : 'none',
            opacity: 0,
            animationDelay: '0.1s',
          }}
        >
          {pourquoiChoisir.tagline}
        </Typography>

        {/* Titre principal en noir/gris très foncé pour l'élégance */}
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ 
            color: 'text.primary', 
            fontWeight: 800, 
            mt: 1, 
            mb: 2,
            animation: isVisible ? `${fadeInDown} 0.7s ease-out forwards` : 'none',
            opacity: 0,
            animationDelay: '0.15s',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        >
          {pourquoiChoisir.titre}
        </Typography>

        {/* Liseré décoratif rouge centré (rappel de la charte) */}
        <Box 
          sx={{ 
            width: 50, 
            height: 4, 
            bgcolor: 'secondary.main', 
            mx: 'auto', 
            mb: 3, 
            borderRadius: 1,
            animation: isVisible ? `${scaleIn} 0.7s ease-out forwards` : 'none',
            opacity: 0,
            animationDelay: '0.2s',
            transition: 'all 0.3s ease',
            '&:hover': {
              width: 80,
              boxShadow: '0 0 20px rgba(237, 108, 2, 0.3)',
            },
          }} 
        />

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{ 
            color: 'text.secondary', 
            maxWidth: 780, 
            mx: 'auto', 
            mb: 5,
            animation: isVisible ? `${fadeInUp} 0.7s ease-out forwards` : 'none',
            opacity: 0,
            animationDelay: '0.25s',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateX(5px)',
            },
          }}
        >
          {pourquoiChoisir.description}
        </Typography>

        {/* Grille des points avec un mariage de couleurs propre et pro */}
        <Grid container spacing={3} justifyContent="center">
          {pourquoiChoisir.points.map((point, index) => {
            // Alternance des directions d'animation
            const animationType = index % 3 === 0 ? fadeInLeft : 
                                 index % 3 === 1 ? fadeInUp : fadeInRight
            
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Stack 
                  direction="row" 
                  spacing={2} 
                  alignItems="center"
                  sx={{ 
                    p: 2.5, 
                    height: '100%', 
                    bgcolor: 'background.paper', 
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    '&:hover': {
                      borderColor: 'secondary.main',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                      transform: 'translateY(-4px) scale(1.02)',
                    },
                    animation: isVisible ? `${animationType} 0.6s ease-out forwards` : 'none',
                    opacity: 0,
                    animationDelay: getDelay(index, 0.3),
                  }}
                >
                  {/* Icône aux couleurs de la marque (Rouge secondaire) */}
                  <CheckCircleIcon 
                    sx={{ 
                      color: 'secondary.main', 
                      flexShrink: 0,
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '&:hover': {
                        transform: 'rotate(360deg) scale(1.2)',
                        color: 'primary.main',
                      },
                      animation: isVisible ? `${bounceIn} 0.8s ease-out forwards` : 'none',
                      opacity: 0,
                      animationDelay: getDelay(index, 0.4),
                    }} 
                  />
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontWeight: 600, 
                      color: 'text.primary',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)',
                        color: 'secondary.main',
                      },
                    }}
                  >
                    {point}
                  </Typography>
                </Stack>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}