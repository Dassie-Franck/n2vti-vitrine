import { Box, Typography } from '@mui/material'

export default function MembreCard({ nom, poste, email }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 700,
          display: 'inline-block',
          borderBottom: '2px solid',
          borderColor: 'secondary.main',
          pb: 0.3,
          mb: 1,
        }}
      >
        {nom}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 600, mt: 0.5 }}>
        {poste}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Email : {email}
      </Typography>
    </Box>
  )
}