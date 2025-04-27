import { Box, Button, Container, Typography } from '@mui/material';
import { GradientButton } from './navbar';
import Image from 'next/image';

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
      
      {/* Left floating image - next to Real Estate text */}
      <Box
        sx={{
          position: 'absolute',
          left: { xs: '5%', md: '15%' },
          top: '40%',
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }}
      >
        <Image 
          src="/Vector.png" 
          alt="House Icon" 
          width={70} 
          height={70}
          style={{ opacity: 0.8 }}
        />
      </Box>
      
      <Container 
        sx={{ 
          textAlign: 'center', 
          position: 'relative',
          zIndex: 1
        }}
      >
        <Typography 
          variant="subtitle2" 
          sx={{ 
            mb: 2,
            color: '#0195FF',
            backgroundColor: '#E4F3FE',
            border: '1px solid #C8E8FE',
            borderRadius: '100px',
            display: 'inline-block',
            px: 3,
            py: 1,
            fontWeight: 500
          }}
        >
          Business Growth Platform 🚀
        </Typography>
        
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            color: 'black',
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 400,
            lineHeight: 1.3,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          Guaranteed<br />
          <Box component="span" sx={{ color: '#0195FF' }}>Real Estate</Box> Solutions
        </Typography>
        
        <Typography 
          variant="subtitle1" 
          sx={{ mt: 2, mb: 5, color: '#808080' }}
        >
          Need to sell your estate fast? Look no further. With our guaranteed quick sale option.
        </Typography>
        
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <GradientButton 
            size="large" 
            sx={{ 
              mt: 4,
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              borderRadius: '60px !important',
              background: 'linear-gradient(to right, #0F8CE9, #66B3FB) !important',
              boxShadow: '0 4px 10px rgba(15, 140, 233, 0.3)',
            }}
          >
            Get Started
          </GradientButton>
          
          {/* Right floating image - next to button */}
          <Box
            sx={{
              position: 'absolute',
              right: { xs: '-60px', md: '-80px' },
              top: '50%',
              transform: 'translateY(-50%)',
              animation: 'floatRight 5s ease-in-out infinite',
              '@keyframes floatRight': {
                '0%, 100%': { transform: 'translateY(-50%) translateX(0px)' },
                '50%': { transform: 'translateY(-50%) translateX(15px)' },
              }
            }}
          >
            <Image 
              src="/Group.png" 
              alt="Key Icon" 
              width={60} 
              height={60}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}