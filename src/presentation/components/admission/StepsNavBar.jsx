import { Box, Container, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { etapesAdmission } from '@content/admission/etapesAdmission'

function scrollToAncre(ancre) {
  const element = document.getElementById(ancre)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function StepsNavBar() {
  // Numéro WhatsApp unique spécifié
  const whatsappNumber = "237697321723"

  return (
    <Box sx={{ bgcolor: '#C0262D' }}>
      {/* Sous-titre de la bande */}
      <Box sx={{ bgcolor: '#C0262D', py: 1 }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'white', letterSpacing: 1.5, fontWeight: 700 }}>
            LE PARCOURS EN QUELQUES ÉTAPES
          </Typography>
        </Container>
      </Box>

      {/* Ligne unique, sans wrap : étapes + WhatsApp */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', lg: 'nowrap' }, // wrap seulement sur mobile
          width: '100%',
        }}
      >
        {etapesAdmission.map((etape, index) => (
          <Box
            key={etape.numero}
            onClick={() => scrollToAncre(etape.ancre)}
            sx={{
              flex: '1 1 0',
              minWidth: { xs: '50%', sm: 200 },
              // Alternance exacte entre #C0262D et #A6A8AB
              bgcolor: index % 2 === 0 ? '#C0262D' : '#A6A8AB',
              color: 'white',
              py: 3,
              px: 2.5,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              borderRight: '1px solid rgba(255,255,255,0.15)',
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.9 },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, opacity: 0.6, lineHeight: 1, flexShrink: 0 }}>
              {etape.numero}
            </Typography>
            <Box
              sx={{
                width: '1px',
                height: 32,
                bgcolor: 'rgba(255,255,255,0.4)',
                flexShrink: 0,
                display: { xs: 'none', sm: 'block' },
              }}
            />
            <Typography variant="body1" sx={{ fontWeight: 600, lineHeight: 1.3 }}>
              {etape.titre}
            </Typography>
          </Box>
        ))}

        {/* Bouton WhatsApp unique en vert */}
        <Box
          component="a"
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener"
          sx={{
            flex: '0 0 auto',
            width: { xs: '50%', sm: 130 },
            bgcolor: '#25D366',
            color: 'white',
            py: 3,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            textDecoration: 'none',
            '&:hover': { bgcolor: '#1DA851' },
          }}
        >
          <WhatsAppIcon />
          <Typography variant="caption" sx={{ fontWeight: 700, textAlign: 'center' }}>
            6 97 32 17 23
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}