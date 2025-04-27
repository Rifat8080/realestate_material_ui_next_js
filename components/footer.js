import React from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Box, 
  Link, 
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ position: 'relative', mt: 15 }}>
      {/* Floating Image */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          zIndex: 2,
          width: { xs: '280px', sm: '350px', md: '1200px' },
          height: { xs: '140px', sm: '175px', md: '200px' },
        }}
      >
        <Image
          src="/footer_image.png" 
          alt="Real Estate Services"
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Footer Content */}
      <Box sx={{ 
        bgcolor: '#000000', 
        color: 'white',
        pt: { xs: 12, sm: 14, md: 16 }, // Extra padding top for the floating image
        pb: 6
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}> {/* Increased spacing from default to 8 */}
            {/* Left Section - Logo and Description */}
            <Grid item xs={12} md={3.5}> {/* Slightly reduced width */}
              <Box sx={{ mb: 3 }}>
                <Image
                  src="/logo-white.png"
                  alt="Company Logo"
                  width={180}
                  height={60}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ mb: 3, color: '#aaaaaa', maxWidth: 300 }}>
                We provide exceptional real estate services with a commitment 
                to excellence, integrity, and client satisfaction in every transaction.
              </Typography>
            </Grid>

            {/* Vertical Divider for medium and larger screens */}
            {!isMedium && (
              <Grid item>
                <Divider orientation="vertical" sx={{ height: '100%', borderColor: '#333' }} />
              </Grid>
            )}

            {/* Middle Section - 4 Columns of Links */}
            <Grid item container xs={12} md={8} spacing={3}> {/* Increased inner spacing */}
              {/* Column 1 */}
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Properties
                </Typography>
                <Stack spacing={1.5}>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Homes for Sale
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Apartments
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Commercial
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Luxury Estates
                  </Link>
                </Stack>
              </Grid>

              {/* Column 2 */}
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Services
                </Typography>
                <Stack spacing={1.5}>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Buying
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Selling
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Renting
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Investment
                  </Link>
                </Stack>
              </Grid>

              {/* Column 3 */}
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Company
                </Typography>
                <Stack spacing={1.5}>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    About Us
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Our Team
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Careers
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Testimonials
                  </Link>
                </Stack>
              </Grid>

              {/* Column 4 */}
              <Grid item xs={6} sm={3}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Resources
                </Typography>
                <Stack spacing={1.5}>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Blog
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Market Reports
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    Guides
                  </Link>
                  <Link href="#" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: '#3595ff' } }}>
                    FAQ
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Bottom Section - Divider, Copyright, and Social Links */}
          <Box sx={{ 
            mt: 6, 
            pt: 3, 
            borderTop: '1px solid #333333',
            display: 'flex',
            flexDirection: isMedium ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMedium ? 'center' : 'flex-start',
            gap: 2
          }}>
            {/* Copyright */}
            <Typography variant="body2" color="#aaaaaa">
              © {new Date().getFullYear()} Real Estate Company. All rights reserved.
            </Typography>

            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                aria-label="Facebook" 
                sx={{ color: 'white', '&:hover': { color: '#3595ff' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                aria-label="Twitter" 
                sx={{ color: 'white', '&:hover': { color: '#3595ff' } }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                aria-label="Instagram" 
                sx={{ color: 'white', '&:hover': { color: '#3595ff' } }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                aria-label="LinkedIn" 
                sx={{ color: 'white', '&:hover': { color: '#3595ff' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                aria-label="YouTube" 
                sx={{ color: 'white', '&:hover': { color: '#3595ff' } }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;