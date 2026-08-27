import { Box, Container, Typography, Card, Avatar } from '@mui/material'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import { diplomes } from '@content/home/diplomes'

function DiplomeCard({ code, libelle, description }) {
  return (
    <Card
      sx={{
        width: 220, // Carte compacte
        mx: 1.5,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        borderRadius: 2,
        bgcolor: 'background.paper',
        flexShrink: 0,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
        },
      }}
    >
      <Avatar sx={{ bgcolor: 'primary.main', width: 42, height: 42, mb: 1.5 }}>
        <WorkspacePremiumIcon sx={{ fontSize: 22 }} />
      </Avatar>
      <Typography variant="subtitle1" sx={{ color: 'secondary.main', fontWeight: 800, mb: 0.5, fontSize: '0.95rem' }}>
        {code}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary', fontSize: '0.85rem' }}>
        {libelle}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
        {description}
      </Typography>
    </Card>
  )
}

export default function DiplomesSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default', width: '100%', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2, mb: 1 }}>
          NOS DIPLÔMES
        </Typography>
        <Typography variant="h4" align="center" sx={{ color: 'text.primary', fontWeight: 800, mb: 6, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
          Des qualifications reconnues et certifiantes
        </Typography>
      </Container>

      {/* Conteneur défilant mais centré au milieu de la page */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Centre les éléments au milieu
          overflowX: 'auto',
          px: { xs: 2, md: 6 },
          py: 2,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { height: '6px' },
          '&::-webkit-scrollbar-thumb': { bgcolor: 'rgba(0, 0, 0, 0.2)', borderRadius: '4px' },
        }}
      >
        <Box sx={{ display: 'flex', width: 'max-content', justifyContent: 'center' }}>
          {diplomes.map((diplome) => (
            <DiplomeCard key={diplome.code} {...diplome} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}