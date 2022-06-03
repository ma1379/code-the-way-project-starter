import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export default function StudentsList(props) {
  const { students } = props;

  // eslint-disable-next-line no-console
  console.log(students);

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {students.map((student) => (
          <Grid item xs={12} key={student.id}>
            <Typography component="body">{student.id}</Typography>
            <Typography component="body">
              {student.studentLastName}, {student.studentFirstName}
            </Typography>
            <Typography component="body">
              Date of Birth: {student.studentDateOfBirth}
            </Typography>
            <Typography component="body">
              Email: {student.studentEmail}
            </Typography>
            <Typography component="body">
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
