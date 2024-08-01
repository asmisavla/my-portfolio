import React from "react";
import { Box } from "@mui/material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HomeComponent from "../components/HomeComponent";
import UniversityCards from "../components/UniversityCards";
import ContactMe from "../components/ContactMe";

function Home() {
    return (
        <>
            <ResponsiveAppBar />
            <main style={{ overflowY: 'auto', position:'relative'  }}>
            <Box 
                sx={{ 
                    background: 'linear-gradient(#211F41,#2E236C, #2E236C,#3E3080,#4E4092,#4E4092,#433D8B,#3E3080,#2E236C, #2E236C,#211F41)', // Gradient background
                    minHeight: '100vh', // Ensure it covers the full viewport height
                    overflowY: 'auto',
                    position: 'relative',
                    padding: '0px 0px', // Adjust as necessary
                }}
            >
                <HomeComponent />
                <UniversityCards />
                <ContactMe />
            </Box>
            </main>
        </>
    );
}

export default Home;
