import { Box, Container, Typography, Grid, Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DownloadIcon from '@mui/icons-material/Download'
import { Link as RouterLink } from 'react-router-dom'
import { etapesConcours } from '@content/admission/etapesConcours'
import StyledAccordion from '@presentation/components/common/StyledAccordion'

export default function AdmissionSection() {
  return (
    <Box id="admissions" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="overline" align="center" display="block" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
          À PROPOS DE L'ADMISSION
        </Typography>
        <Typography variant="h4" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Admissions à N2VTI
        </Typography>
        <Box sx={{ width: 60, height: 4, bgcolor: 'primary.main', mx: 'auto', mb: 3 }} />
        <Typography variant="body1" align="center" sx={{ color: 'text.secondary', maxWidth: 780, mx: 'auto', mb: 5 }}>
          N2VTI forme des hommes et des femmes techniquement compétents et humainement responsables,
          sur les campus de Yaoundé et de Douala. Une admission simple, en 4 étapes, pour démarrer
          votre parcours professionnel.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            {/* Ajout de color="primary" ici pour forcer le bleu sur cette section */}
            <StyledAccordion items={etapesConcours} defaultExpandedId="etape-1" color="primary" />

            <Button
              component={RouterLink}
              to="/pre-inscription"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 3, fontWeight: 700 }}
            >
              Je m'inscris
            </Button>
          </Grid>

          {/* Bloc plaquette téléchargeable */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <Box
                component="img"
                src="/images/admission/plaquette-n2vti.jpg"
                alt="Plaquette N2VTI"
                sx={{ width: '100%', display: 'block' }}
              />
              <Button
                href="/documents/plaquette-n2vti.pdf"
                target="_blank"
                rel="noopener"
                fullWidth
                variant="contained"
                color="primary"
                startIcon={<DownloadIcon />}
                sx={{ borderRadius: 0, py: 1.5, fontWeight: 700 }}
              >
                Télécharger la plaquette
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}