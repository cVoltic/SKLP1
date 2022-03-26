import React from 'react';
import { Typography, Link } from '@mui/material';

//Footer components
function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © '}
            <Link color='inherit' href="./">
                DDK Inc.
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'} 
        </Typography>
    );
}
export default Footer;