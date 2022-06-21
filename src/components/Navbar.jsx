import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Cartwidget from './Cartwidget';
import ComputerTwoToneIcon from '@mui/icons-material/ComputerTwoTone';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const pages = ['Productos', 'Armado de PC', 'Computadoras', 'Hardware', 'Ofertas'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ComputerTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Computers MS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Button
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to="/home" >Home</Link>
              </Button>
              <Button
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to="category/Computadoras" >Computadoras</Link>
              </Button>
              <Button
                onClick={handleOpenUserMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to="category/Hardware" >Hardware</Link>
              </Button>
            </Menu>
          </Box>
          <ComputerTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Computers MS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            ><Link to="/home" >Home</Link>
            </Button>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            ><Link to="category/Computadoras" >Computadoras</Link>
            </Button>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            ><Link to="category/Hardware" >Hardware</Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Cartwidget />
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
