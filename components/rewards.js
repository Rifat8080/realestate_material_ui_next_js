import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import Image from 'next/image';

const RewardsSection = () => {
  // Array of reward items with titles and image paths (removed descriptions)
  const rewardItems = [
    {
      title: "Referral Bonuses",
      image: "/rewards-1.png"
    },
    {
      title: "Loyalty Points",
      image: "/rewards-2.png"
    },
    {
      title: "VIP Access",
      image: "/winner.png"
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      {/* Section Title */}
      <Typography 
        variant="h4" 
        component="h2" 
        fontWeight="bold" 
        textAlign="center" 
        gutterBottom
        sx={{ mb: 2 }}
      >
        Our Exclusive <Box component="span" color="#3595ff">Reward</Box> Programs
      </Typography>
      
      {/* Description */}
      <Typography 
        variant="body1" 
        color="text.secondary" 
        textAlign="center"
        sx={{ 
          mb: 5, 
          maxWidth: '800px',
          mx: 'auto'
        }}
      >
        Join our rewards program and unlock a world of benefits designed to appreciate your loyalty and enhance your real estate experience with exclusive perks and opportunities.
      </Typography>
      
      {/* Horizontal scrollable row of cards - centered */}
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          pb: 2,
          mx: '2%',
          justifyContent: 'center', // Center the content horizontally
          '&::-webkit-scrollbar': {
            height: 8,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
            borderRadius: 10,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#c1c1c1',
            borderRadius: 10,
          }
        }}
      >
        <Stack 
          direction="row" 
          spacing={5}
          sx={{ 
            py: 1,
            minWidth: 'min-content',
            justifyContent: 'center', // Center items in the Stack
          }}
        >
          {rewardItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: { xs: '280px', md: '350px' },
                minWidth: { xs: '280px', md: '350px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center content within each card
                gap: 2
              }}
            >
              {/* Title - centered */}
              <Typography 
                variant="h5" 
                component="h3" 
                fontWeight="bold" 
                textAlign="left" // Center the title text
                sx={{ width: '100%' }} // Ensure full width for proper centering
              >
                {item.title}
              </Typography>
              
              {/* Image with border radius */}
              <Box 
                sx={{ 
                  position: 'relative',
                  height: 350,
                  width: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)'
                }}
              >
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default RewardsSection;