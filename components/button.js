import * as React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Tabs, 
  Tab, 
  Button, 
  Box,
  useScrollTrigger
} from '@mui/material';

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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

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
            color="primary"
            className="rounded-md"
          >
            Logo
          </Button>
          
          {/* Center tabs */}
          <Box className="flex-grow flex justify-center">
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
          
          {/* Right side buttons */}
          <div className="flex items-center space-x-4 gap-3.5">
            <Button 
              variant="outlined" 
              color="primary"
              className="rounded-md"
            >
              Login
            </Button>
            <Button 
              variant="contained" 
              color="primary"
              className="rounded-md"
            >
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}