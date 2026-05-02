import { useMediaQuery, Box, Drawer } from '@mui/material';
import Logo from '../shared/logo/Logo';
import SidebarItems from './SidebarItems';
// import { Upgrade } from './Updrade';

const Sidebar = (props) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('md'));

  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: 'border-box',
              background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 18, 32, 0.8) 100%)',
              borderRight: '1px solid rgba(148, 163, 184, 0.15)',
              boxShadow: 'inset -1px 0 0 rgba(96, 165, 250, 0.1)',
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                px: 3,
                py: 2.5,
                width: '100%',
                gap: 2,
                borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, transparent 100%)',
              }}
            >
              <Logo />
            </Box>

            <Box sx={{ flex: 1, overflowY: 'auto' }}>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
              {/* <Upgrade /> */}
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.9) 0%, rgba(11, 18, 32, 0.8) 100%)',
          borderRight: '1px solid rgba(148, 163, 184, 0.15)',
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: 2,
          py: 2.5,
          width: '100%',
          borderBottom: '1px solid rgba(148, 163, 184, 0.1)',
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, transparent 100%)',
        }}
      >
        <Logo />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
      {/* <Upgrade /> */}
    </Drawer>
  );
};

export default Sidebar;
