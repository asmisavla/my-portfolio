import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const FullWidthButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  justifyContent: 'flex-start',
  backgroundColor: '#17153B',
  borderRadius: theme.shape.borderRadius,
  '&:hover': { 
    color:'black',
  backgroundColor: '#DBD7E1',
  },
}));

const GitHubLink = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop={4} marginBottom={4}>
      <FullWidthButton
        variant="contained"
        startIcon={<GitHubIcon />}
        href="https://github.com/asmisavla"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant="body1" >Visit My GitHub</Typography>
      </FullWidthButton>
    </Box>
  );
};

export default GitHubLink;
