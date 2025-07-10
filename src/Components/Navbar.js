import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../Assets/Logo.png'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [openMenu, setOpenMenu] = useState(false)

    const scrollToSection = (sectionClass) => {
        if (location.pathname !== '/') {
            // Si no estamos en la página principal, navegar primero a home
            navigate('/');
            // Esperar un poco para que la página se cargue y luego hacer scroll
            setTimeout(() => {
                const element = document.querySelector(sectionClass);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100);
        } else {
            // Si estamos en la página principal, hacer scroll directamente
            const element = document.querySelector(sectionClass);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    };

    const menuOptions = [
        {
            text: 'About',
            icon: <InfoIcon />,
            action: () => scrollToSection('.about-section-container')
        },
        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon />,
            action: () => scrollToSection('.work-section-wrapper')
        },
        {
            text: 'Contact',
            icon: <PhoneRoundedIcon />,
            action: () => scrollToSection('.contact-page-wrapper')
        },
        {
            text: 'Download App',
            icon: <ArrowCircleDownIcon />,
            action: () => console.log('Bookings Now clicked')
        }
    ]

  return <nav>
    <div className='nav-logo-container'>
        <img src={Logo} alt='' onClick={() => navigate('/')} style={{cursor: 'pointer'}} />
    </div>
    <div className='navbar-links-container'>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('.about-section-container'); }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('.work-section-wrapper'); }}>Testimonials</a>
        <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('.contact-page-wrapper'); }}>Contact</a>

        <button className='primary-button'>
            Bookings Now
        </button>
    </div>
    <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=> setOpenMenu(true)}  />
    </div>
    <Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor='right'>
        <Box sx={{width: 250}}
        role='presentation'
        onClick={()=> setOpenMenu(false)}
        onKeyDown={()=> setOpenMenu(false)}
        >
            <List>
                {menuOptions.map((item)=>(
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={item.action}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
  </nav>
  
}

export default Navbar