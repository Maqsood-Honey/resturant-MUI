import React from 'react'
import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <Box sx={{ textAlign: "center", bgcolor: "#1A1A19", color: 'white', p: 3 }}>
            <Typography variant='h5' sx={{ "@media (max-width:600px)": { fontSize: "1rem" } }}>
                <Box sx={{
                    my: 3,
                    "& svg": { fontSize: "60px", cursor: "pointer", mr: 2 },
                    "& svg:hover": { color: "goldenrod", transform: "translateX(5px)", transition: "all 500ms" }
                }}>
                    <FacebookIcon /><TwitterIcon /><InstagramIcon /><GitHubIcon /><LinkedInIcon /></Box>

                All Right reserved &copy; Maqsood Ahmad.

            </Typography>
        </Box>
    )
}

export default Footer