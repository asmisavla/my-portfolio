import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflowX: 'auto',
  padding: theme.spacing(-50), 
   // Reduced padding to decrease gap between title and cards
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

const HorizontalScrollCards3 = () => {
  const projects = [
    { name: 'Notes App', description: 'Created a notes app using Python GUI and also connected it to a database to store, delete and edit notes' },
    { name: 'Calculator', description: 'Built a Calculator using Java Swing' },
    { name: 'Calculator', description: 'Built a Calculator using Python GUI ' },
    { name: 'Data Structures', description: 'Basics of Data Structures and Algorithms using C programming' },
    { name: 'Form', description: 'Basic registration form using Python as well as Java' },
  ];

  return (
    <Box sx={{ width: '100%', padding: 2}}>
      <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
        Other Projects
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

export default HorizontalScrollCards3;
