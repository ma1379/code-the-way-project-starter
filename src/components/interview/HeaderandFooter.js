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
      <h1 align="center">Student Names Interview</h1>
      <BasicTabs />
      <Stack spacing={10} direction="row" justifyContent="center">
        <Button variant="contained" onClick={saveResponses}>
          Save
        </Button>
        <Button variant="contained" onClick={goBack}>
          Back
        </Button>
      </Stack>
    </div>
  );
}
