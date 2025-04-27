import * as React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Tabs, 
  Tab, 
  Button, 
  Box,
  useScrollTrigger,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// ===== CONSTANTS =====
const BREAKPOINT = 'md'; // Centralized breakpoint definition

// ===== REUSABLE STYLES =====
const styles = {
  blueGradient: {
    background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
    boxShadow: '0 4px 10px rgba(15, 140, 233, 0.3)',
    '&:hover': {
      background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
      opacity: 0.9,
      boxShadow: '0 6px 12px rgba(15, 140, 233, 0.4)',
    }
  },
  yellowButton: {
    background: '#F5BE30',
    '&:hover': {
      background: '#F5BE30',
      opacity: 0.9,
    },
    borderRadius: '18px',
    boxShadow: '0 4px 10px rgba(245, 190, 48, 0.3)',
  },
  outlinedGradient: {
    position: 'relative',
    borderRadius: '18px',
    border: 'none',
    color: '#0F8CE9',
    backgroundColor: 'transparent',
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      borderRadius: '18px',
      padding: '2px',
      background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
    },
    '&:hover': {
      border: 'none',
      backgroundColor: 'rgba(15, 140, 233, 0.08)',
      boxShadow: '0 4px 10px rgba(15, 140, 233, 0.2)',
      '&::before': {
        opacity: 0.8,
      }
    }
  },
  roundedBorder: { borderRadius: '18px' }
};

// ===== REUSABLE COMPONENTS =====
// Update the GradientButton component
const GradientButton = ({ children, className = "", ...props }) => (
  <Button
    variant="contained"
    className={`rounded-md ${className}`}
    sx={{ 
      ...styles.blueGradient, 
      ...styles.roundedBorder, 
      whiteSpace: 'nowrap',
      minWidth: 'max-content',
      ...props.sx 
    }}
    {...props}
  >
    {children}
  </Button>
);

// Update the OutlinedGradientButton component
const OutlinedGradientButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outlined"
    className={`rounded-md ${className}`}
    sx={{ 
      ...styles.outlinedGradient, 
      whiteSpace: 'nowrap',
      minWidth: 'max-content',
      ...props.sx 
    }}
    {...props}
  >
    {children}
  </Button>
);

// Update the YellowButton component
const YellowButton = ({ children, className = "", ...props }) => (
  <Button
    variant="contained"
    className={`rounded-xl ${className}`}
    sx={{ 
      ...styles.yellowButton, 
      whiteSpace: 'nowrap',
      minWidth: 'max-content',
      ...props.sx 
    }}
    {...props}
  >
    {children}
  </Button>
);

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default function FloatingNavbar() {
  const [tabValue, setTabValue] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const navItems = ['Home', 'Properties', 'About'];

  const renderNavLinks = (isMobile = false) => {
    if (isMobile) {
      return (
        <List>
          {navItems.map((item, index) => (
            <ListItem key={item} disablePadding>
              <ListItemButton 
                selected={tabValue === index}
                onClick={() => setTabValue(index)}
                className="px-8"
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      );
    }
    
    return (
      <Tabs 
        value={tabValue} 
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        centered
      >
        {navItems.map((item, index) => (
          <Tab key={item} label={item} className="text-gray-800" />
        ))}
      </Tabs>
    );
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="py-4">
      {renderNavLinks(true)}
      <div className="px-4 mt-4 flex flex-col gap-3">
        <OutlinedGradientButton className="w-full">
          Login
        </OutlinedGradientButton>
        <GradientButton className="w-full">
          Contact Us
        </GradientButton>
      </div>
    </Box>
  );

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4">
      <AppBar 
        position="static" 
        elevation={0}
        className={`
          backdrop-blur-md rounded-lg max-w-7xl mx-auto transition-all duration-300
          ${trigger ? 'shadow-md' : 'shadow-sm'}
        `}
        style={{ background: 'transparent' }}
      >
        <Toolbar className="flex items-center justify-between">
          {/* Left side button */}
          <YellowButton>
            Logo
          </YellowButton>
          <Box 
            sx={{ 
              display: { xs: 'none', [BREAKPOINT]: 'flex' }, 
              position: 'absolute',  // This is the key change
              left: 0,
              right: 0,
              margin: '0 auto',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 0
            }}
          >
                        <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="primary"
              centered
              variant="standard"
              sx={{ 
                '& .MuiTabs-flexContainer': {
                  justifyContent: 'center',
                  gap: 2,
                },
                '& .MuiTab-root': {
                  minWidth: 0,
                  color: '#333333',
                  borderRadius: '30px', // Add border radius to all tabs
                  transition: 'all 0.2s ease',
                  '&.Mui-selected': {
                    color: '#0195FF',
                    fontWeight: 500,
                    backgroundColor: '#E4F3FE', // Light blue background for active tab
                  }
                },
                '& .MuiTabs-indicator': {
                  display: 'none', // Hide the default bottom indicator completely
                }
              }}
            >
              {navItems.map((item, index) => (
                <Tab 
                  key={item} 
                  label={item} 
                  sx={{ fontSize: '1rem' }}
                />
              ))}
            </Tabs>
          </Box>
          
          {/* Right side buttons - hidden on mobile */}
                   
          <Box 
            sx={{ 
              display: { xs: 'none', [BREAKPOINT]: 'flex' },
              alignItems: 'center',
              gap: 2
            }}
          >
            <OutlinedGradientButton>
              Login
            </OutlinedGradientButton>
            <GradientButton>
              Contact Us
            </GradientButton>
          </Box>

          {/* Mobile menu button - visible only on mobile */}
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', [BREAKPOINT]: 'none' }, ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile navigation drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': { 
            width: '70%', 
            maxWidth: '300px',
            boxSizing: 'border-box',
            mt: '70px',
            borderRadius: '8px 0 0 8px',
          },
          display: { xs: 'block', [BREAKPOINT]: 'none' },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}