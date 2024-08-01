
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ScrollContainer = styled(Box)(({ theme }) => ({
  maxHeight: '70vh',  // Adjust this value to your preference
  overflowY: 'auto',
  padding: theme.spacing(2),
  scrollBehavior: 'smooth',  // Enable smooth scrolling
  scrollbarWidth: 'none', // For Firefox
  '&::-webkit-scrollbar': {
    display: 'none', // For Chrome, Safari, and Edge
  }
}));

const ColoredCard = styled(Card)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  marginBottom: theme.spacing(1),
  paddingTop:theme.spacing(2.5),
  paddingBottom:theme.spacing(2.5),
  transition: 'transform 0.2s, box-shadow 0.2s',
  borderRadius:theme.shape.borderRadius * 7,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[4],
  },
}));

const VerticalScrollCards = () => {
    const experiences = [
        { company: 'Capgemini Technology Services India  Limited', designation: 'Intern', tenure: '3rd June 2024-2nd Aug 2024', description: 'It was an onsite internship where I got the corporate and industrial experience on how things actually work in the real world. I learned UX designing in depth ,the research that goes behind each design and how to develop your creative thought process. I also learned UI development using React JS and easier ways to develop projects.', color: '#E4E3F0' },
        { company: 'ACM Student Chapter', designation: 'NSS Coordinator', tenure: 'Aug 2024 - Jul 2025', description: 'My role is to engagee the commitee in social service activites conducted by the NSS department in our college. I also help other departments in the committee for smooth functioning.', color: '#DAD8EB' },
        { company: 'NSS DJ Sanghvi', designation: 'Creatives Head', tenure: 'Aug 2024 - Mar 2025', description: 'I lead the creatives team with 7 juniors below me. My job is to handle the social media account and also design the creative decor for any event.', color: '#BEBDD8' },
        { company: 'DJ Unicode', designation: 'Frontend and UI/UX Mentee', tenure: 'Sep 2023 - Jul 2024', description: 'DJ Unicode is a club where I got to learn about a particular stack and develop projects for the same. I got to interact with my senior mentors and learn everything from scratch. I also got a great exposure in creating a team project "NOTENG".', color: '#ACA9CB' },
        { company: 'ACM Student Chapter', designation: 'Publicity Co-Committee', tenure: 'Sep 2023 - Jul 2024', description: 'I got to develop my non- tech networking and socializing skills. I managed to convinve the highest number of people to take a paid membership. I went to other colleges for publicity of our hackathon and also be a part of the organizing committee of the 24 hour hackathon. I also did marketing (calling,cold emailing and research) for sponsorships. I also approached companies to come visit our college for the Internship Fair.', color: '#BEBDD8' },
        { company: 'NSS DJ Sanghvi', designation: 'Volunteer', tenure: 'Aug 2023 - Mar 2025', description: 'I have got the best experience going to a 7 day social service camp to Ambewadi near Dahanu where we got to interact with the villagers at grassroot level and conducted various activities there(medical camp,cleanliness drives,solar light setup, Andhavishwas awarness etc). I have completed 120 hours of service in my first year as a volunteer where we organized various events like the blood donation camp with more than 650 donors, beach cleanups, tree plantations, grainathons, newspaper collection drive, voter ID registrations, Annual charity drives and many more ', color: '#DAD8EB' },
        { company: 'DJS EXPRESS', designation: 'Publicity Co-Committee', tenure: 'Jan 2023 - Jan 2024', description: 'Express is the debating and public speaking club of our college. I got to learn how to talk to and convince people.', color: '#E4E3F0' },
      ];
  return (
    <Box sx={{ width: '100%', padding: 0, marginBottom: 10, marginTop: 2,boxShadow:"5px 5px" }}>
      <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold',paddingLeft:5 }}>
        Work Experience/College Committees
      </Typography>
      <ScrollContainer>
        {experiences.map((experience, index) => (
          <ColoredCard key={index} bgcolor={experience.color}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{fontWeight:'bold'}}>
                {experience.company}
              </Typography>
              <Typography variant="subtitle1" component="div">
                {experience.designation}
              </Typography>
              <Typography variant="body2" component="div">
                {experience.tenure}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.description}
              </Typography>
            </CardContent>
          </ColoredCard>
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default VerticalScrollCards;
