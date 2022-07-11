import React from 'react';
import TextField from "@mui/material/TextField";
import RadioButton from "@mui/material/RadioButton";

export default function InterviewQuestions() {
    return (
    <h2 align = "center">'Interview Questions'</h2>;
    <body>
        <text>'On your application, you stated that you would like to be a ______________, why did you choose this career?'</text>;
        <TextField id="filled-required" label="" variant="filled" />;
        <text>'Describe your personal strengths? Why do you describe those as strengths?'</text>;
        <TextField id="filled-required" label="" variant="filled" />;
        <text>'Of the following words - Commitment, Leadership, and Achievement; which is most important? Why is it important to you?'</text>;
        <TextField id="filled-required" label="" variant="filled" />;
        <text>'Describe a difficult situation/project and how you overcame it?'</text>;
        <TextField id="filled-required" label="" variant="filled" />;
        <text>'What other extra-curricular activities, employment opportunities or other programs are you currently involved in or will you become involved in this year?'</text>;
        <TextField id="filled-required" label="" variant="filled" />;
    </body>
    );
}
