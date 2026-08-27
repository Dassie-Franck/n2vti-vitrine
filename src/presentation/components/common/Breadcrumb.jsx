import { Breadcrumbs, Link as MuiLink, Typography, Container, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

// items: [{ label: 'Accueil', path: '/' }, { label: 'Formations', path: '/formations' }, { label: 'Auxiliaire de vie' }]
export default function Breadcrumb({ items }) {
  return (
    <Box sx={{ py: 2, bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          {items.map((item, index) =>
            item.path ? (
              <MuiLink key={index} component={Link} to={item.path} underline="hover" color="text.secondary">
                {item.label}
              </MuiLink>
            ) : (
              <Typography key={index} color="secondary.main" fontWeight={600}>
                {item.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Container>
    </Box>
  )
}