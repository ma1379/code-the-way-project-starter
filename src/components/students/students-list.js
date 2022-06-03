import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function StudentsList(props) {
  const { students } = props;

  const activeStudents = students.filter((student) => student.Active === true);

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {activeStudents.map((student) => (
          <Grid item xs={12} key={student.id}>
            <p>{student.id}</p>
            <p>
              {student.StudentLastName}, {student.StudentFirstName}
            </p>
            <p>Date of Birth: {student.StudentDateOfBirth.substring(0, 10)}</p>
            <p>Email: {student.StudentEmail}</p>
            <p>Phone Number: {student.StudentCellPhone}</p>
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
