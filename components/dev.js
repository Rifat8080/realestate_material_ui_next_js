import React from 'react';
import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { Apple, Android } from '@mui/icons-material';
import Image from 'next/image'; // Add this import for the image

const InfoCardsSection = () => {
  return (
    <Box
      sx={{
        position: 'relative', // Add this to enable absolute positioning for the floating image
        backgroundColor: '#e6f4ff',
        pt: 4,
        px: 4,     
        pb: 4,     
        borderRadius: 4,
        textAlign: 'center',
        width: '80%',
        height: '50vh',
        mt: '25%',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Floating image */}
      <Box
        sx={{
          position: 'absolute',
          top: '-2px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          animation: 'floatTop 6s ease-in-out infinite',
          '@keyframes floatTop': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(-15px)' },
          }
        }}
      >
        <Image 
          src="/Vectorpoint.png" 
          alt="Chart Icon" 
          width={40} 
          height={40}
          style={{ 
            filter: 'drop-shadow(0px 5px 15px rgba(15, 140, 233, 0.3))'
          }}
        />
      </Box>
      
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
        {/* Rest of your existing code... */}
       
               <Card sx={{ borderRadius: 3, maxWidth: 400, p: 2 }}>
          <CardContent sx={{ textAlign: 'left' }}>
            <Box
              sx={{
                background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
                color: 'white',
                width: 48,
                height: 48,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '18px',
                mb: 2,
                ml: 0,
                mr: 'auto', // Align to left instead of center
                boxShadow: '0px 4px 8px rgba(15, 140, 233, 0.3)'
              }}
            >
              01
            </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom align="left">
              For Developer
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom align="left">
              Get access to thousands of agents who are ready to sell your project
            </Typography>
            <Typography variant="h5" fontWeight="bold" mt={2} align="left">
              12350
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              Agents on platform
            </Typography>
          </CardContent>
        </Card>

                {/* Floating image below Card 1 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            left: '25%',
            zIndex: 2,
            animation: 'floatBottom 7s ease-in-out infinite',
            '@keyframes floatBottom': {
              '0%, 100%': { transform: 'rotate(-5deg) translateY(0)' },
              '50%': { transform: 'rotate(5deg) translateY(-10px)' },
            }
          }}
        >
          <Image 
            src="/Vectorg.png" 
            alt="House Icon" 
            width={50} 
            height={50}
            style={{ 
              opacity: 0.7,
              filter: 'drop-shadow(0px 5px 15px rgba(15, 140, 233, 0.3))'
            }}
          />
        </Box>
        
        {/* Card 2 */}
        <Card sx={{ borderRadius: 3, maxWidth: 400, p: 2 }}>
  <CardContent sx={{ textAlign: 'left' }}>
    <Box
      sx={{
        background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
        color: 'white',
        width: 48,
        height: 48,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        mb: 2,
        ml: 0,
        mr: 'auto', // Align to left instead of center
        boxShadow: '0px 4px 8px rgba(15, 140, 233, 0.3)'
      }}
    >
      02
    </Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom align="left">
              For Agents
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom align="left">
              Get access to thousands of agents who are ready to sell your project
            </Typography>
            <Typography variant="h5" fontWeight="bold" mt={2} align="left">
              7530
            </Typography>
            <Typography variant="body2" color="text.secondary" align="left">
              Agents on platform
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Store Buttons */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
                {/* Store Buttons */}
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: '50px',
              backgroundColor: 'black',
              px: 3,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <Image 
              src="/ios.png" 
              alt="Apple Logo" 
              width={20} 
              height={20}
            />
            App Store
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: '50px',
              backgroundColor: 'black',
              px: 3,
              py: 1,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            <Image 
              src="/android.png" 
              alt="Android Logo" 
              width={20} 
              height={20}
            />
            Google Play
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default InfoCardsSection;
