import { useState, useEffect, useCallback } from 'react'
import { Box, Typography, Button, IconButton, Fade } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { useNavigate } from 'react-router-dom'
import { heroSlides } from '@content/hero/heroSlides'

const AUTO_PLAY_DELAY = 6000

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const navigate = useNavigate()

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  useEffect(() => {
    const timer = setInterval(goToNext, AUTO_PLAY_DELAY)
    return () => clearInterval(timer)
  }, [goToNext])

  const activeSlide = heroSlides[activeIndex]

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 420, sm: 500, md: 600 },
        overflow: 'hidden',
        bgcolor: 'primary.dark', // fallback pendant le chargement des images
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
            }}
          />
        </Fade>
      ))}

      {/* Voile sombre léger pour la lisibilité globale */}
      <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.15)' }} />

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
          '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
          zIndex: 2,
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
          '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
          zIndex: 2,
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
          bgcolor: 'rgba(255,255,255,0.88)',
          backdropFilter: 'blur(2px)',
          borderRadius: 2,
          p: { xs: 2.5, md: 4 },
          zIndex: 2,
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
          }}
        >
          {activeSlide.titre}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => navigate(activeSlide.ctaLink)}
          sx={{ fontWeight: 700 }}
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
          gap: 1,
          zIndex: 2,
        }}
      >
        {heroSlides.map((slide, index) => (
          <Box
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            sx={{
              width: index === activeIndex ? 24 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: index === activeIndex ? 'secondary.main' : 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}