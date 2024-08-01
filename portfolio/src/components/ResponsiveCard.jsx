import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/system';
import danceImage from '../assets/danceImage.jpg'; // Replace with the correct path
import drawingImage from '../assets/drawingImage.jpg'; // Add another image for variety
import trekImage from '../assets/trekImage.jpg'; // Add another image for variety

const CenteredBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically (if needed)
  minHeight: '100vh', // Ensure the container takes up full height of the viewport
  flexDirection: 'column', // Stack the cards vertically
  padding: theme.spacing(2),
  marginBottom:theme.spacing(10),
}));

const ResponsiveCardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '90%',
  backgroundColor:'#DBD7E1',
  marginTop: theme.spacing(3),
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 8,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column', // Stack image and text vertically on smaller screens
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '40%', // Image takes up 40% of the card width
  height: '200px', // Set a fixed height for the image
  objectFit: 'cover', // Maintain aspect ratio, crop to fit
  [theme.breakpoints.down('md')]: {
    width: '100%', // Image takes up full width on smaller screens
    height: '150px', // Adjust height for smaller screens
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  width: '60%', // Text takes up 60% of the card width
  padding: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    width: '100%', // Text takes up full width on smaller screens
    textAlign: 'center', // Center the text on smaller screens
  },
}));

const ResponsiveCard = () => {
  const cardData = [
    {
      title: 'Dancing',
      description: 'I am a certified 4 level Kathak Dancer. I have passed 4 levels from Gandharva University. I have also gotten chance to perform with Late Shree Pandit Birju Maharaj in Pune. I have also attended his workshop in Mumbai. Besides Kathak, I also like free dancing, Bollywood dance and Hip Hop',
      image: danceImage,
    },
    {
      title: 'Painting',
      description: 'I have passed the elementary and intermediate examination with A grade. I love art and craft. I spent a lot of time during lockdown painting and drawing.',
      image: drawingImage,
    },
    {
      title: 'Trekking',
      description: 'I have done a lot of Sahyadri Maharashtra treks. In Aug 2023, I completed my first Himalayan trek Valley of Flowers and Hemkund Saheb. It was a once in a lifetime experience. I would want to do Everest Basr Camp and Maansarovar one day.',
      image: trekImage,
    },
  ];

  return (
    <CenteredBox>
      {cardData.map((card, index) => (
        <ResponsiveCardContainer key={index}>
          <StyledCardMedia
            component="img"
            alt={card.title}
            image={card.image}
            title={card.title}
          />
          <StyledCardContent>
            <Typography variant="h5" component="div" sx={{fontWeight:'bold'}} gutterBottom>
              {card.title}
            </Typography>
            <Typography variant="body1" component="div">
              {card.description}
            </Typography>
          </StyledCardContent>
        </ResponsiveCardContainer>
      ))}
    </CenteredBox>
  );
};

export default ResponsiveCard;
