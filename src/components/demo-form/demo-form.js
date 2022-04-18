import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import DemoFormFirstNameTextFieldConnected from './demo-form-first-name-text-field/demo-form-first-name-text-field.connected';
import DemoFormLastNameTextFieldConnected from './demo-form-last-name-text-field/demo-form-last-name-text-field.connected';
import DemoFormEmailAddressTextFieldConnected from './demo-form-email-address-text-field/demo-form-email-address-text-field.connected';
import DemoFormPasswordTextFieldConnected from './demo-form-password-text-field/demo-form-password-text-field.connected';

export default function DemoForm() {
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
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <DemoFormFirstNameTextFieldConnected />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DemoFormLastNameTextFieldConnected />
            </Grid>
            <Grid item xs={12}>
              <DemoFormEmailAddressTextFieldConnected />
            </Grid>
            <Grid item xs={12}>
              <DemoFormPasswordTextFieldConnected />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
