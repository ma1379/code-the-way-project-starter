import React from 'react';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function InterviewQuestions() {
  return (
    <Container fixed textAlign="true" justify="center">
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1300,
          height: 200,
        }}
      >
        {' '}
        1. On your application, you stated that you would like to be a
        ______________, why did you choose this career?
        <TextField
          id="filled-textarea"
          label=""
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
        />
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1300,
          height: 200,
        }}
      >
        {' '}
        2. Describe your personal strengths? Why do you describe those as
        strengths?
        <TextField
          id="filled-textarea"
          label=""
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
        />{' '}
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1300,
          height: 200,
        }}
      >
        {' '}
        3. Of the following words - Commitment, Leadership, and Achievement;
        which is most important? Why is it important to you?
        <TextField
          id="filled-textarea"
          label=""
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
        />{' '}
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1300,
          height: 200,
        }}
      >
        {' '}
        4. Describe a difficult situation/project and how you overcame it?
        <TextField
          id="filled-textarea"
          label=""
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
        />{' '}
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1300,
          height: 200,
        }}
      >
        {' '}
        5. What other extra-curricular activities, employment opportunities or
        other programs are you currently involved in or will you become involved
        in this year?
        <TextField
          id="filled-textarea"
          label=""
          multiline
          fullWidth
          maxRows={4}
          variant="filled"
        />{' '}
      </Box>
      <Divider>In the remaining questions, check only one answer</Divider>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        {' '}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            6. Are you willing to sacrifice some things you usually do after
            school to prepare for a very fulfilling career that you were
            designed to do?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            7. Are you interested in participating in one on one coaching
            concerning life after high school?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            8. Are you willing to manage your schedule to meet the program
            requirements?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            9. Are you able to communicate the expectations to your
            parent/guardian or mentor and ask for their support?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            10. Are you willing to be in a class with a diverse group of
            learners that may or may not know what you know?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            11. Are you willing to be open minded and courteous to your peers so
            that everyone in your class benefits from this experience?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            12. Are you willing to do what is necessary to represent the
            Lead2Change brand of excellence and professionalism?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            13. Are you willing to try new things and things that may have been
            hard for you in the past?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        components="span"
        sx={{
          p: 2,
          width: 1200,
          height: 200,
        }}
      >
        {' '}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            {' '}
            It’s important that you understand what you are committing to. We
            are looking for you to participate in weekly class sessions,
            bi-monthly Etiquette Boot Camps on a Saturday and a summer
            internship experience. How confident are you that you can completely
            commit to the activities of this program?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="yes"
              control={<Radio />}
              label="Very Confident"
            />
            <FormControlLabel
              value="maybe"
              control={<Radio />}
              label="Mildly Confident"
            />
            <FormControlLabel
              value="no"
              control={<Radio />}
              label="Not Confident at all"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </Container>
  );
}
