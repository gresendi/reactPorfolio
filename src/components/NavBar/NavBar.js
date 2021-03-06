import * as React from 'react'
import { Link } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import CodeIcon from '@mui/icons-material/Code'
import ArchitectureIcon from '@mui/icons-material/Architecture'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import ResumeButton from '../ResumeButton/ResumeButton'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


import './NavBar.css'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({

  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const NavBar = ({home}) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const displayIcon = index => {

    switch (index) {
      case 0:
        return <HomeIcon className="menuItem" />
      case 1:
        return <CodeIcon className="menuItem" />
      case 2:
        return <ArchitectureIcon className="menuItem" />
      case 3:
        return <AttachFileIcon className="menuItem" />
      default:
        return <></>
    }

  }

  const defineRoute = index => {

    switch (index) {
      case 0:
        return '/'
      case 1:
        return '/projects'
      case 2:
        return '/toolbelt'
      case 3:
        return '/resume'
      default:
        return <></>
    }

  }
  console.log(home)
  if(home===true){
    return (



      <Box sx={{ display: 'flex' }}>
        <AppBar className="navBgColor" position="fixed" open={open}>
          <Toolbar className="toolbarPadding">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <MenuItem >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <a className='navItem' href="#about">Home</a>
                </Typography>
              </MenuItem>
              <MenuItem >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <a className='navItem' href="#timeline">Journey</a>
                </Typography>
              </MenuItem>
              <MenuItem >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <a className='navItem' href="#toolbelt">Toolbelt</a>
                </Typography>
              </MenuItem>
              <MenuItem >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <a className='navItem' href="#projects">Projects</a>
                </Typography>
              </MenuItem>
            </Box>



            <ResumeButton />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          className="navBgColor"
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Home', 'Projects', 'Toolbelt', 'Resume'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {displayIcon(index)}
                </ListItemIcon>
                <Link className="menuItem" to={defineRoute(index)}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    )


  }
  else{
    return (



      <Box sx={{ display: 'flex' }}>
        <AppBar className="navBgColor" position="fixed" open={open}>
          <Toolbar className="toolbarPadding">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              
            </Box>



            <ResumeButton />
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
          className="navBgColor"
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Home', 'Projects', 'Toolbelt', 'Resume'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {displayIcon(index)}
                </ListItemIcon>
                <Link className="menuItem" to={defineRoute(index)}>
                  <ListItemText primary={text} />
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    )
  }

  
}

export default NavBar
