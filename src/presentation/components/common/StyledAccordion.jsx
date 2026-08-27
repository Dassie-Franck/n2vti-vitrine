import { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import StarIcon from '@mui/icons-material/StarBorder'

// items: [{ id, titre, contenu }]
// color: 'primary' (bleu) ou 'secondary' (rouge) selon la section
export default function StyledAccordion({ items, defaultExpandedId = null, color = 'secondary' }) {
  const [expanded, setExpanded] = useState(defaultExpandedId)

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : null)
  }

  // Détermine la nuance sombre selon la couleur choisie (primary.dark ou secondary.dark)
  const headerBgColor = color === 'primary' ? 'primary.dark' : 'secondary.dark'

  return (
    <Box>
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
          disableGutters
          elevation={0}
          sx={{
            mb: '2px',
            '&:before': { display: 'none' },
            border: '1px solid',
            borderColor: 'divider',
          }}
        >
          <AccordionSummary
            expandIcon={expanded === item.id ? <RemoveIcon sx={{ color: 'white' }} /> : <AddIcon sx={{ color: 'white' }} />}
            sx={{
              bgcolor: headerBgColor, // S'adapte dynamiquement (bleu ou rouge)
              color: 'white',
              px: 3,
              py: 0.5,
              minHeight: 56,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <StarIcon sx={{ fontSize: 18, opacity: 0.8 }} />
              <Typography sx={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: 0.5 }}>
                {item.titre.toUpperCase()}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: 'background.paper',
              color: 'text.primary',
              px: 3,
              py: 2.5,
            }}
          >
            <Typography variant="body2" sx={{ lineHeight: 1.8, color: 'text.primary' }}>
              {item.contenu}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}