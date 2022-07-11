import React from 'react';
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

export default function InterviewQuestions() {
    return (
        <Container>
            <Box components="span" sx={{
                p: 2,
                width: 700,
                height: 200,
            }}> On your application, you stated that you would like to be a ______________, why did you choose this career?
                <TextField id='filled-required' label='' variant='filled' fullWidth sx={{ m: 5 }} />;
            </Box>
            <Box components="span" sx={{
                p: 2,
                width: 700,
                height: 200,
            }}> Describe your personal strengths? Why do you describe those as strengths?
                <TextField id='filled-required' label='' variant='filled' fullWidth sx={{ m: 5 }} />;
            </Box>
            <Box components="span" sx={{
                p: 2,
                width: 700,
                height: 200,
            }}> Of the following words - Commitment, Leadership, and Achievement; which is most important? Why is it important to you?
                <TextField id='filled-required' label='' variant='filled' fullWidth sx={{ m: 5 }} />;
            </Box>
            <Box components="span" sx={{
                p: 2,
                width: 700,
                height: 200,
            }}> Describe a difficult situation/project and how you overcame it?
                <TextField id='filled-required' label='' variant='filled' fullWidth sx={{ m: 5 }} />;
            </Box>
            <Box components="span" sx={{
                p: 2,
                width: 700,
                height: 200,
            }}> What other extra-curricular activities, employment opportunities or other programs are you currently involved in or will you become involved in this year?
                <TextField id='filled-required' label='' variant='filled' fullWidth sx={{ m: 5 }} />;
            </Box>
            <Divider>In the remaining questions, check only one answer</Divider>

        </Container>
    );
}

