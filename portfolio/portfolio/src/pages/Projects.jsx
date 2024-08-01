import React from "react";
import GitHubLink from "../components/GithubLink";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import HorizontalScrollCards from "../components/HorizontalScrollCards"; // Import the new component
import Box from '@mui/material/Box';
import HorizontalScrollCards2 from "../components/HorizontalScrollCards2";
import HorizontalScrollCards3 from "../components/HorizontalScrollCards3";
import HorizontalScrollCards4 from "../components/HorizontalScrollCards4";

function Projects() {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        component="main"
        sx={{
          width: '100%', // Ensure full width
          maxWidth: '100%', // Ensure full width
          padding: 2,
          boxSizing: 'border-box',
        }}
      >
        <GitHubLink />
        <Box display="flex" flexDirection="column" alignItems="center" marginTop={4}>
          <HorizontalScrollCards />
          <HorizontalScrollCards2 />
          <HorizontalScrollCards3 />
          <HorizontalScrollCards4 />
        </Box>
      </Box>
    </>
  );
}

export default Projects;
