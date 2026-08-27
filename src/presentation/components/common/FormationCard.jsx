import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Box, 
  Chip, 
  Stack 
} from '@mui/material';
import { 
  AccessTime as AccessTimeIcon, 
  School as SchoolIcon, 
  AttachMoney as AttachMoneyIcon, 
  ArrowForward as ArrowForwardIcon 
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

export const FormationCard = ({ formation }) => {
  return (
    <Card 
      elevation={2}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: 8,
        }
      }}
    >
      {/* Image de la formation */}
      {formation.image && (
        <CardMedia
          component="img"
          height="180"
          image={formation.image}
          alt={formation.titre}
          sx={{ objectFit: 'cover' }}
        />
      )}

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Badge du Domaine & Diplôme */}
        <Stack direction="row" spacing={1} mb={2} flexWrap="wrap" useFlexGap>
          <Chip 
            label={formation.domaine.toUpperCase()} 
            size="small" 
            color="primary" 
            variant="outlined"
            sx={{ fontWeight: 600, fontSize: '0.7rem' }}
          />
          <Chip 
            label={formation.diplome} 
            size="small" 
            color="secondary"
            sx={{ fontWeight: 700, fontSize: '0.7rem' }}
          />
        </Stack>

        {/* Titre de la formation */}
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700, lineHeight: 1.3 }}>
          {formation.titre}
        </Typography>

        {/* Description courte */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {formation.description}
        </Typography>

        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2, mt: 'auto' }}>
          {/* Durée et Niveau */}
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <AccessTimeIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                {formation.duree.toString()}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <SchoolIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary" fontWeight={500}>
                Niveau : {formation.niveauRequis.toString()}
              </Typography>
            </Box>
          </Stack>

          {/* Tarif */}
          <Box display="flex" alignItems="center" gap={0.5} mt={1}>
            <AttachMoneyIcon fontSize="small" color="primary" />
            <Typography variant="subtitle2" color="primary.main" fontWeight={700}>
              {formation.tarif.toString()}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      {/* Action / Lien vers le détail */}
      <CardActions sx={{ p: 3, pt: 0 }}>
        <Button 
          component={RouterLink}
          to={`/formations/${formation.slug}`}
          variant="contained" 
          fullWidth
          endIcon={<ArrowForwardIcon />}
          sx={{ 
            textTransform: 'none', 
            fontWeight: 600,
            borderRadius: 2,
            py: 1
          }}
        >
          Découvrir le programme
        </Button>
      </CardActions>
    </Card>
  );
};