import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import image from '../assets/homeImage.png';

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  marginTop: theme.spacing(-10), // Adjusted margin to float upward
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: theme.spacing(-10), // Reset margin for smaller screens
  },
  [theme.breakpoints.down(560)]: { // Specific styles for screens less than 560px
    padding: theme.spacing(1), // Reduce padding
    overflow: 'hidden', // Prevent overflow
    position: 'relative',
    transformOrigin: 'top left', // Scale from the top-left corner
    transform: 'translateX(-15%)',
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  flex: '1',
  height: '100vh', // Full viewport height
  position: 'relative', // For text positioning
  overflow: 'hidden', // Ensure image stays within bounds
  [theme.breakpoints.down('md')]: {
    height: 'auto', // Adjust height for smaller screens
  },
  [theme.breakpoints.down(560)]: { // Specific styles for screens less than 560px
    height: '100vh', // Keep height but adjust layout
    padding: 0,
    position: 'relative', // Ensure proper alignment
    transform: 'translateX(-15%)', // Shift image to left to fit
  },
}));

const CloudBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: '#DBD7E1', // Light blue background for rectangle
  padding: theme.spacing(4),
  borderRadius: '50px',
  boxShadow: '0 5px 15px rgba(228, 227, 240, 0.2)',
  color: 'black',
  fontWeight: 'bold',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    backgroundColor: '#17153B', // Dark blue background for circles
    borderRadius: '50%',
    boxShadow: '0 5px 15px rgba(228, 227, 240, 0.2)',
  },
  '&::before': {
    width: '60px',
    height: '60px',
    top: '-30px',
    left: '-30px',
  },
  '&::after': {
    width: '100px',
    height: '100px',
    bottom: '-50px',
    right: '-50px',
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  flex: '1',
  paddingRight: theme.spacing(2),
  marginLeft: theme.spacing(5),
  wordWrap: 'break-word',
  [theme.breakpoints.down('md')]: {
    paddingRight: 0,
    paddingLeft: theme.spacing(0), // Add some padding for smaller screens
    paddingBottom: theme.spacing(2),
  },
  width: '100%',
  maxWidth: '100%', // Ensure text box uses full width
  boxSizing: 'border-box',
}));

const HomeComponent = () => {
  return (
    <ResponsiveBox>
      <ImageBox>
        <img src={image} alt="description" style={{ height: '100%', objectFit: 'cover' }} />
      </ImageBox>
      <TextBox>
        <CloudBox>
          <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '2rem', lg: '3rem' },fontWeight:'bold',color:'#333' }}>
            Hi, I am Asmi Savla
          </Typography>
          <Typography variant="body1" sx={{ fontSize: { xs: '0.75rem', md: '1rem', lg: '1.4rem' } }}>
            I am a 3rd year Computer Engineering BTech Student studying in SVKM's Dwarkadas J. Sanghvi College of Engineering, Vile Parle.
          </Typography>
        </CloudBox>
      </TextBox>
    </ResponsiveBox>
  );
};

export default HomeComponent;
