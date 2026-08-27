import { Box } from '@mui/material'

export default function PageHeroBanner({ image, height = 280 }) {
  return (
    <Box
      sx={{
        width: '100%',
        height,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}