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
  borderRadius:theme.shape.borderRadius * 3,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[6],
    cursor:'pointer'
  },
}));

const HorizontalScrollCards4 = () => {
  const projects = [
    { name: 'C/C++'},
    { name: 'Java'},
    { name: 'Python'},
    { name: 'HTML/CSS'},
    { name: 'Javascript'},
    { name: 'React JS'},
    { name: 'Tailwind CSS'},
    { name: 'Bootstrap'},
    { name: 'Figma'},
    { name: 'Canva'},
    { name: 'MySQL'},
    { name: 'Autocad'},
    { name: 'MS Word'},
    { name: 'MS Excel'},
    { name: 'MS Paint'},
    { name: 'MS PowerPoint'},
  ];

  return (
    <Box sx={{ width: '100%', padding: 2 ,marginBottom:10}}>
      <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
        Languages/Technologies
      </Typography>
      <ScrollContainer>
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Typography variant="h5" component="div">
                {project.name}
              </Typography>
              
            </CardContent>
          </StyledCard>
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default HorizontalScrollCards4;
