import { Box, Container, Stack, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function InscriptionCTABar() {
  const navigate = useNavigate()

  return (
    // Remplacement du jaune/orange par secondary.main (Rouge) pour respecter strictement la charte Bleu / Rouge de structure
    <Box sx={{ bgcolor: 'secondary.main', py: 2.5, width: '100%' }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 800, textAlign: 'center' }}>
            Inscriptions Ouvertes 2026-2027
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/pre-inscription')}
            sx={{
              bgcolor: '#fff',
              color: 'secondary.main',
              fontWeight: 700,
              boxShadow: 'none',
              '&:hover': { bgcolor: 'grey.100', boxShadow: 'none' },
            }}
          >
            En savoir +
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}