/**
 * Functional Component to Navigate between pages
 */
import React from 'react';
import { Box } from "@mui/material";
import Footer from './Footer';


function Navigator(props) {
    return (
        <>
            <main>
                {props.renderPage}
                <Box mt={8}>
                    <Footer />
                </Box>
            </main>
        </>
    )
}

export default Navigator;