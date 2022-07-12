import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function saySave() {
  console.log('you clicked the save button');
}

function sayBack() {
  console.log('You clicked the back button');
}
export default function HeaderandFooter() {
  return (
    <div>
      <h1 align="center">Student Names Interview</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Stack spacing={10} direction="row" justifyContent="center">
        <Button variant="contained" onClick={saySave}>
          Save
        </Button>
        <Button variant="contained" onClick={sayBack}>
          Back
        </Button>
      </Stack>
    </div>
  );
}
