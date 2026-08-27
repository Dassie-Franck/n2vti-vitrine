import { Card, CardActionArea, CardMedia, CardContent, Box, Typography, Chip } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { DOMAINES, DOMAINES_META } from '../../../constants/domaines'

export default function FormationCard({ formation }) {
  if (!formation) return null
  const meta = DOMAINES_META[formation.domaineId] || DOMAINES_META.default
  const Icon = meta.Icon

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 24px rgba(0,0,0,0.15)' },
        '&:hover .formation-card-cta': { gap: '10px', color: meta.color },
        '&:hover .formation-card-media': { transform: 'scale(1.06)' },
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/formations/${formation.slug}`}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100%' }}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden', height: 160, flexShrink: 0 }}>
          <CardMedia
            component="img"
            image={formation.image}
            alt={formation.titre}
            className="formation-card-media"
            sx={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.55) 100%)' }} />
          <Chip
            size="small"
            icon={<Icon sx={{ color: '#fff !important', fontSize: 16 }} />}
            label={meta.label}
            sx={{
              position: 'absolute', top: 12, left: 12,
              bgcolor: meta.color, color: '#fff', fontWeight: 700, fontSize: '0.7rem',
            }}
          />
        </Box>
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.3, mb: 1, minHeight: '2.6em' }}>
            {formation.titre}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
          >
            {formation.description}
          </Typography>
          <Box
            className="formation-card-cta"
            sx={{ display: 'flex', alignItems: 'center', gap: '4px', mt: 2, fontWeight: 700, fontSize: '0.85rem', color: 'text.primary', transition: 'gap 0.2s ease, color 0.2s ease' }}
          >
            En savoir plus <ArrowForwardIcon sx={{ fontSize: 18 }} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}