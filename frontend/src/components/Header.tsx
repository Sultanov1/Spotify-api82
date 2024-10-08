import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import UserMenu from './UserMenu';
import AnonymousMenu from './AnonymousMenu';
import { useAppSelector } from '../app/hooks.ts';
import { selectUser } from '../app/userSlice.ts';

const Header = () => {
  const user = useAppSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 30px',
        background: '#1db954'
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <Typography sx={{ color: 'white',fontSize: '30px' }}>Music App</Typography>
      </Link>
      <Box>
        {user ? <UserMenu user={user} /> : <AnonymousMenu />}
      </Box>
    </Box>
  );
};

export default Header;
