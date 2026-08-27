import { useState, useEffect, useCallback } from 'react'
import { Box, Fade } from '@mui/material'

const AUTO_PLAY_DELAY = 3500

/**
 * Mini-carrousel d'images pour une cellule de grille (ex: CampusShowcaseSection)
 * Reprend la même logique de fondu automatique que HeroSection, en plus compact.
 */
export default function ImageCarouselCell({ images = [], onClick, fallbackLabel = 'Photo à venir' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (images.length <= 1) return // pas besoin d'auto-play s'il n'y a qu'une image
    const timer = setInterval(goToNext, AUTO_PLAY_DELAY)
    return () => clearInterval(timer)
  }, [goToNext, images.length])

  if (images.length === 0) {
    return (
      <Box
        onClick={onClick}
        sx={{
          height: '100%',
          bgcolor: 'primary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        <Box component="span" sx={{ color: 'white', opacity: 0.7, fontSize: '0.8rem' }}>
          {fallbackLabel}
        </Box>
      </Box>
    )
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'relative',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {images.map((src, index) => (
        <Fade in={index === activeIndex} timeout={600} key={src} unmountOnExit>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Fade>
      ))}

      {/* Indicateurs discrets (dots), uniquement si plusieurs images */}
      {images.length > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 0.5,
            zIndex: 2,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: index === activeIndex ? 14 : 6,
                height: 6,
                borderRadius: 3,
                bgcolor: index === activeIndex ? 'secondary.main' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}