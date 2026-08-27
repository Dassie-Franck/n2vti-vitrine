import { useState, useEffect } from 'react'
import { Fab, Zoom } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const SCROLL_THRESHOLD = 300 // apparaît après 300px de scroll

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        size="medium"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 90, // décalé pour ne pas chevaucher le bouton WhatsApp
          bgcolor: 'primary.main',
          color: 'white',
          zIndex: 1300,
          '&:hover': { bgcolor: 'primary.dark' },
        }}
        aria-label="Retour en haut de la page"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  )
}