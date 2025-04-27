import { Box, Button, Container, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, rgba(15, 140, 233, 0.05), rgba(55, 158, 253, 0.3))',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingY: { xs: 8, md: 0 },
        
      }}
    >
      {/* Grid Pattern Overlay */}
          <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundImage: `
          repeating-linear-gradient(to bottom, rgba(128, 128, 128, 0.15) 0px, rgba(128, 128, 128, 0.15) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(to right, rgba(128, 128, 128, 0.15) 0px, rgba(128, 128, 128, 0.15) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: '20px 20px',
        opacity: 0.5,
      }}
    />
      
      <Container 
        sx={{ 
          textAlign: 'center', 
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography 
          variant="subtitle2" 
          sx={{ mb: 2, color: 'rgba(255,255,255,0.8)' }}
        >
          Business Growth Platform 🚀
        </Typography>
        
        <Typography 
          variant="h3" 
          component="h1" 
          fontWeight="bold" 
          sx={{ color: 'white' }}
        >
          Guaranteed <Box component="span" sx={{ color: '#F5BE30' }}>Real Estate</Box> Solutions
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          sx={{ mt: 2, mb: 5, color: 'rgba(255,255,255,0.85)' }}
        >
          Need to sell your estate fast? Look no further. With our guaranteed quick sale option.
        </Typography>
        
        <Button 
          variant="contained"
          size="large" 
          sx={{ 
            mt: 4, 
            bgcolor: '#F5BE30',
            color: '#333',
            '&:hover': {
              bgcolor: '#e4af2b'
            },
            fontWeight: 500,
            px: 4,
            py: 1.5,
            borderRadius: '8px'
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}