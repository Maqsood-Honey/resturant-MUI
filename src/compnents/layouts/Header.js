import React, { useState } from 'react'
import { AppBar, Box, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/HeaderStyle.css'
import Logo from '../../images/logo.svg'
const Header = () => {
    const [mobileopen, setMobileopen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileopen(!mobileopen)
        console.log(mobileopen);
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Typography color={'goldenrod'}
                variant='h6'
                component='div'
                sx={{ flexGrow: 1 }}>
                <img src={Logo} alt="logoimage" height="70px" width='200px' />
            </Typography>
            <Divider />
            <ul className='mobile-navigation'>
                <li><Link to={'/'}> Home</Link></li>
                <li><Link to={'/about'}> About</Link></li>
                <li><Link to={'/contact'}> Contact</Link></li>
                <li><Link to={'/menu'}> Menu</Link></li>
            </ul>
        </Box>
    )
    return (
        <Box>
            <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start"
                        sx={{ bgcolor: "goldenrod", mr: 1, display: { sm: 'none' }, }}
                        onClick={handleDrawerToggle}><MenuIcon />
                    </IconButton>
                    <Typography color={'goldenrod'}
                        variant='h6'
                        component='div' sx={{ flexGrow: 1 }}>
                        <img src={Logo} alt="logoimage" height="70px" width='225px' />
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <ul className='navigation-menu'>
                            <li><Link to={'/'}> Home</Link></li>
                            <li><Link to={'/about'}> About</Link></li>
                            <li><Link to={'/contact'}> Contact</Link></li>
                            <li><Link to={'/menu'}> Menu</Link></li>
                        </ul>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer variant='temporary' open={mobileopen} onClose={handleDrawerToggle}
                    sx={{ display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: "240px" } }}>
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{ p: 1 }}>
                <Toolbar />

            </Box>
        </Box >
    )
}

export default Header