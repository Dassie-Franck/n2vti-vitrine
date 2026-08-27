import { Box, Container, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { engagements } from '@content/apropos/mission'

function EngagementCard({ titre, image, points }) {
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, height: '100%' }}>
        <Box
          component="img"
          src={image}
          alt={titre}
          sx={{
            width: { xs: '100%', sm: '38%' },
            height: { xs: 200, sm: 'auto' },
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
        <Box sx={{ bgcolor: 'grey.100', p: 3, flexGrow: 1 }}>
          <Typography variant="subtitle1" sx={{ color: 'secondary.main', fontWeight: 700, mb: 1.5 }}>
            {titre}
          </Typography>
          <List dense disablePadding>
            {points.map((point, index) => (
              <ListItem key={index} disableGutters alignItems="flex-start" sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 24, mt: 0.7 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 8, color: 'secondary.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={point}
                  primaryTypographyProps={{ variant: 'body2', color: 'text.secondary', lineHeight: 1.6 }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Grid>
  )
}

export default function EngagementsSection() {
  return (
    <Box sx={{ py: { xs: 5, md: 6 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {engagements.map((engagement) => (
            <EngagementCard key={engagement.id} {...engagement} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}