import { useState, useEffect, useCallback } from 'react'
import { Box, Typography, Button, IconButton, Fade } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useNavigate } from 'react-router-dom'
import { heroSlides } from '@content/hero/heroSlides'
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
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
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

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const glowPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(237, 108, 2, 0.4);
  }
  50% { 
    box-shadow: 0 0 0 15px rgba(237, 108, 2, 0);
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

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
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

const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) rotate(-3deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0);
  }
`

// ========== COMPOSANT ==========
const AUTO_PLAY_DELAY = 6000

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const navigate = useNavigate()

  const goToNext = useCallback(() => {
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % heroSlides.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [])

  const goToPrev = () => {
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  useEffect(() => {
    const timer = setInterval(goToNext, AUTO_PLAY_DELAY)
    return () => clearInterval(timer)
  }, [goToNext])

  const activeSlide = heroSlides[activeIndex]

  // Animation delay helper
  const getDelay = (index, base = 0.1) => `${base * (index + 1)}s`

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 420, sm: 500, md: 600 },
        overflow: 'hidden',
        bgcolor: 'primary.dark',
      }}
    >
      {/* Image de fond avec transition en fondu */}
      {heroSlides.map((slide, index) => (
        <Fade in={index === activeIndex} timeout={600} key={slide.id} unmountOnExit>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.3s ease',
            }}
          />
        </Fade>
      ))}

      {/* Voile sombre léger pour la lisibilité globale */}
      <Box 
        sx={{ 
          position: 'absolute', 
          inset: 0, 
          bgcolor: 'rgba(0,0,0,0.15)',
          transition: 'background-color 0.5s ease',
        }} 
      />

      {/* Flèche gauche */}
      <IconButton
        onClick={goToPrev}
        sx={{
          position: 'absolute',
          left: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.4)',
          color: 'white',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': { 
            bgcolor: 'rgba(0,0,0,0.7)',
            transform: 'translateY(-50%) scale(1.1)',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          },
          zIndex: 2,
          animation: `${fadeInLeft} 0.6s ease-out forwards`,
          opacity: 0,
          animationDelay: '0.2s',
        }}
        aria-label="Slide précédent"
      >
        <ChevronLeftIcon />
      </IconButton>

      {/* Flèche droite */}
      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          bgcolor: 'rgba(0,0,0,0.4)',
          color: 'white',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': { 
            bgcolor: 'rgba(0,0,0,0.7)',
            transform: 'translateY(-50%) scale(1.1)',
            boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          },
          zIndex: 2,
          animation: `${fadeInRight} 0.6s ease-out forwards`,
          opacity: 0,
          animationDelay: '0.2s',
        }}
        aria-label="Slide suivant"
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Bandeau transparent avec titre + CTA — positionné à droite comme le template */}
      <Box
        sx={{
          position: 'absolute',
          right: { xs: '5%', md: '6%' },
          bottom: { xs: '8%', md: '18%' },
          left: { xs: '5%', md: 'auto' },
          maxWidth: { xs: 'auto', md: 480 },
          bgcolor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(8px)',
          borderRadius: 2,
          p: { xs: 2.5, md: 4 },
          zIndex: 2,
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          animation: `${slideInBottom} 0.7s ease-out forwards`,
          opacity: 0,
          animationDelay: '0.3s',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
          },
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            color: 'text.primary',
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '1.4rem', md: '1.75rem' },
            animation: `${fadeInUp} 0.7s ease-out forwards`,
            opacity: 0,
            animationDelay: '0.5s',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateX(5px)',
            },
          }}
        >
          {activeSlide.titre}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate(activeSlide.ctaLink)}
          sx={{ 
            fontWeight: 700,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            animation: `${bounceIn} 0.8s ease-out forwards`,
            opacity: 0,
            animationDelay: '0.6s',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 8px 25px rgba(237, 108, 2, 0.4)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
          }}
        >
          {activeSlide.ctaLabel}
        </Button>
      </Box>

      {/* Indicateurs (dots) */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.5,
          zIndex: 2,
        }}
      >
        {heroSlides.map((slide, index) => (
          <Box
            key={slide.id}
            onClick={() => {
              setIsTransitioning(true)
              setActiveIndex(index)
              setTimeout(() => setIsTransitioning(false), 700)
            }}
            sx={{
              width: index === activeIndex ? 28 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: index === activeIndex ? 'secondary.main' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              '&:hover': {
                transform: 'scale(1.2)',
                bgcolor: index === activeIndex ? 'secondary.main' : 'rgba(255,255,255,0.9)',
              },
              animation: `${scaleIn} 0.6s ease-out forwards`,
              opacity: 0,
              animationDelay: getDelay(index, 0.8),
            }}
          />
        ))}
      </Box>

      {/* Effet de transition entre les slides (overlay animé) */}
      {isTransitioning && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            bgcolor: 'rgba(0,0,0,0.05)',
            animation: `${fadeInUp} 0.3s ease-out forwards`,
          }}
        />
      )}
    </Box>
  )
}