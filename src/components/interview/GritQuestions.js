import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';

const marks = [
    {
        value: 0,
        label: 'Very Much Like Me',
    },
    {
        value: 25,
        label: 'Mostly Like Me',
    },
    {
        value: 50,
        label: 'Somewhat Like Me',
    },
    {
        value: 75,
        label: 'Not Much Like Me',
    },
    {
        value: 100,
        label: 'Not Like Me At All',
    },
];


export default function GritSliderQuestions() {
    return (

    <Container fixed = "true" > 
    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
    }}> New ideas and projects sometimes distract me from previous ones. 
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,  
    }}> Setbacks do NOT discourage me.
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
        
    }}> I have been obsessed with a certian idea or project for a short time but later lost interest. 
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
        
    }}> I am a hard worker. 
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
        
    }}> I often set a goal but later  choose to pursue a different one. 
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
        
    }}> I have difficulty maintaining focus on projects that take more than a few months to complete.
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
        
    }}> I finish whatever I begin.
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>

    <Box components = "span" sx={{ 
        P: 5,
        width: 1000, height: 200,
        
    }}> I am diligent.
      <Slider
        aria-label="Restricted values"
        defaultValue={50}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
    </Container> 
    );
}
