import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from 'react';
import SignUpForm from './sign-up-form/sign-up-form';

export default function SignUp() {
  const [emailAddress, setEmailAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const onSignUpFormSubmit = () => {
    // eslint-disable-next-line no-console
    console.log({ emailAddress, firstName, lastName, password });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <SignUpForm
          emailAddress={emailAddress}
          firstName={firstName}
          lastName={lastName}
          onEmailAddressChange={setEmailAddress}
          onFirstNameChange={setFirstName}
          onLastNameChange={setLastName}
          onPasswordChange={setPassword}
          onSubmit={onSignUpFormSubmit}
          password={password}
        />
      </Box>
    </Container>
  );
}
