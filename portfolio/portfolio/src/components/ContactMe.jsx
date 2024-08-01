import React from 'react';
import { Box, Card, CardContent, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactCard = styled(Card)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor:'#DBD7E1',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the left
    justifyContent: 'flex-start', // Align content to the left
  },
}));

const InfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  margin: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    justifyContent: 'flex-start', // Align content to the left
    margin: theme.spacing(0.5),
  },
}));

const ContactMe = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginTop={8}
      marginBottom={4}
    >
      <ContactCard>
        <CardContent>
          <InfoBox>
            <InfoItem>
              <EmailIcon />
              <Typography variant="body1" marginLeft={1}>
                <Link href="mailto:asmisavla14@gmail.com" color="inherit">
                  asmisavla14@gmail.com
                </Link>
              </Typography>
            </InfoItem>
            <InfoItem>
              <LinkedInIcon />
              <Typography variant="body1" marginLeft={1}>
                <Link href="https://linkedin.com/in/asmisavla" target="_blank" color="inherit">
                  linkedin.com/in/asmisavla
                </Link>
              </Typography>
            </InfoItem>
            <InfoItem>
              <PhoneIcon />
              <Typography variant="body1" marginLeft={1}>
                +91 8369620196
              </Typography>
            </InfoItem>
          </InfoBox>
        </CardContent>
      </ContactCard>
    </Box>
  );
};

export default ContactMe;
