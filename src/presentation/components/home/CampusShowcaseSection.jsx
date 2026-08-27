import { useEffect, useState } from 'react'
import { Box, Container, Typography, Button, Stack, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School'
import ScienceIcon from '@mui/icons-material/Science'
import GroupsIcon from '@mui/icons-material/Groups'
import SecurityIcon from '@mui/icons-material/Security'
import { container } from '@infrastructure/container'

const highlights = [
  { icon: SchoolIcon, texte: "Des formations pluridisciplinaires où l'apprenant allie théorie et pratique, savoir-faire et savoir-être" },
  { icon: ScienceIcon, texte: 'Des laboratoires et ateliers équipés, pour simuler les réalités du terrain professionnel' },
  { icon: GroupsIcon, texte: "Des clubs associatifs et des espaces de vie diversifiés pour l'épanouissement des apprenants" },
  { icon: SecurityIcon, texte: 'Des campus sécurisés et facilement accessibles à Yaoundé' },
]

// Composant pour faire défiler plusieurs images en fondu
function SlidingImageCard({ images = [], campusSlug, navigate }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images])

  return (
    <Box
      onClick={() => navigate(`/campus/${campusSlug}`)}
      sx={{
        height: '100%',
        minHeight: { xs: '280px', md: 'auto' },
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {images.map((imgObj, idx) => {
        const imageUrl = typeof imgObj === 'string' ? imgObj : imgObj?.image
        return (
          <Box
            key={idx}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === currentIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        )
      })}
    </Box>
  )
}

function GalerieCard({ item, campusSlug, variant, navigate }) {
  const isTextCard = variant === 'text'

  if (isTextCard) {
    return (
      <Box
        onClick={() => navigate(`/campus/${campusSlug}`)}
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          p: { xs: 3, md: 4 },
          height: '100%',
          minHeight: { xs: '280px', md: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          cursor: 'pointer',
          '&:hover': { bgcolor: 'secondary.dark' },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.3, fontSize: { xs: '1.05rem', md: '1.25rem' } }}>
          {item.titre}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9, mb: 3, lineHeight: 1.5 }}>
          {item.description}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{ alignSelf: 'flex-start', color: 'white', borderColor: 'white', fontWeight: 700 }}
        >
          En savoir +
        </Button>
      </Box>
    )
  }

  const imageList = Array.isArray(item.images) && item.images.length > 0 ? item.images : [item.image]

  return <SlidingImageCard images={imageList} campusSlug={campusSlug} navigate={navigate} />
}

export default function CampusShowcaseSection() {
  const navigate = useNavigate()
  const [campusList, setCampusList] = useState([])

  useEffect(() => {
    container.campus.listerCampus.execute().then(setCampusList)
  }, [])

  const campusVedette = campusList.find((c) => c.galerie?.length > 0) || campusList[0]
  const galerie = campusVedette?.galerie || []

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          
          {/* Colonne gauche : texte + points forts */}
          <Box sx={{ width: { xs: '100%', md: '42%' } }}>
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 1.5 }}>
              NOS CAMPUS
            </Typography>
            <Typography variant="h4" sx={{ color: 'warning.main', fontWeight: 800, my: 2, lineHeight: 1.3, fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
              Des espaces propices à l'apprentissage et à l'épanouissement
            </Typography>

            <Stack spacing={2.5} sx={{ mt: 3 }}>
              {highlights.map(({ icon: Icon, texte }, index) => (
                <Stack direction="row" spacing={2} alignItems="flex-start" key={index}>
                  <Avatar sx={{ bgcolor: 'secondary.dark', width: 40, height: 40, flexShrink: 0 }}>
                    <Icon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Typography variant="body2" sx={{ pt: 0.5 }}>
                    {texte}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Colonne droite : Grille agrandie et sans bordures */}
          <Box sx={{ width: { xs: '100%', md: '58%' } }}>
            {galerie.length >= 2 ? (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  // Hauteur augmentée à 290px par ligne sur PC pour un meilleur confort visuel des images
                  gridTemplateRows: { xs: 'auto', md: '290px 290px' },
                  gap: 0, // Suppression de l'espace entre les blocs
                  borderRadius: 0, // Suppression des arrondis extérieurs
                  overflow: 'hidden',
                }}
              >
                <GalerieCard item={galerie[0]} campusSlug={campusVedette.slug} variant="text" navigate={navigate} />
                <GalerieCard item={galerie[0]} campusSlug={campusVedette.slug} variant="image" navigate={navigate} />
                <GalerieCard item={galerie[1]} campusSlug={campusVedette.slug} variant="image" navigate={navigate} />
                <GalerieCard item={galerie[1]} campusSlug={campusVedette.slug} variant="text" navigate={navigate} />
              </Box>
            ) : (
              <Typography color="text.secondary" align="center" sx={{ py: 8 }}>
                Galerie du campus à venir.
              </Typography>
            )}
          </Box>

        </Box>
      </Container>
    </Box>
  )
}