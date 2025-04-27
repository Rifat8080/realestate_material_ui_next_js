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

  const drawer = (
    <Box onClick={handleDrawerToggle} className="py-4">
      <List>
        {navItems.map((item, index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton 
              selected={tabValue === index}
              onClick={() => setTabValue(index)}
              className="px-8 "
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <div className="px-4 mt-4 flex flex-col gap-3">
        <Button 
          variant="outlined" 
          color="primary"
          className="rounded-md w-full"
        >
          Login
        </Button>
        <Button 
          variant="contained" 
          className="rounded-md w-full"
          sx={{
            background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
            boxShadow: '0 4px 10px rgba(15, 140, 233, 0.3)',
            '&:hover': {
              background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
              opacity: 0.9,
              boxShadow: '0 6px 12px rgba(15, 140, 233, 0.4)',
            }
          }}
        >
          Contact Us
        </Button>
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
                   <Button 
            variant="contained" 
            className="rounded-xl"
            sx={{
              background: '#F5BE30',
              '&:hover': {
                background: '#F5BE30',
                opacity: 0.9,
              },
              borderRadius: '18px',
              boxShadow: '0 4px 10px rgba(245, 190, 48, 0.3)',
            }}
          >
            Logo
          </Button>
          
          {/* Center tabs - hidden on mobile */}
          <Box className="hidden lg:flex flex-grow justify-center">
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange}
              textColor="primary"
              indicatorColor="primary"
              centered
            >
              <Tab label="Home" className="text-gray-800" />
              <Tab label="Properties" className="text-gray-800" />
              <Tab label="About" className="text-gray-800" />
            </Tabs>
          </Box>
          
          {/* Right side buttons - hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-4 gap-3.5">
                       <Button 
              variant="outlined"
              className="rounded-md"
              sx={{
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
              }}
            >
              Login
            </Button>
            <Button 
          variant="contained" 
          className="rounded-4xl w-full"
          sx={{
            background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
            boxShadow: '0 4px 10px rgba(15, 140, 233, 0.3)',
            '&:hover': {
              background: 'linear-gradient(to right, #0F8CE9, #66B3FB)',
              opacity: 0.9,
              boxShadow: '0 6px 12px rgba(15, 140, 233, 0.4)',
            },
            borderRadius: '18px',
          }}
        >
          Contact Us
        </Button>
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <IconButton
  color="primary"
  aria-label="open drawer"
  edge="start"
  onClick={handleDrawerToggle}
  sx={{ display: { xs: 'flex', md: 'none' }, ml: 'auto' }}
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
    keepMounted: true, // Better mobile performance
  }}
  sx={{
    '& .MuiDrawer-paper': { 
      width: '70%', 
      maxWidth: '300px',
      boxSizing: 'border-box',
      mt: '70px',
      borderRadius: '8px 0 0 8px',
    },
    display: { xs: 'block', md: 'none' },
  }}
>
  {drawer}
</Drawer>
    </div>
  );
}