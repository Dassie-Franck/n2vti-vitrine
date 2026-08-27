import { Box } from '@mui/material'

export default function InfiniteMarquee({ speed = 28, children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        '&:hover .marquee-track': {
          animationPlayState: 'paused',
        },
      }}
    >
      <Box
        className="marquee-track"
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `scrollMarquee ${speed}s linear infinite`,
          '@keyframes scrollMarquee': {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        }}
      >
        {/* Premier bloc d'éléments originaux */}
        <Box sx={{ display: 'flex', flexShrink: 0 }}>{children}</Box>
        {/* Copie transparente adjacente pour assurer la boucle sans aucune coupure */}
        <Box sx={{ display: 'flex', flexShrink: 0 }} aria-hidden="true">
          {children}
        </Box>
      </Box>
    </Box>
  )
}