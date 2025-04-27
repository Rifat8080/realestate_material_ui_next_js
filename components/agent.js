import React from 'react';
import { Box, Typography, Grid, Paper, Button, Chip, Container, Stack } from '@mui/material';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SecurityIcon from '@mui/icons-material/Security';

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



// Rest of your imports and features array...

const RealEstateServices = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      {/* Section Title */}
      <Typography 
        variant="h4" 
        component="h2" 
        fontWeight="bold" 
        textAlign="center" 
        gutterBottom
        sx={{ mb: 5 }}
      >
        DISCOVER THE <br></br>PERFECT <Box component="span" color="#3595ff">PROPERTIES</Box> WITH EASE
      </Typography>
      
      {/* Two-column layout */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: 4,
        mx: '5%'
      }}>
        {/* Left column: Three icons with text in column */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 3
        }}>
          {/* First item: Clock icon */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            gap: 2,
          }}>
            <Box sx={{
              background: 'white',
              color: 'black',
              width: 50,
              height: 50,
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
              flexShrink: 0
            }}>
              <AccessTimeIcon sx={{ fontSize: 25 }} />
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Ready to Move In
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Properties that are immediately available for occupancy with all necessary amenities.
              </Typography>
            </Box>
          </Box>
          
          {/* Second item: Home icon */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            gap: 2,
          }}>
            <Box sx={{
              background: 'white',
              color: 'black',
              width: 50,
              height: 50,
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
              flexShrink: 0
            }}>
              <HomeIcon sx={{ fontSize: 25 }} />
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              OFF-PLAN PROPERTIES
              </Typography>
              <Typography variant="body2" color="text.secondary">
              OFF-PLAN PROPERTIES REFER TO REAL ESTATE UNITS THAT ARE BEING CONSTRUCTED OR DEVELOPED, BUT HAVE NOT YET BEEN COMPLETED OR OCCUPIED.              </Typography>
            </Box>
          </Box>
          
          {/* Third item: Location icon */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            gap: 2,
          }}>
            <Box sx={{
              background: 'white',
              color: 'black',
              width: 50,
              height: 50,
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
              flexShrink: 0
            }}>
              <VerifiedUserIcon sx={{ fontSize: 25 }} />
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              SECONDARY MARKET              </Typography>
              <Typography variant="body2" color="text.secondary">
              THE SECONDARY MARKET IN REAL ESTATE REFERS TO THE EXISTING POOL OF HOMES, COMMERCIAL PROPERTIES, AND OTHER TYPES OF PROPERTIES THAT ARE ALREADY BUILT AND OCCUPIED.              </Typography>
           
            </Box>
            
          </Box>
                         <Button 
              variant="contained" 
              disableElevation
              sx={{ 
                mt: 2, 
                ml: { xs: 0, sm: 8 },
                alignSelf: 'flex-start',
                background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
                color: 'white',
                boxShadow: '0px 4px 8px rgba(15, 140, 233, 0.3)',
                borderRadius: '25px',
                px: 3,
                py: 1,
                fontWeight: 'medium',
                border: 'none',
                '&:hover': {
                  background: 'linear-gradient(to right, #0c7dcf, #5ba1f8)',
                  boxShadow: '0px 6px 10px rgba(15, 140, 233, 0.4)',
                }
              }}
            >
              View All Features
            </Button>
        </Box>
        
        {/* Right column: Image (unchanged) */}
        <Box sx={{
          flex: 1,
          height: { xs: '300px', md: '400px' },
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)'
        }}>
          <Image
            src="/building.png" 
            alt="Property Management"
            fill
            style={{ 
              objectFit: 'cover',
              borderRadius: '16px'
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};



// Existing components here...

// New Assets component with flipped layout
const RealEstateAssets = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 8, mb: 8 }}>
      {/* Section Title */}
        {/* Section Title */}
    <Typography 
      variant="h4" 
      component="h2" 
      fontWeight="bold" 
      textAlign="center" 
      gutterBottom
      sx={{ mb: 2 }} // Reduced bottom margin to accommodate description
    >
      Luxury <Box component="span" color="#3595ff">ASSETS</Box> 
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
        LUXURY ASSETS, PARTICULARLY IN THE REALM OF REAL ESTATE, REFER TO HIGH-END PROPERTIES THAT ARE VALUED FOR THEIR EXCLUSIVITY, LOCATION, DESIGN, AND AMENITIES.
    </Typography>
      
      {/* Two-column layout - FLIPPED */}
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: 4,
        mx: '5%'
      }}>
        {/* Left column: Image (now first) */}
        <Box sx={{
          flex: 1,
          height: { xs: '300px', md: '400px' },
          position: 'relative',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.12)',
          order: { xs: 1, md: 1 } // Ensure it stays first on mobile too
        }}>
          <Image
            src="/car.png" 
            alt="Luxury Real Estate Assets"
            fill
            style={{ 
              objectFit: 'cover',
              borderRadius: '16px'
            }}
          />
        </Box>
        
        {/* Right column: Three icons with text in column (now second) */}
        <Box sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          order: { xs: 2, md: 2 }
        }}>
          {/* First item: Money icon */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            gap: 2,
          }}>
            <Box sx={{
              background: 'white',
              color: 'black',
              width: 50,
              height: 50,
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
              flexShrink: 0
            }}>
              <AttachMoneyIcon sx={{ fontSize: 25 }} />
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              YACHTS
              </Typography>
              <Typography variant="body2" color="text.secondary">
              THE INTERSECTION OF REAL ESTATE AND YACHTS! YOU’VE GOT A UNIQUE INTEREST THERE. LUXURY REAL ESTATE CAN INDEED INVOLVE PROPERTIES WITH DIRECT ACCESS TO MARINAS, WATERFRONTS, OR EVEN PRIVATE YACHT MOORING FACILITIES.              </Typography>
            </Box>
          </Box>
          
          {/* Second item: Apartment icon */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center', 
            gap: 2,
          }}>
            <Box sx={{
              background: 'white',
              color: 'black',
              width: 50,
              height: 50,
              borderRadius: '30%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.15)',
              flexShrink: 0
            }}>
              <ApartmentIcon sx={{ fontSize: 25 }} />
            </Box>
            
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              CARS              </Typography>
              <Typography variant="body2" color="text.secondary">
              LUXURY CARS REFER TO HIGH-END VEHICLES THAT OFFER SUPERIOR PERFORMANCE, AESTHETICS, AND AMENITIES. THESE CARS ARE TYPICALLY MANUFACTURED BY PRESTIGIOUS BRANDS SUCH AS MERCEDES-BENZ, AUDI, AND ARE KNOWN FOR THEIR UNIQUE FEATURES, COMFORT, AND STYLE.              </Typography>
            </Box>
          </Box>
          
          
          <Button 
            variant="contained" 
            disableElevation
            sx={{ 
              mt: 2, 
              ml: { xs: 0, sm: 8 },
              alignSelf: 'flex-start',
              background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
              color: 'white',
              boxShadow: '0px 4px 8px rgba(15, 140, 233, 0.3)',
              borderRadius: '25px',
              px: 3,
              py: 1,
              fontWeight: 'medium',
              border: 'none',
              '&:hover': {
                background: 'linear-gradient(to right, #0c7dcf, #5ba1f8)',
                boxShadow: '0px 6px 10px rgba(15, 140, 233, 0.4)',
              }
            }}
          >
            Explose More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

// Export all components
export { RealEstateFeature, RealEstateServices, RealEstateAssets };
export default RealEstateFeature;
