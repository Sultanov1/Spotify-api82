import { Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const AnonymousMenu = () => {
  return (
    <Grid sx={{display: 'flex'}} item>
      <NavLink style={{
        marginRight: '30px',
        textDecoration: 'none',
        color: 'black'
      }} to={'/register'}>
        <Typography sx={{
          fontSize: '20px'
        }}>
          Sign up
        </Typography>
      </NavLink>
      <NavLink style={{
        marginRight: '30px',
        textDecoration: 'none',
        color: 'black'
      }} to={'/login'}>
        <Typography sx={{
          fontSize: '20px'
        }}>
          Sign in
        </Typography>
      </NavLink>
    </Grid>
  );
};

export default AnonymousMenu;