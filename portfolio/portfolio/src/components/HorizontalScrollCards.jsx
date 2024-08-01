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

const HorizontalScrollCards = () => {
  const projects = [
    { name: 'Noteng', description: 'A full stack group project. Noteng is a notes uploading and downloading app for college students in which they can learn, share resources and interact with each other' },
    { name: 'Blog app', description: 'A travel Blog frontend website using React JS. Used routing, MUI, axios in the project' },
    { name: 'News App', description: 'Created a frontend website using React JS where users can register and login to view news. Used routing, pagination, Yas, Formik, MUI, axios in the project' },
    { name: 'To Do list', description: 'Built an app using React JS that keeps track of your to do actions. Users can add, search, delete, edit tasks and mark them completed' },
    { name: 'Currency Convertor', description: 'A simple currency convertor app using React JS that takes input of value and converts the amount from one currency to another. This is done by API fetching using axios' },
    { name: 'Tic Tac Toe Game', description: 'Built a simple tic tac toe game using React JS' },
    { name: 'Mortage Repayment App', description: 'Built a simple app using Javascript and Tailwind CSS that calculates mortage and interest to be paid' },
    { name: 'Social Media Website', description: 'Built a single social media website in which the user can post, delete and edit posts. Used Javascript API calls and HTTPS requests ' },
    { name: 'Basic Form', description: 'Made a basic form using various input types using Javascript and Tailwind CSS' }
  ];

  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>
        Frontend
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

export default HorizontalScrollCards;
