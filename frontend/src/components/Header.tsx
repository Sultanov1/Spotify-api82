import { AppBar, Box, Button, CssBaseline, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#1db954' }}>
        <Toolbar sx={{ paddingLeft: '10px', paddingRight: '10px' }}>
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                sx={{ display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>

            <Grid item xs={9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginLeft: '-70px' }}>
              <Typography
                variant="h4"
                component={Link}
                to={'/'}
                sx={{
                  flexGrow: 1,
                  textDecoration: 'none',
                  color: 'black',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Music App
              </Typography>
            </Grid>

            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button
                  component={NavLink}
                  to={'/register'}
                  sx={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
                >
                  Sign up
                </Button>
                <Button
                  component={NavLink}
                  to={'/Log'}
                  sx={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}
                >
                  Sign in
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
