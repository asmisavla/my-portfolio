import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Link, useLocation } from 'react-router-dom';

const pages = ['Home', 'Experience', 'Projects', 'Hobbies'];

function ResponsiveAppBar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const selectedPage = location.pathname === '/' ? 'home' : location.pathname.split('/')[1];

  const handleOpenDrawer = () => {
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleSelectPage = () => {
    handleCloseDrawer();
  };

  return (
    <>
      <AppBar position="sticky" sx={{ width: '100%', backgroundColor: '#17153B', boxShadow: 'none' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AssignmentIndIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              MY PORTFOLIO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open drawer"
                onClick={handleOpenDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <AssignmentIndIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                mr: 30,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'none',
                },
              }}
            >
              MY PORTFOLIO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: '30px' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`}
                  onClick={handleSelectPage}
                  sx={{
                    py: 2.5,
                    px: 4,
                    borderRadius: 0,
                    color: selectedPage === page.toLowerCase() ? 'white' : 'white',
                    fontSize: selectedPage === page.toLowerCase() ? '15px' : 'normal',
                    fontWeight: selectedPage === page.toLowerCase() ? 'bold' : 'normal',
                    textDecoration: selectedPage === page.toLowerCase() ? 'underline' : 'none',
                    display: 'block',
                    textTransform: 'none',
                    backgroundColor: selectedPage === page.toLowerCase() ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    '&:hover': {
                      textDecoration: 'underline',
                      backgroundColor: selectedPage === page.toLowerCase() ? '#2E236C' : 'rgba(255, 255, 255, 0.1)',
                      color: 'white'
                    },
                    '&:focus': {
                      outline: 'none',
                    },
                    '&:focus-visible': {
                      outline: 'none',
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleCloseDrawer}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleCloseDrawer}
          onKeyDown={handleCloseDrawer}
        >
          <List>
            {pages.map((page) => (
              <ListItem
                button
                key={page}
                component={Link}
                to={`/${page.toLowerCase() === 'home' ? '' : page.toLowerCase()}`}
                onClick={handleSelectPage}
              >
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
