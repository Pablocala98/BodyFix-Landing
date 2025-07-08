import React, {useState} from 'react'
import Logo from '../Assets/Logo.png'
import { HiOutlineBars3 } from 'react-icons/hi2'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: 'About',
            icon: <InfoIcon />,
            action: () => document.querySelector('.about-section-container').scrollIntoView({behavior: 'smooth'})
        },
        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon />,
            action: () => document.querySelector('.work-section-wrapper').scrollIntoView({behavior: 'smooth'})
        },
        {
            text: 'Contact',
            icon: <PhoneRoundedIcon />,
            action: () => document.querySelector('.contact-page-wrapper').scrollIntoView({behavior: 'smooth'})
        },
        {
            text: 'Download App',
            icon: <ArrowCircleDownIcon />,
            action: () => console.log('Bookings Now clicked')
        }
    ]

  return <nav>
    <div className='nav-logo-container'>
        <img src={Logo} alt='' />
    </div>
    <div className='navbar-links-container'>
        <a href="#" onClick={() => document.querySelector('.about-section-container').scrollIntoView({behavior: 'smooth'})}>About</a>
        <a href="#" onClick={() => document.querySelector('.work-section-wrapper').scrollIntoView({behavior: 'smooth'})}>Testimonials</a>
        <a href="#" onClick={() => document.querySelector('.contact-page-wrapper').scrollIntoView({behavior: 'smooth'})}>Contact</a>

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