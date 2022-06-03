import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function StudentsList(props) {
  const { students } = props;

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid item xs={12} key={student.id}>
            <Typography component="p">{student.id}</Typography>
            <Typography component="p">
              {student.studentLastName}, {student.studentFirstName}
            </Typography>
            <Typography component="p">
              Date of Birth: {student.studentDateOfBirth}
            </Typography>
            <Typography component="p">Email: {student.studentEmail}</Typography>
            <Typography component="p">
              Phone Number: {student.studentCellPhone}
            </Typography>
            <Button value={student.id}>Delete</Button>
            <Button value={student.id}>Update</Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

StudentsList.propTypes = {
  students: PropTypes.array.isRequired,
};
