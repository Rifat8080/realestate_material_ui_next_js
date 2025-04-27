import React from 'react';
import { Box, Typography, Grid, Paper, Button, Chip, Container } from '@mui/material';
import Image from 'next/image'; // Add this import for the image

const features = [
  "Properties",
  "Luxury Asset",
  "Market Insights",
  "Marketing Tool",
  "Professional Service",
  "Networking & Event",
  "Education & Resource",
  "Referral & Reward",
];

const RealEstateFeature = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ 
  py: { xs: 4, md: 8 }, 
  px: { xs: 1, sm: 2, md: 4 }, 
  mx: '5%',

  bgcolor: 'white',
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: { sm: 'space-between' }, // Add space-between on larger screens
  alignItems: { sm: 'center' }, // Keep content vertically centered
  gap: { xs: 4 } // Only keep gap for mobile view
}}>
        {/* Left Side */}
        <Box sx={{ 
    flex: { sm: '0 1 45%', md: '0 1 42%' }, // Adjust flex basis to allow space between
    width: { xs: '100%' },
    order: { xs: 2, sm: 1 }
  }}>
          <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom
            sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
            Explore Our Exclusive <Box component="span" color="#3595ff">Real Estate</Box> Feature
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            A Real Estate Feature Sheet Is A List Of Features And Updates For Your Seller's Home. 
            The Multiple Listing Services (MLS) Has A Lot Of Great Information Already Built In 
            But Having A Feature Sheet Can Help Your Sellers Showcase Their Home In A More Personal Way.
          </Typography>

          {/* Two groups of features side by side */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}>
                     {/* Left Group - First 4 features */}
            <Box sx={{ flex: 1 }}>
              {features.slice(0, 4).map((feature, index) => (
                <Box display="flex" alignItems="center" gap={1.5} mb={2} key={index}>
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
                      fontSize: '16px',
                      boxShadow: '0px 4px 8px rgba(15, 140, 233, 0.3)'
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Box>
                  <Typography variant="body1" fontWeight="bold" noWrap>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            {/* Right Group - Last 4 features */}
                       {/* Right Group - Last 4 features */}
            <Box sx={{ flex: 1 }}>
              {features.slice(4).map((feature, index) => (
                <Box display="flex" alignItems="center" gap={1.5} mb={2} key={index + 4}>
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
                      fontSize: '16px',
                      boxShadow: '0px 4px 8px rgba(15, 140, 233, 0.3)'
                    }}
                  >
                    {String(index + 5).padStart(2, '0')}
                  </Box>
                  <Typography variant="body1" fontWeight="bold" noWrap>
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right Side - Image */}
        <Box sx={{ 
    flex: { sm: '0 1 45%', md: '0 1 42%' }, // Adjust flex basis to allow space between
    width: { xs: '100%' },
    order: { xs: 1, sm: 2 },
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
          <Box 
            sx={{ 
              width: '100%', 
              height: '100%',
              minHeight: '300px',
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Image 
              src="/agent.png" 
              alt="Real Estate Property" 
                width={500}
                height={500}
              priority
              style={{ borderRadius: '16px' }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RealEstateFeature;