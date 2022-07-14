import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicTabs from './tabs';

function saveResponses() {
  console.log('you clicked the save button');
}

function goBack() {
  console.log('You clicked the back button');
}

export default function HeaderandFooter() {
  return (
    <div>
      <h1
        align="center"
        style={{ backgroundColor: '#004cbb', color: 'rgb(255,255,255)' }}
      >
        Student Names Interview
      </h1>

      <BasicTabs />
      <Stack
        spacing={85}
        direction="row"
        sx={{
          p: 2,
        }}
      >
        <Button variant="outlined" onClick={goBack}>
          Back To Home
        </Button>
        <Button variant="contained" onClick={saveResponses}>
          Save
        </Button>
      </Stack>
    </div>
  );
}
