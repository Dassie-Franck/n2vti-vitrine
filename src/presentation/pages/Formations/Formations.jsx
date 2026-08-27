import { useEffect, useState } from 'react'
import { Box, Container, Typography, Chip, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '@presentation/components/common/Breadcrumb'
import PageHeroBanner from '@presentation/components/common/PageHeroBanner'
import FormationCard from '@presentation/components/formations/FormationCard'
import { container } from '@infrastructure/container'
import { DOMAINES, DOMAINES_META } from '../../../constants/domaines'

export default function Formations() {
  const [searchParams, setSearchParams] = useSearchParams()
  const domaineActif = searchParams.get('domaine') || 'tous'
  const [formations, setFormations] = useState([])
  const [chargement, setChargement] = useState(true)

  useEffect(() => {
    setChargement(true)
    if (container?.formations?.filtrerParDomaine?.execute) {
      container.formations.filtrerParDomaine.execute(domaineActif)
        .then((data) => setFormations(Array.isArray(data) ? data : []))
        .catch(() => setFormations([]))
        .finally(() => setChargement(false))
    } else {
      setChargement(false)
    }
  }, [domaineActif])

  const handleDomaineChange = (value) => {
    if (value === 'tous') {
      searchParams.delete('domaine')
    } else {
      searchParams.set('domaine', value)
    }
    setSearchParams(searchParams)
  }

  return (
    <Box sx={{ pb: 8 }}>
      <PageHeroBanner image="/assets/banners/formation.jpg" />
      <Breadcrumb items={[{ label: 'Accueil', path: '/' }, { label: 'Formation' }]} />
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
            CHOISIR SA FORMATION
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
            Nos filières
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mb: 4 }} />

          {/* Filtres version Mobile (Select) */}
          <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
            <FormControl fullWidth size="medium">
              <InputLabel id="domaine-select-label">Filtrer par domaine</InputLabel>
              <Select
                labelId="domaine-select-label"
                value={domaineActif}
                label="Filtrer par domaine"
                onChange={(e) => handleDomaineChange(e.target.value)}
                sx={{ bgcolor: 'background.paper', fontWeight: 600 }}
              >
                {DOMAINES.map((d) => (
                  <MenuItem key={d.value} value={d.value}>{d.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Filtres version Desktop (Chips) */}
          <Stack direction="row" spacing={1} sx={{ mb: 6, display: { xs: 'none', md: 'flex' }, flexWrap: 'wrap' }}>
            {DOMAINES.map((d) => {
              const meta = DOMAINES_META[d.value]
              const actif = domaineActif === d.value
              return (
                <Chip
                  key={d.value}
                  label={d.label}
                  onClick={() => handleDomaineChange(d.value)}
                  variant={actif ? 'filled' : 'outlined'}
                  sx={{
                    fontWeight: 600,
                    cursor: 'pointer',
                    mb: 1,
                    bgcolor: actif ? (meta?.color || 'secondary.main') : 'transparent',
                    borderColor: meta?.color || 'secondary.main',
                    color: actif ? '#fff' : (meta?.color || 'text.primary'),
                    '&:hover': { bgcolor: actif ? meta?.color : 'action.hover' },
                  }}
                />
              )
            })}
          </Stack>

          {/* Grille forcée exactement à 3 colonnes sur bureau */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)', // 3 colonnes fixes par ligne
              },
              gap: 3,
            }}
          >
            {!chargement && Array.isArray(formations) && formations.map((formation, index) => {
              if (!formation) return null
              return (
                <Box key={formation.slug ? `${formation.slug}-${index}` : index} sx={{ width: '100%' }}>
                  <FormationCard formation={formation} />
                </Box>
              )
            })}
            {!chargement && (!formations || formations.length === 0) && (
              <Box sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 6 }}>
                <Typography color="text.secondary">
                  Aucune formation trouvée pour ce domaine.
                </Typography>
              </Box>
            )}
          </Box>
        </Container>
      </Box>
    </Box>
  )
}