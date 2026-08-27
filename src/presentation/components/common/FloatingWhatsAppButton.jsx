import { Fab } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const WHATSAPP_NUMBER = '237600000000' // ⚠️ à remplacer par le vrai numéro N2VTI

export default function FloatingWhatsAppButton() {
  return (
    <Fab
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener"
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        bgcolor: '#25D366',
        color: 'white',
        zIndex: 1300,
        '&:hover': { bgcolor: '#1DA851' },
      }}
      aria-label="Contacter sur WhatsApp"
    >
      <WhatsAppIcon />
    </Fab>
  )
}