import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  padding: theme.spacing(-50),  // Reduced padding to decrease gap between title and cards
  '&::-webkit-scrollbar': {
    height: 0,  // Hides the scrollbar
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  minWidth: 250,
  margin: theme.spacing(1),
  transition: 'transform 0.2s, box-shadow 0.2s',
  backgroundColor:'#DBD7E1',
  borderRadius:theme.shape.borderRadius * 5,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
    cursor:'pointer'
  },
}));

const HorizontalScrollCards2 = () => {
  const projects = [
    { name: 'GoGetIt Delivery App', description: 'Designed a delivery app that has a special gogetit feature that enables users to collect the order from the restaurant. Designed the user as well as the admin prototype' },
    { name: 'Noteng', description: 'A group project designing both app and web. Noteng is a notes uploading and downloading app for college students in which they can learn, share resources and interact with each other' },
    { name: 'LOC 6.0 website', description: 'Designed a 24 hour hackathon website for my college hackathon Lines Of Code 6.0 organised by ACM student chapter. The theme was Area 51.' },
    { name: 'Space Venture App', description: 'Designed a Scavenger Hunt app for hosting a treasure hunt event on college campus. Designed a space themed app containing maps, camera feature, hints and a scoreboard.' },
    { name: 'Photogallery Website', description: 'Designed a photgallery website which contains photos of the client visit of that company' },
    { name: 'Music Website', description: 'Redesigned spotify adding my own new additional features' },
    { name: 'Flight Booking App', description: 'Designed a flight booking app where users can select and book a flight' },
    { name: 'Dating App', description: 'Designed a dating app where people can meet new people ' },
  ];

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
        UI/UX Design
      </Typography>
      <ScrollContainer>
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{fontWeight:'bold',color:'#444'}}>
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </StyledCard>
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default HorizontalScrollCards2;
