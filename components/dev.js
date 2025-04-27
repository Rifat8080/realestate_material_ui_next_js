import React from 'react';
import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { Apple, Android } from '@mui/icons-material';

const InfoCardsSection = () => {
  return (
            <Box
          sx={{
            backgroundColor: '#e6f4ff',
            pt: 4, // Change to 40% top padding
            px: 4,     // Keep horizontal padding
            pb: 4,     // Keep bottom padding
            borderRadius: 4,
            textAlign: 'center',
            width: '80%',
            height: '50vh',
            mt: '25%',
            mx: 'auto', // Add this to center horizontally
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
       
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
        <Button
          variant="contained"
          startIcon={<Apple />}
          sx={{
            borderRadius: '50px',
            backgroundColor: 'black',
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          App Store
        </Button>
        <Button
          variant="contained"
          startIcon={<Android />}
          sx={{
            borderRadius: '50px',
            backgroundColor: 'black',
            px: 3,
            py: 1,
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Google Play
        </Button>
      </Stack>
    </Box>
  );
};

export default InfoCardsSection;
