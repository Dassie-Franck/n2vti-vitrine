import { useState, useEffect, useCallback } from 'react'
import { Box, Container, Typography, IconButton, Avatar, Stack, Fade } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { container } from '@infrastructure/container'

const SOCIAL_ICONS = [
  { icon: TwitterIcon, url: 'https://twitter.com/N2VTI' },
  { icon: FacebookIcon, url: 'https://www.facebook.com/N2VTI' },
  { icon: InstagramIcon, url: 'https://instagram.com/N2VTI' },
  { icon: LinkedInIcon, url: 'https://linkedin.com/company/N2VTI' },
]

export default function TemoignagesSection() {
  const [temoignages, setTemoignages] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    container.temoignages.listerTemoignages.execute().then(setTemoignages)
  }, [])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % temoignages.length)
  }, [temoignages.length])

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + temoignages.length) % temoignages.length)
  }

  useEffect(() => {
    if (temoignages.length <= 1) return
    const timer = setInterval(goToNext, 8000)
    return () => clearInterval(timer)
  }, [goToNext, temoignages.length])

  if (temoignages.length === 0) return null

  const actif = temoignages[activeIndex]

  return (
    // Utilisation d'une couleur principale de structure (ex: primary.main ou secondary.main) 
    // au lieu d'un sombre générique pour respecter strictement la charte Bleu / Rouge.
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', py: { xs: 6, md: 8 }, position: 'relative', width: '100%' }}>
      {/* Flèche gauche */}
      <IconButton
        onClick={goToPrev}
        sx={{ 
          position: 'absolute', 
          left: { xs: 8, md: 24 }, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          color: '#fff',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
        }}
        aria-label="Témoignage précédent"
      >
        <ChevronLeftIcon fontSize="large" />
      </IconButton>

      {/* Flèche droite */}
      <IconButton
        onClick={goToNext}
        sx={{ 
          position: 'absolute', 
          right: { xs: 8, md: 24 }, 
          top: '50%', 
          transform: 'translateY(-50%)', 
          color: '#fff',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
        }}
        aria-label="Témoignage suivant"
      >
        <ChevronRightIcon fontSize="large" />
      </IconButton>

      <Container maxWidth="md">
        <Typography variant="overline" sx={{ color: '#fff', opacity: 0.9, letterSpacing: 1.5, fontWeight: 700 }}>
          RETOURS
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, color: '#fff' }}>
          Quelques témoignages
        </Typography>

        <Fade in key={actif.id} timeout={500}>
          <Box>
            <FormatQuoteIcon sx={{ fontSize: 32, color: '#fff', opacity: 0.7, mb: 1 }} />
            <Typography
              variant="h6"
              component="p"
              sx={{ fontStyle: 'italic', fontWeight: 400, lineHeight: 1.7, mb: 4, color: '#fff' }}
            >
              « {actif.contenu} »
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
              <Avatar src={actif.photo} alt={actif.auteur} sx={{ width: 64, height: 64, border: '2px solid #fff' }} />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff' }}>
                  {actif.auteur}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff', opacity: 0.85 }}>
                  {actif.anneePromotion && `Promotion ${actif.anneePromotion}`}
                  {actif.anneePromotion && actif.posteActuel && ' — '}
                  {actif.posteActuel && actif.posteActuel.toUpperCase()}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Fade>

        <Stack direction="row" spacing={1}>
          {SOCIAL_ICONS.map(({ icon: Icon, url }, index) => (
            <IconButton
              key={index}
              component="a"
              href={url}
              target="_blank"
              rel="noopener"
              size="small"
              sx={{
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.4)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}