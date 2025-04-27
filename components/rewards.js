import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import Image from 'next/image';

const RewardsSection = () => {
  // Updated reward items - first and second cards have two images each
  const rewardItems = [
    {
      title: "Overview",
      images: ["/1st.png", "/2nd.png"] 
    },
    {
      title: "Referrel Points",
      images: ["/1.png", "/2.png"] 
    },
    {
      title: "The game prize",
      image: "/winner.png"
    }
  ];

  return (
    <>
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
            justifyContent: 'center',
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
              justifyContent: 'center',
            }}
          >
            {rewardItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '280px', sm: '320px', md: '350px' },
                  minWidth: { xs: '280px', sm: '320px', md: '350px' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                {/* Title */}
                <Typography 
                  variant="h5" 
                  component="h3" 
                  fontWeight="bold" 
                  textAlign="left"
                  sx={{ width: '100%' }}
                >
                  {item.title}
                </Typography>
                
                {/* Conditional rendering based on whether item has single image or multiple images */}
                {(index === 0 || index === 1) ? (
                  // First and second cards with two images in column
                  <Box 
                    sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2,
                      width: '100%'
                    }}
                  >
                    {/* First image */}
                    <Box 
                      sx={{ 
                        position: 'relative',
                        paddingTop: '56.25%', // 16:9 aspect ratio
                        width: '100%',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <Image 
                        src={item.images[0]} 
                        alt={`${item.title} - Image 1`}
                        fill
                        sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 350px"
                        quality={90}
                        style={{ 
                          objectFit: 'contain',
                          borderRadius: '12px',
                        }}
                        loading="eager"
                      />
                    </Box>
                    
                    {/* Second image */}
                    <Box 
                      sx={{ 
                        position: 'relative',
                        paddingTop: '56.25%', // 16:9 aspect ratio
                        width: '100%',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      <Image 
                        src={item.images[1]} 
                        alt={`${item.title} - Image 2`}
                        fill
                        sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 350px"
                        quality={90}
                        style={{ 
                          objectFit: 'contain',
                          borderRadius: '12px',
                        }}
                        loading="eager"
                      />
                    </Box>
                  </Box>
                ) : (
                  // Standard single image for third card
                  <Box 
                    sx={{ 
                      position: 'relative',
                      paddingTop: '112.5%', // Taller aspect ratio for single image
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
                      sizes="(max-width: 600px) 280px, (max-width: 900px) 320px, 350px"
                      quality={90}
                      style={{ 
                        objectFit: 'contain',
                        borderRadius: '12px',
                      }}
                      loading="eager"
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Full-width image section after rewards */}
            {/* Full-width image section after rewards */}
      <Box 
        sx={{ 
          width: '100%', 
          position: 'relative',
          height: { xs: '300px', sm: '400px', md: '500px' },
          mt: 4,
          mb: 4,
          background: 'transparent', // Explicitly set transparent background
          overflow: 'hidden',
        }}
      >
        <Image 
          src="/about.png" 
          alt="Rewards Program Banner"
          fill
          priority
          sizes="100vw"
          quality={100}
          style={{ 
            objectFit: 'contain', // Changed from 'cover' to 'contain' to preserve aspect ratio
            objectPosition: 'center',
            maxHeight: '100%',
            maxWidth: '100%'
          }}
        />
        <Box 
          sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            p: { xs: 2, sm: 3, md: 4 },
            color: 'white',
          }}
        >
        </Box>
      </Box>
         
       
    </>
  );
};

export default RewardsSection;