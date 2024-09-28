import {AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline/>
      <AppBar component="nav" sx={{backgroundColor: '#1db954'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            component={Link}
            to="/"
            sx={{mr: 2, display: {sm: 'none'}}}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            Music App
          </Typography>
          <Box sx={{display: {xs: 'none', sm: 'block'}}}>
            <Button sx={{color: '#fff'}}></Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;