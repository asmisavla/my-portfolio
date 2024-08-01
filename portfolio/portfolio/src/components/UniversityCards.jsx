import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const UniversityCard = styled(Card)(({ theme }) => ({
  flex: '1 1 30%', // Each card takes up 30% of the container width with equal spacing
  maxWidth: '300px', // Set a max width to maintain consistent sizing
  height: 200, // Fixed height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#DBD7E1', 
  color: '#444',
  borderRadius: theme.shape.borderRadius * 8,
  padding:"20px 10px",
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Add transition
  '&:hover': {
    transform: 'scale(1.01)', // Scale up slightly on hover
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    width: '80%', // Adjust the width for smaller screens
    height: 'auto', // Allow height to adjust for smaller screens
    minHeight: 150,
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    minHeight: 120,
  },
  [theme.breakpoints.down(400)]: {
    width: '100%',
    height: 'auto',
    minHeight: 100,
    padding: theme.spacing(1),
  },
}));

const UniversityCards = () => {
  const universities = [
    { name: 'Dwarkadas J. Sanghvi College of Engineering', marks: '8.46 CGPA', type: 'BTech in Computer Engineering with Honours in Intelligent Computing' },
    { name: 'Prakash Vidyamandir Junior College', marks: '83.83%', type: 'HSC 12th' },
    { name: 'Ryan International School', marks: '96.7%', type: 'ICSE 10th' },
  ];

  return (
    <CardContainer>
      {universities.map((university, index) => (
        <UniversityCard key={index}>
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'black' }}>
              {university.type}
            </Typography>
            <Typography variant="h6" component="div">
              {university.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Marks Obtained: {university.marks}
            </Typography>
          </CardContent>
        </UniversityCard>
      ))}
    </CardContainer>
  );
};

export default UniversityCards;
