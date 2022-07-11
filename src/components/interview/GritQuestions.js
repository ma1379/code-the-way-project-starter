import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 30,
    label: '0°C',
  },
  {
    value: 60,
    label: '20°C',
  },
  {
    value: 90,
    label: '37°C',
  },
  {
    value: 120,
    label: '100°C',
  },
];


export default function GritSliderQuestions() {
  return (
    <Box sx={{ 
        width: 1000,
        height: 300,
    }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
