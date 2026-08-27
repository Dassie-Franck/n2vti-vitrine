import { Box, Typography } from '@mui/material'

export default function AProposHeader() {
  return (
    <Box sx={{ py: 4, textAlign: 'center' }}>
      <Typography variant="h3" sx={{ fontWeight: 800 }}>
        Institut{' '}
        <Box component="span" sx={{ color: 'secondary.main' }}>
          N2VTI
        </Box>
      </Typography>
      <Box sx={{ width: 60, height: 4, bgcolor: 'secondary.main', mx: 'auto', mt: 1.5 }} />
    </Box>
  )
}